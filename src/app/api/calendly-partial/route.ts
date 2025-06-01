import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

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

    // Check if email already exists in the sheet
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Email Campaigns!A:F',
    });

    const rows = existingData.data.values || [];
    const existingRowIndex = rows.findIndex(row => row[0] === email);

    if (existingRowIndex !== -1) {
      // Email exists, check current campaign_type
      const existingCampaignType = rows[existingRowIndex][1];
      
      // If it's already calendly_booked, don't overwrite
      if (existingCampaignType === 'calendly_booked') {
        return NextResponse.json({
          message: 'Email already has active Calendly booking',
          status: 'already_booked'
        }, { status: 200 });
      }
      
      // If it's not calendly_abandoned_pending, update it
      if (existingCampaignType !== 'calendly_abandoned_pending') {
        const range = `Email Campaigns!B${existingRowIndex + 1}:F${existingRowIndex + 1}`;
        await sheets.spreadsheets.values.update({
          spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
          range,
          valueInputOption: 'RAW',
          requestBody: {
            values: [[
              'calendly_abandoned_pending',
              signupTimestamp,
              '',  // last_email_sent_day
              '',  // next_email_scheduled_timestamp  
              'pending'
            ]]
          }
        });
      }
    } else {
      // Prepare row data for new entry
      const row = [
        email,
        'calendly_abandoned_pending',
        signupTimestamp,
        '', // last_email_sent_day (empty until conversion to calendly_abandoned)
        '', // next_email_scheduled_timestamp (empty until conversion)
        'pending'
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
      message: 'Calendly partial form captured successfully',
      status: 'captured'
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      message: 'Error capturing Calendly partial form',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 