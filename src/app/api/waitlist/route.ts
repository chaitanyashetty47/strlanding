import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sendEmail, getEmailSubject } from '@/lib/email';
import { getEmailTemplateComponent } from '@/emails';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({
        message: 'Email is required',
      }, { status: 400 });
    }

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
      // Send Day 1 Waitlist email
      const templateComponent = getEmailTemplateComponent('waitlist', 1);
      
      if (templateComponent) {
        const subject = getEmailSubject('waitlist', 1);
        
        const emailResult = await sendEmail({
          to: email,
          subject,
          templateComponent,
          templateProps: { userEmail: email },
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

    // Prepare row data for Google Sheets (according to schema in Waitlist.md)
    const row = [
      email,
      'waitlist',
      signupTimestamp,
      '1', // last_email_sent_day
      nextEmailScheduledTimestamp,
      emailStatus
    ];

    // Save to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Email Campaigns!A:F', // Updated to match our campaign schema
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row]
      }
    });

    return NextResponse.json({
      message: 'Waitlist signup successful',
      emailStatus,
      ...(emailError && { emailError })
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      message: 'Error processing waitlist signup',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
