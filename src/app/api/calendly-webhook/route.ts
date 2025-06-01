import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sendEmail, getEmailSubject } from '@/lib/email';
import { getEmailTemplateComponent } from '@/emails';

export async function POST(request: NextRequest) {
  try {
    // Parse request body - Calendly webhook payload
    const body = await request.json();
    
    // Optional: Verify webhook signature for security
    // Uncomment when you have the webhook signing secret configured
    // const signature = request.headers.get('calendly-webhook-signature');
    // if (process.env.CALENDLY_WEBHOOK_SECRET && signature) {
    //   // Implement signature verification logic here
    //   console.log('Webhook signature verification would go here');
    // }
    
    // Validate webhook event type
    if (body.event !== 'invitee.created') {
      return NextResponse.json({
        message: 'Webhook event type not supported',
        eventType: body.event
      }, { status: 400 });
    }

    // Extract data from Calendly webhook payload
    // Based on official Calendly API documentation structure
    const email = body.payload?.email;
    const inviteeName = body.payload?.name;
    const scheduledEvent = body.payload?.scheduled_event;
    const meetingStartTime = scheduledEvent?.start_time;
    const meetingName = scheduledEvent?.name;
    
    if (!email) {
      return NextResponse.json({
        message: 'Email not found in webhook payload',
        payload: body.payload
      }, { status: 400 });
    }

    console.log('Processing Calendly booking:', {
      email,
      name: inviteeName,
      meetingName,
      startTime: meetingStartTime
    });

    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Calculate timestamps
    const now = new Date();
    const signupTimestamp = now.toISOString();
    const nextEmailDate = new Date(now.getTime() + (24 * 60 * 60 * 1000)); // +1 day for day 2
    const nextEmailScheduledTimestamp = nextEmailDate.toISOString();

    let emailStatus = 'pending';
    let emailError = null;

    try {
      // Send Day 1 Calendly Booked email
      const templateComponent = getEmailTemplateComponent('calendly_booked', 1);
      
      if (templateComponent) {
        const subject = getEmailSubject('calendly_booked', 1);
        
        const emailResult = await sendEmail({
          to: email,
          subject,
          templateComponent,
          templateProps: { 
            userEmail: email,
            userName: inviteeName,
            meetingName,
            meetingStartTime
          },
        });

        if (emailResult.success) {
          emailStatus = 'active';
        } else {
          emailStatus = 'error';
          emailError = emailResult.error;
        }
      } else {
        emailStatus = 'error';
        emailError = 'Template not found';
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      emailStatus = 'error';
      emailError = error instanceof Error ? error.message : 'Unknown email error';
    }

    // Check if email already exists in the sheet
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Email Campaigns!A:F',
    });

    const rows = existingData.data.values || [];
    const existingRowIndex = rows.findIndex(row => row[0] === email);

    if (existingRowIndex !== -1) {
      // Update existing row to calendly_booked
      const range = `Email Campaigns!B${existingRowIndex + 1}:F${existingRowIndex + 1}`;
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[
            'calendly_booked',
            signupTimestamp,
            '1', // last_email_sent_day
            nextEmailScheduledTimestamp,
            emailStatus
          ]]
        }
      });
    } else {
      // Create new row for calendly_booked
      const row = [
        email,
        'calendly_booked',
        signupTimestamp,
        '1', // last_email_sent_day
        nextEmailScheduledTimestamp,
        emailStatus
      ];

      // Save to Google Sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: 'Email Campaigns!A:F',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: [row]
        }
      });
    }

    return NextResponse.json({
      message: 'Calendly booking processed successfully',
      data: {
        email,
        inviteeName,
        meetingName,
        meetingStartTime,
        emailStatus,
        emailCampaignType: 'calendly_booked',
        dayInSequence: 1
      },
      ...(emailError && { emailError })
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      message: 'Error processing Calendly webhook',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 