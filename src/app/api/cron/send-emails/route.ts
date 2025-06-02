import { NextRequest, NextResponse } from 'next/server';
import { google, sheets_v4 } from 'googleapis';
import { sendEmail, getEmailSubject } from '@/lib/email';
import { getEmailTemplateComponent } from '@/emails';

// Sequence of email days
const EMAIL_SEQUENCE_DAYS = [1, 2, 5, 8, 11, 14];

// Time threshold for converting calendly_abandoned_pending to calendly_abandoned (24 hours)
const ABANDONMENT_THRESHOLD_MS = 24 * 60 * 60 * 1000;

// NEW: Retry configuration
const RETRY_CONFIG = {
  MAX_RETRIES: 3,           // Maximum number of retry attempts
  RETRY_DELAY_HOURS: 24,    // Wait 24 hours between retries
  PERMANENT_FAILURE_ERRORS: [
    'validation_error',      // Domain verification issues
    'invalid_email',        // Invalid email format
    'permanent_failure'     // Other permanent issues
  ]
};

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  console.log('🚀 Cron job started at:', new Date().toISOString());

  // Verify the request is from Vercel Cron service
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    console.log('❌ Unauthorized request');
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    // Authenticate with Google Sheets
    console.log('📊 Authenticating with Google Sheets...');
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get all campaign data - UPDATED: Now includes retry counter (column G)
    console.log('📋 Fetching campaign data...');
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Email_Campaigns!A:G', // UPDATED: Extended to include retry counter
    });

    const rows = response.data.values || [];
    if (rows.length <= 1) {
      console.log('ℹ️ No campaigns to process');
      return NextResponse.json({ message: 'No campaigns to process', processed: 0 });
    }

    console.log(`📈 Found ${rows.length - 1} campaigns to check`);

    const now = new Date();
    let processedCount = 0;
    const results = [];
    const emailsSent = [];
    const retriesAttempted = [];

    // Helper function to add delay between requests
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    // Helper function to check if error is permanent
    const isPermanentError = (errorName: string) => {
      return RETRY_CONFIG.PERMANENT_FAILURE_ERRORS.includes(errorName);
    };
    
    // Process each row (skip header row) with improved error handling and retry logic
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const [email, campaignType, signupTimestamp, lastEmailSentDay, nextEmailScheduledTimestamp, campaignStatus, retryCountStr] = row;
      const retryCount = parseInt(retryCountStr) || 0;

      console.log(`\n🔍 Processing row ${i}: ${email} - ${campaignType} (Status: ${campaignStatus}, Retries: ${retryCount})`);

      // IMPROVED: Better validation
      if (!email || !campaignType || !signupTimestamp) {
        console.log(`⚠️ Skipping row ${i}: Missing required fields`);
        continue;
      }

      try {
        let emailSent = false;
        
        // Handle calendly_abandoned_pending conversion
        if (campaignType === 'calendly_abandoned_pending') {
          const signupTime = new Date(signupTimestamp);
          const timeSinceSignup = now.getTime() - signupTime.getTime();

          if (timeSinceSignup >= ABANDONMENT_THRESHOLD_MS) {
            console.log(`📧 Converting ${email} to abandoned and sending Day 1`);
            const result = await convertToAbandonedAndSendEmail(sheets, i + 1, email);
            results.push(result);
            processedCount++;
            
            // IMPROVED: Only mark as sent if actually successful
            if (result.status !== 'error' && 'emailStatus' in result && result.emailStatus === 'active') {
              emailSent = true;
              emailsSent.push(email);
            }
          }
          continue;
        }

        // NEW: Enhanced status handling with retry logic
        if (campaignStatus === 'error') {
          // Check if we should retry this failed campaign
          const shouldRetry = await shouldRetryFailedCampaign(
            email, 
            retryCount, 
            nextEmailScheduledTimestamp, 
            now
          );
          
          if (!shouldRetry) {
            console.log(`⏭️ Skipping ${email}: Error status, no retry needed (attempts: ${retryCount}/${RETRY_CONFIG.MAX_RETRIES})`);
            continue;
          }
          
          console.log(`🔄 Retrying failed campaign for ${email} (attempt ${retryCount + 1}/${RETRY_CONFIG.MAX_RETRIES})`);
          retriesAttempted.push(email);
          
          // Continue processing as if it were active for the retry
        } else if (!['pending', 'active'].includes(campaignStatus)) {
          console.log(`⏭️ Skipping ${email}: Status is ${campaignStatus}`);
          continue;
        }

        // Check if it's time to send the next email (for active/pending campaigns or retries)
        if (nextEmailScheduledTimestamp && new Date(nextEmailScheduledTimestamp) <= now) {
          const currentDay = parseInt(lastEmailSentDay) || 0;
          const nextDay = getNextEmailDay(currentDay);

          if (nextDay) {
            console.log(`📧 Sending Day ${nextDay} email to ${email}${campaignStatus === 'error' ? ' (RETRY)' : ''}`);
            const result = await sendScheduledEmail(sheets, i + 1, email, campaignType, nextDay, retryCount);
            results.push(result);
            processedCount++;
            
            // IMPROVED: Only mark as sent if actually successful
            if (result.status !== 'error' && 'emailStatus' in result && result.emailStatus === 'active') {
              emailSent = true;
              emailsSent.push(email);
            }
          } else {
            console.log(`✅ Campaign completed for ${email}`);
            await updateCampaignStatus(sheets, i + 1, 'completed', retryCount);
            results.push({ email, status: 'completed' });
            processedCount++;
          }
        }
        
        // IMPROVED: Only delay if we actually sent an email
        if (emailSent) {
          console.log(`⏳ Rate limiting: waiting 800ms before next email...`);
          await delay(800);
        }
        
      } catch (error) {
        console.error(`❌ Error processing campaign for ${email}:`, error);
        results.push({ 
          email, 
          status: 'error', 
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        });
      }
    }

    const duration = Date.now() - startTime;
    console.log(`\n✅ Cron job completed in ${duration}ms`);
    console.log(`📊 Processed: ${processedCount}, Emails sent: ${emailsSent.length}, Retries attempted: ${retriesAttempted.length}`);
    console.log(`📧 Sent to: ${emailsSent.join(', ')}`);
    console.log(`🔄 Retried: ${retriesAttempted.join(', ')}`);

    return NextResponse.json({
      message: 'Email processing completed',
      processed: processedCount,
      emailsSent: emailsSent.length,
      sentTo: emailsSent,
      retriesAttempted: retriesAttempted.length,
      retriedEmails: retriesAttempted,
      duration: `${duration}ms`,
      results
    });

  } catch (error) {
    console.error('💥 Cron job error:', error);
    return NextResponse.json({
      message: 'Error in cron job',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// NEW: Function to determine if a failed campaign should be retried
async function shouldRetryFailedCampaign(
  email: string, 
  retryCount: number, 
  lastAttemptTimestamp: string, 
  now: Date
): Promise<boolean> {
  // Don't retry if we've exceeded max retries
  if (retryCount >= RETRY_CONFIG.MAX_RETRIES) {
    console.log(`❌ Max retries exceeded for ${email} (${retryCount}/${RETRY_CONFIG.MAX_RETRIES})`);
    return false;
  }

  // Don't retry if not enough time has passed
  if (lastAttemptTimestamp) {
    const lastAttempt = new Date(lastAttemptTimestamp);
    const hoursSinceLastAttempt = (now.getTime() - lastAttempt.getTime()) / (1000 * 60 * 60);
    
    if (hoursSinceLastAttempt < RETRY_CONFIG.RETRY_DELAY_HOURS) {
      console.log(`⏰ Too soon to retry ${email} (${hoursSinceLastAttempt.toFixed(1)}h < ${RETRY_CONFIG.RETRY_DELAY_HOURS}h)`);
      return false;
    }
  }

  console.log(`✅ Retry conditions met for ${email}`);
  return true;
}

// Helper function to get the next email day in sequence
function getNextEmailDay(currentDay: number): number | null {
  const currentIndex = EMAIL_SEQUENCE_DAYS.indexOf(currentDay);
  if (currentIndex === -1 || currentIndex === EMAIL_SEQUENCE_DAYS.length - 1) {
    return null; // Campaign completed
  }
  return EMAIL_SEQUENCE_DAYS[currentIndex + 1];
}

// Helper function to get the previous email day in sequence
function getPreviousEmailDay(currentDay: number): number {
  const currentIndex = EMAIL_SEQUENCE_DAYS.indexOf(currentDay);
  if (currentIndex === -1 || currentIndex === 0) {
    return 0; // No previous day, return 0
  }
  return EMAIL_SEQUENCE_DAYS[currentIndex - 1];
}

// Helper function to calculate next email timestamp
function calculateNextEmailTimestamp(currentDay: number): string {
  const nextDay = getNextEmailDay(currentDay);
  if (!nextDay) return '';

  const now = new Date();
  let daysToAdd;

  // Calculate days to add based on sequence
  switch (nextDay) {
    case 2: daysToAdd = 1; break;  // Day 1 -> Day 2 (1 day)
    case 5: daysToAdd = 3; break;  // Day 2 -> Day 5 (3 days)
    case 8: daysToAdd = 3; break;  // Day 5 -> Day 8 (3 days)
    case 11: daysToAdd = 3; break; // Day 8 -> Day 11 (3 days)
    case 14: daysToAdd = 3; break; // Day 11 -> Day 14 (3 days)
    default: daysToAdd = 1;
  }

  const nextEmailDate = new Date(now.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
  return nextEmailDate.toISOString();
}

// IMPROVED: Better error handling and logging
async function convertToAbandonedAndSendEmail(sheets: sheets_v4.Sheets, rowIndex: number, email: string) {
  try {
    console.log(`🔄 Converting ${email} to abandoned campaign...`);
    
    // Send Day 1 Calendly Abandoned email
    const templateComponent = getEmailTemplateComponent('calendly_abandoned', 1);
    let emailStatus = 'error';
    let emailError = null;

    if (!templateComponent) {
      console.error(`❌ Template not found for calendly_abandoned day 1`);
      emailError = 'Template not found';
    } else {
      const subject = getEmailSubject('calendly_abandoned', 1);
      console.log(`📧 Attempting to send: "${subject}" to ${email}`);
      
      const emailResult = await sendEmail({
        to: email,
        subject,
        templateComponent,
        templateProps: { userEmail: email },
      });

      emailStatus = emailResult.success ? 'active' : 'error';
      if (!emailResult.success) {
        console.error(`❌ Email failed for ${email}:`, emailResult.error);
        emailError = emailResult.error;
      } else {
        console.log(`✅ Email sent successfully to ${email}`);
      }
    }

    // Update row with new campaign type and schedule next email - FIXED: Proper day advancement logic
    const range = `Email_Campaigns!B${rowIndex}:G${rowIndex}`;
    
    let finalLastEmailSentDay;
    let finalNextEmailTimestamp;
    let finalRetryCount;
    
    if (emailStatus === 'active') {
      // EMAIL SUCCEEDED - Day 1 completed, schedule Day 2
      finalLastEmailSentDay = '1';
      finalNextEmailTimestamp = calculateNextEmailTimestamp(1);
      finalRetryCount = '0';
      console.log(`✅ Day 1 abandoned email succeeded for ${email}, scheduling Day 2`);
    } else {
      // EMAIL FAILED - Stay on Day 1, retry later
      finalLastEmailSentDay = '0'; // Keep at 0 since Day 1 didn't succeed
      finalNextEmailTimestamp = new Date(Date.now() + (RETRY_CONFIG.RETRY_DELAY_HOURS * 60 * 60 * 1000)).toISOString();
      finalRetryCount = '1';
      console.log(`❌ Day 1 abandoned email failed for ${email}, will retry Day 1 next time`);
    }
    
    console.log(`📊 Updating sheet for ${email}...`);
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          'calendly_abandoned',
          new Date().toISOString(),
          finalLastEmailSentDay,    // FIXED: Only advance if email succeeded
          finalNextEmailTimestamp,
          emailStatus,
          finalRetryCount           // FIXED: Proper retry counter logic
        ]]
      }
    });

    return {
      email,
      status: 'converted_and_sent',
      day: 1,
      emailStatus,
      ...(emailError && { emailError })
    };
  } catch (error) {
    console.error(`💥 Error converting abandoned campaign for ${email}:`, error);
    return { 
      email, 
      status: 'error', 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// IMPROVED: Better error handling, logging, and retry tracking
async function sendScheduledEmail(sheets: sheets_v4.Sheets, rowIndex: number, email: string, campaignType: string, day: number, currentRetryCount: number = 0) {
  try {
    console.log(`📧 Sending ${campaignType} day ${day} to ${email}...`);
    
    // Send email
    const templateComponent = getEmailTemplateComponent(campaignType, day);
    let emailStatus = 'error';
    let emailError = null;
    let newRetryCount = currentRetryCount;

    if (!templateComponent) {
      console.error(`❌ Template not found for ${campaignType} day ${day}`);
      emailError = 'Template not found';
      newRetryCount = currentRetryCount + 1;
    } else {
      const subject = getEmailSubject(campaignType, day);
      console.log(`📧 Attempting to send: "${subject}" to ${email}`);
      
      const emailResult = await sendEmail({
        to: email,
        subject,
        templateComponent,
        templateProps: { userEmail: email },
      });

      if (emailResult.success) {
        emailStatus = 'active';
        newRetryCount = 0; // Reset retry counter on success
        console.log(`✅ Email sent successfully to ${email}`);
      } else {
        emailStatus = 'error';
        emailError = emailResult.error;
        newRetryCount = currentRetryCount + 1;
        console.error(`❌ Email failed for ${email}:`, emailResult.error);
        
        // Check if this is a permanent failure
        if (emailError && isPermanentError(emailError)) {
          emailStatus = 'permanently_failed';
          console.log(`🚫 Permanent failure detected for ${email}, marking as permanently failed`);
        }
      }
    }

    // CRITICAL FIX: Only advance day counter if email actually succeeded
    let finalLastEmailSentDay;
    let finalNextEmailTimestamp;
    let finalCampaignStatus;
    
    if (emailStatus === 'active') {
      // EMAIL SUCCEEDED - Advance to next day
      finalLastEmailSentDay = day.toString();
      finalNextEmailTimestamp = calculateNextEmailTimestamp(day);
      
      if (!finalNextEmailTimestamp) {
        // This was the final email and it succeeded
        finalCampaignStatus = 'completed';
        finalNextEmailTimestamp = new Date().toISOString(); // Set current time for completed campaigns
      } else {
        // More emails in sequence
        finalCampaignStatus = 'active';
      }
      
      // Reset retry counter on success
      newRetryCount = 0;
      console.log(`✅ Email succeeded for ${email}, advancing to next day in sequence`);
      
    } else {
      // EMAIL FAILED - DO NOT advance day counter, retry same day
      // Get the previous successful day (the day before the current failed attempt)
      const previousSuccessfulDay = getPreviousEmailDay(day);
      finalLastEmailSentDay = previousSuccessfulDay.toString(); // Keep at previous successful day
      finalNextEmailTimestamp = new Date(Date.now() + (RETRY_CONFIG.RETRY_DELAY_HOURS * 60 * 60 * 1000)).toISOString(); // Set retry time
      
      if (emailStatus === 'permanently_failed' || newRetryCount >= RETRY_CONFIG.MAX_RETRIES) {
        finalCampaignStatus = 'permanently_failed';
        console.log(`🚫 Permanent failure for ${email}, no more retries`);
      } else {
        finalCampaignStatus = 'error';
        console.log(`❌ Email failed for ${email}, will retry same day ${day} next time (attempt ${newRetryCount}/${RETRY_CONFIG.MAX_RETRIES})`);
      }
    }
    
    const range = `Email_Campaigns!D${rowIndex}:G${rowIndex}`;
    console.log(`📊 Updating sheet for ${email} - Day: ${finalLastEmailSentDay}, Status: ${finalCampaignStatus}, Retries: ${newRetryCount}`);
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          finalLastEmailSentDay,    // FIXED: Only advance if email succeeded
          finalNextEmailTimestamp,
          finalCampaignStatus,
          newRetryCount.toString()
        ]]
      }
    });

    return {
      email,
      status: 'sent',
      campaignType,
      day,
      emailStatus,
      retryCount: newRetryCount,
      ...(emailError && { emailError })
    };
  } catch (error) {
    console.error(`💥 Error sending scheduled email for ${email}:`, error);
    return { 
      email, 
      status: 'error', 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Helper function to check if error is permanent
function isPermanentError(errorMessage: string): boolean {
  const permanentErrorKeywords = [
    'validation_error',
    'domain_verification',
    'invalid_email',
    'permanently'
  ];
  
  return permanentErrorKeywords.some(keyword => 
    errorMessage.toLowerCase().includes(keyword.toLowerCase())
  );
}

// UPDATED: Helper function to update campaign status with retry counter
async function updateCampaignStatus(sheets: sheets_v4.Sheets, rowIndex: number, status: string, retryCount: number = 0) {
  const range = `Email_Campaigns!F${rowIndex}:G${rowIndex}`; // UPDATED: Include retry counter
  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[status, retryCount.toString()]]
    }
  });
} 