# Backend Email Automation System - Setup Guide

## 🎉 Implementation Complete!

I've successfully implemented the complete backend email automation system for Strentor, including:

### ✅ What's Been Implemented

1. **Updated `/api/waitlist` Route**
   - Uses React Email templates
   - Saves to Google Sheets with proper campaign schema
   - Sends Day 1 waitlist email immediately
   - Schedules next email in sequence

2. **New `/api/calendly-partial` Route**
   - Captures email when user starts Calendly form
   - Sets campaign_type as 'calendly_abandoned_pending'
   - Prevents overwriting existing bookings

3. **New `/api/calendly-webhook` Route**
   - Handles successful Calendly bookings
   - Converts abandoned campaigns to booked
   - Sends Day 1 booking confirmation email

4. **New `/api/cron/send-emails` Route**
   - Automated email scheduler
   - Processes all campaigns daily
   - Converts pending abandonments after 24h
   - Sends sequential emails (Day 1, 2, 5, 8, 11, 14)
   - Marks campaigns as completed when done

5. **Vercel Cron Job Configuration**
   - `vercel.json` created
   - Runs daily at 9 AM UTC
   - Protected with CRON_SECRET

## 🔧 Required Environment Variables

Add these to your `.env.local` file:

```env
# Resend Email Service
RESEND_API_KEY=your_resend_api_key_here

# Google Sheets Integration
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----"
GOOGLE_SHEETS_SPREADSHEET_ID=your_google_sheet_id_here

# Cron Job Security
CRON_SECRET=your_secure_random_string_here
```

## 📊 Google Sheets Schema

Your "Email Campaigns" sheet should have these columns (A-F):

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| email | campaign_type | signup_timestamp | last_email_sent_day | next_email_scheduled_timestamp | campaign_status |

### Campaign Types:
- `waitlist` - From waitlist form submissions
- `calendly_abandoned_pending` - Email captured but no booking yet
- `calendly_abandoned` - Converted after 24h with no booking
- `calendly_booked` - Successfully booked a call

### Campaign Status:
- `pending` - Just signed up, Day 1 email scheduled
- `active` - In email sequence, receiving emails
- `completed` - Finished all 6 emails
- `error` - Email sending failed
- `unsubscribed` - User opted out

## 🚀 How the System Works

### Waitlist Flow:
1. User submits waitlist form → `/api/waitlist`
2. Immediate Day 1 email sent
3. Cron job sends Day 2, 5, 8, 11, 14 emails

### Calendly Abandonment Flow:
1. User enters email in Calendly form → `/api/calendly-partial`
2. Status: `calendly_abandoned_pending`
3. After 24h, cron job converts to `calendly_abandoned`
4. Day 1 abandonment email sent
5. Sequence continues: Day 2, 5, 8, 11, 14

### Calendly Booking Flow:
1. User books call → Calendly webhook → `/api/calendly-webhook`
2. Status changed to `calendly_booked`
3. Day 1 booking confirmation sent
4. Sequence continues: Day 2, 5, 8, 11, 14

## 🔄 Email Sequence Schedule

- **Day 1**: Immediate (upon signup/conversion)
- **Day 2**: +1 day
- **Day 5**: +3 days  
- **Day 8**: +3 days
- **Day 11**: +3 days
- **Day 14**: +3 days

## 🛠 Next Steps

### Frontend Integration (Task 4):
1. Update WaitlistForm to use `/api/waitlist`
2. Create CalendlyFormWrapper component
3. Install and configure react-calendly
4. Replace Calendly buttons with email capture flow

### Testing:
1. Test each API endpoint manually
2. Verify Google Sheets updates
3. Check email delivery in Resend dashboard
4. Test cron job functionality

### Production Deployment:
1. Set environment variables in Vercel
2. Deploy and verify cron job works
3. Monitor email delivery and error rates

## 📧 Template System

All email templates are React components in `/src/emails/`:
- Waitlist: 6 templates (Day 1, 2, 5, 8, 11, 14) ✅
- Calendly Booked: 1 template (Day 1) ✅
- Calendly Abandoned: 6 templates (Day 1, 2, 5, 8, 11, 14) ✅

## 🔒 Security Features

- Cron endpoint protected with CRON_SECRET
- Google Sheets API authentication
- Email validation and sanitization
- Error handling and logging

---

**The backend email automation system is now complete and ready for frontend integration!** 