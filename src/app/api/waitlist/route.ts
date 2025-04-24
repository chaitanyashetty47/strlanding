// import { NextRequest, NextResponse } from 'next/server';
// import { google } from 'googleapis';
// import { Resend } from 'resend';

// // Initialize Resend
// const resend = new Resend(process.env.RESEND_API_KEY!);

// export async function POST(request: NextRequest) {
//   try {
//     // Authenticate with Google Sheets
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
//       },
//       scopes: ['https://www.googleapis.com/auth/spreadsheets']
//     });

//     const sheets = google.sheets({ version: 'v4', auth });

//     // Parse request body
//     const body = await request.json();

//     let emailStatus = 'Not Sent'; // Default status

//     try {
//       // Send confirmation email to user using Resend
//       const emailResponse = await resend.emails.send({
//         from: process.env.RESEND_FROM_EMAIL!,
//         to: body.email,
//         subject: 'Welcome to Strentor!',
//         html: `
//           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//             <h2>Thank you for joining our waitlist!</h2>
//             <p>We're excited to have you on board. We'll keep you updated about:</p>
//             <ul>
//               <li>Latest product updates</li>
//               <li>Early access opportunities</li>
//               <li>Special offers</li>
//             </ul>
//             <p>Stay tuned for more information coming your way soon!</p>
//             <p><b>Best regards,</b><br>Strentor Team</p>
//           </div>
//         `,
//       });

//       // Update status if email sent successfully
//       if (emailResponse) {
//         emailStatus = 'Automated Email Sent';
//       }
//     } catch (emailError) {
//       console.error('Email sending failed:', emailError);
//       emailStatus = 'Email Failed';
//     }

//     // Prepare row data with email status
//     const row = [
//       new Date().toLocaleString('en-IN', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false
//       }),
//       body.email,
//       emailStatus // Add email status as third column
//     ];

//     // Save to Google Sheet
//     await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
//       range: 'Waitlist!A:C', // Updated range to include status column
//       valueInputOption: 'RAW',
//       insertDataOption: 'INSERT_ROWS',
//       requestBody: {
//         values: [row]
//       }
//     });

//     return NextResponse.json({
//       message: 'Form submitted successfully',
//       emailStatus
//     }, { status: 200 });

//   } catch (error) {
//     console.error('API Error:', error);
//     return NextResponse.json({
//       message: 'Error submitting form',
//       error: error instanceof Error ? error.message : 'Unknown error'
//     }, { status: 500 });
//   }
// }



import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
// import { Resend } from 'resend';

// Initialize Resend
// const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        // client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        // private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Parse request body
    const body = await request.json();

    let emailStatus = 'Not Sent'; // Default status

    try {
      // Prepare and send confirmation email using Resend
      // const emailResponse = await resend.emails.send({
      //   from: process.env.RESEND_FROM_EMAIL!,
      //   to: body.email,
      //   subject: 'Thank You for Your Interest!',
      //   html: `
      //     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      //       <h2><b>Hello ${body.name}!</b></h2>
      //       <h2>Thank you for reaching out!</h2>
            
      //       <p>We have received your information and are excited about the possibility of working together. 
      //       Here's a summary of what you've shared with us:</p>
            
      //       <ul>
      //         <li><b>Name:</b> ${body.name} ${body.surname}</li>
      //         <li><b>Country:</b> ${body.country}</li>
      //         <li><b>Contact:</b> ${body.dialCode} ${body.contactNumber}</li>
      //         <li><b>Services Interested In:</b> ${body.servicesInterested.join(', ')}</li>
      //       </ul>
            
      //       <p>Our team will review your information and get back to you shortly to discuss how we can best serve your needs.</p>
            
      //       <p><b>Best regards,</b><br>Strentor Team</p>
      //     </div>
      //   `,
      // });

      // Update status if email sent successfully
      // if (emailResponse) {
      //   emailStatus = 'Automated Email Sent';
      // }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      emailStatus = 'Email Failed';
    }

    // Prepare row data with email status
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
      body.servicesInterested.join(', '),
      emailStatus // Add email status as the last column
    ];

    // Append to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Form!A:I', // Updated range to include email status column
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
