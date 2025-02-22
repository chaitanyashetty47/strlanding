import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
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

    // Parse request body
    const body = await request.json();

    let emailStatus = 'Not Sent'; // Default status

    try {
      // Send confirmation email to user
      const userEmailData = {
        to: body.email,
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: 'Welcome to Strentor!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Thank you for joining our waitlist!</h2>
            <p>We're excited to have you on board. We'll keep you updated about:</p>
            <ul>
              <li>Latest product updates</li>
              <li>Early access opportunities</li>
              <li>Special offers</li>
            </ul>
            <p>Stay tuned for more information coming your way soon!</p>
            <p><b>Best regards,</b><br>Strentor Team</p>
          </div>
        `,
      };

      const [response] = await sgMail.send(userEmailData);
      
      // Update status if email sent successfully
      if (response.statusCode === 202) {
        emailStatus = 'Automated Email Sent';
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      emailStatus = 'Email Failed';
    }

    // Prepare row data with email status
    const row = [
      new Date().toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }),
      body.email,
      emailStatus // Add email status as third column
    ];

    // Save to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Waitlist!A:C', // Updated range to include status column
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row]
      }
    });

    return NextResponse.json({
      message: 'Form submitted successfully',
      emailStatus
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      message: 'Error submitting form',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}