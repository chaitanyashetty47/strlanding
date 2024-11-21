import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

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

    // Prepare row data
    const row = [
      new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }),
      body.name,
      body.surname,
      body.email,
      body.country,
      body.dialCode,
      body.contactNumber,
      body.servicesInterested.join(', '), // Convert array to comma-separated string
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Form!A:G',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row]
      }
    });

    return NextResponse.json({ 
      message: 'Form submitted successfully' 
    }, { status: 200 });

  } catch (error) {
    console.error('Google Sheets API Error:', error);
    return NextResponse.json({ 
      message: 'Error submitting form', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}