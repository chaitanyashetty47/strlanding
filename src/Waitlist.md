# Email Campaign Implementation Checklist

## 1. Google Sheets Setup
- [x] Create a Google Sheet named "Email Campaigns" with columns:
  - `email`
  - `campaign_type` (waitlist, calendly_booked, calendly_abandoned_pending, calendly_abandoned)
  - `signup_timestamp`
  - `last_email_sent_day`
  - `next_email_scheduled_timestamp`
  - `campaign_status` (pending, active, completed, error, unsubscribed)
- [x] Set up Google Cloud Project, enable Google Sheets API, create Service Account, and share the sheet with the service account email.
- [x] Store credentials securely in your Next.js project.

## 2. Backend API Endpoints
- [ ] `/api/waitlist` (handles Waitlist Form submissions)
  - [ ] Validate and save email to Google Sheet with campaign_type 'waitlist'.
  - [ ] Send Day 1 Waitlist email via Resend.
  - [ ] Update last_email_sent_day and next_email_scheduled_timestamp.
- [ ] `/api/calendly-partial` (handles Calendly Form Abandonment capture)
  - [ ] Save email to Google Sheet with campaign_type 'calendly_abandoned_pending'.
- [ ] `/api/calendly-webhook` (handles Calendly booking confirmation)
  - [ ] Update Google Sheet row to campaign_type 'calendly_booked' on booking.
  - [ ] Send Day 1 Calendly Booked email via Resend.
  - [ ] Update last_email_sent_day and next_email_scheduled_timestamp.
- [ ] Helper: Use `google-spreadsheet` or Google API client for Sheets, and Resend SDK for emails.

## 3. Scheduler (Cron Job)
- [ ] Set up a daily (or more frequent) cron job (e.g., Vercel Cron Job) to trigger `/api/cron/send-emails`.
- [ ] In `/api/cron/send-emails`:
  - [ ] For each row with campaign_status 'active' or 'pending':
    - [ ] If campaign_type is 'calendly_abandoned_pending' and signup_timestamp is older than threshold, mark as 'calendly_abandoned', send Day 1 Abandonment email, update fields.
    - [ ] If next_email_scheduled_timestamp <= now, send the next email in the sequence, update last_email_sent_day and next_email_scheduled_timestamp, or mark as completed if sequence is done.

## 4. Frontend Changes
- [ ] WaitlistForm: Ensure it posts to `/api/waitlist`.
- [ ] Calendly Booking Button: Replace with a modal or page that uses a custom form to capture email before showing Calendly widget.
- [ ] Create `CalendlyFormWrapper` component:
  - [ ] Email input field that posts to `/api/calendly-partial`.
  - [ ] "Proceed to Schedule" button shows Calendly widget with email prefilled.
- [ ] Install and use `react-calendly` for widget integration.

## 5. Resend Email Campaigns
- [ ] Set up Resend account and API key.
- [ ] Create email templates for:
  - [ ] Waitlist Campaign (Day 1, 2, 5, 8, 11, 14)
  - [ ] Calendly Booked Campaign (Day 1, 2, 5, 8, 11, 14)
  - [ ] Calendly Abandonment Campaign (Day 1, 2, 5, 8, 11, 14)
- [ ] Store template IDs or identifiers for use in API calls.
- [ ] Implement unsubscribe handling (link in emails, webhook to update campaign_status in Sheet).

## 6. Testing & Validation
- [ ] Test each flow end-to-end:
  - [ ] Waitlist signup triggers correct sequence.
  - [ ] Calendly form abandonment triggers correct sequence after timeout.
  - [ ] Calendly booking triggers correct sequence and cancels abandonment.
- [ ] Check Google Sheet updates and email delivery.
- [ ] Monitor for errors and handle retries/logging as needed.

---

**Mark each item as complete as you implement and verify it.**
