import { NextRequest, NextResponse } from 'next/server';
import { google, sheets_v4 } from 'googleapis';
import { sendEmail, getEmailSubject } from '@/lib/email';
import { getEmailTemplateComponent } from '@/emails';

// Sequence of email days
const EMAIL_SEQUENCE_DAYS = [1, 2, 5, 8, 11, 14];

// Time threshold for converting calendly_abandoned_pending to calendly_abandoned (24 hours)
const ABANDONMENT_THRESHOLD_MS = 24 * 60 * 60 * 1000;

export async function GET(request: NextRequest) {
  // Verify the request is from Vercel Cron service
  const cronHeader = request.headers.get('x-vercel-cron');
  if (!cronHeader) {
    return NextResponse.json({ message: 'Unauthorized - Not from Vercel Cron' }, { status: 401 });
  }

  try {
    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get all campaign data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Email Campaigns!A:F',
    });

    const rows = response.data.values || [];
    if (rows.length <= 1) {
      return NextResponse.json({ message: 'No campaigns to process', processed: 0 });
    }

    const now = new Date();
    let processedCount = 0;
    const results = [];

    // Process each row (skip header row)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const [email, campaignType, signupTimestamp, lastEmailSentDay, nextEmailScheduledTimestamp, campaignStatus] = row;

      if (!email || !campaignType || !signupTimestamp) continue;

      try {
        // Handle calendly_abandoned_pending conversion
        if (campaignType === 'calendly_abandoned_pending') {
          const signupTime = new Date(signupTimestamp);
          const timeSinceSignup = now.getTime() - signupTime.getTime();

          if (timeSinceSignup >= ABANDONMENT_THRESHOLD_MS) {
            // Convert to calendly_abandoned and send Day 1 email
            const result = await convertToAbandonedAndSendEmail(sheets, i + 1, email);
            results.push(result);
            processedCount++;
          }
          continue;
        }

        // Skip if campaign is completed, error, or unsubscribed
        if (!['pending', 'active'].includes(campaignStatus)) continue;

        // Check if it's time to send the next email
        if (nextEmailScheduledTimestamp && new Date(nextEmailScheduledTimestamp) <= now) {
          const currentDay = parseInt(lastEmailSentDay) || 0;
          const nextDay = getNextEmailDay(currentDay);

          if (nextDay) {
            // Send next email in sequence
            const result = await sendScheduledEmail(sheets, i + 1, email, campaignType, nextDay);
            results.push(result);
            processedCount++;
          } else {
            // Campaign completed
            await updateCampaignStatus(sheets, i + 1, 'completed');
            results.push({ email, status: 'completed' });
            processedCount++;
          }
        }
      } catch (error) {
        console.error(`Error processing campaign for ${email}:`, error);
        results.push({ 
          email, 
          status: 'error', 
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        });
      }
    }

    return NextResponse.json({
      message: 'Email processing completed',
      processed: processedCount,
      results
    });

  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json({
      message: 'Error in cron job',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// Helper function to get the next email day in sequence
function getNextEmailDay(currentDay: number): number | null {
  const currentIndex = EMAIL_SEQUENCE_DAYS.indexOf(currentDay);
  if (currentIndex === -1 || currentIndex === EMAIL_SEQUENCE_DAYS.length - 1) {
    return null; // Campaign completed
  }
  return EMAIL_SEQUENCE_DAYS[currentIndex + 1];
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

// Helper function to convert calendly_abandoned_pending to calendly_abandoned
async function convertToAbandonedAndSendEmail(sheets: sheets_v4.Sheets, rowIndex: number, email: string) {
  try {
    // Send Day 1 Calendly Abandoned email
    const templateComponent = getEmailTemplateComponent('calendly_abandoned', 1);
    let emailStatus = 'error';
    let emailError = null;

    if (templateComponent) {
      const subject = getEmailSubject('calendly_abandoned', 1);
      
      const emailResult = await sendEmail({
        to: email,
        subject,
        templateComponent,
        templateProps: { userEmail: email },
      });

      emailStatus = emailResult.success ? 'active' : 'error';
      if (!emailResult.success) {
        emailError = emailResult.error;
      }
    }

    // Update row with new campaign type and schedule next email
    const nextEmailTimestamp = calculateNextEmailTimestamp(1);
    const range = `Email Campaigns!B${rowIndex}:F${rowIndex}`;
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          'calendly_abandoned',
          new Date().toISOString(), // Update signup timestamp to abandonment time
          '1', // last_email_sent_day
          nextEmailTimestamp,
          emailStatus
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
    console.error(`Error converting abandoned campaign for ${email}:`, error);
    return { 
      email, 
      status: 'error', 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Helper function to send scheduled email
async function sendScheduledEmail(sheets: sheets_v4.Sheets, rowIndex: number, email: string, campaignType: string, day: number) {
  try {
    // Send email
    const templateComponent = getEmailTemplateComponent(campaignType, day);
    let emailStatus = 'error';
    let emailError = null;

    if (templateComponent) {
      const subject = getEmailSubject(campaignType, day);
      
      const emailResult = await sendEmail({
        to: email,
        subject,
        templateComponent,
        templateProps: { userEmail: email },
      });

      emailStatus = emailResult.success ? 'active' : 'error';
      if (!emailResult.success) {
        emailError = emailResult.error;
      }
    }

    // Update row with new day and next email timestamp
    const nextEmailTimestamp = calculateNextEmailTimestamp(day);
    const range = `Email Campaigns!D${rowIndex}:F${rowIndex}`;
    
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          day.toString(), // last_email_sent_day
          nextEmailTimestamp,
          nextEmailTimestamp ? emailStatus : 'completed'
        ]]
      }
    });

    return {
      email,
      status: 'sent',
      campaignType,
      day,
      emailStatus,
      ...(emailError && { emailError })
    };
  } catch (error) {
    console.error(`Error sending scheduled email for ${email}:`, error);
    return { 
      email, 
      status: 'error', 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

// Helper function to update campaign status
async function updateCampaignStatus(sheets: sheets_v4.Sheets, rowIndex: number, status: string) {
  const range = `Email Campaigns!F${rowIndex}`;
  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[status]]
    }
  });
} 