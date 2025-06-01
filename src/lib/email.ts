import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@strentor.com';

export interface EmailSendParams {
  to: string;
  subject: string;
  templateComponent: React.ComponentType<Record<string, unknown>>;
  templateProps?: Record<string, unknown>;
  from?: string;
}

export async function sendEmail({
  to,
  subject,
  templateComponent: Template,
  templateProps = {},
  from = fromEmail, // Replace with your verified domain
}: EmailSendParams) {
  try {
    // Render the React component to HTML
    const html = await render(React.createElement(Template, templateProps));
    
    // Send email via Resend
    const result = await resend.emails.send({
      from: from || fromEmail,
      to: [to],
      subject,
      html,
    });

    console.log('Email sent successfully:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown email error' 
    };
  }
}

// Helper function to get email subject for campaign and day
export function getEmailSubject(campaignType: string, day: number): string {
  const subjects: Record<string, Record<number, string>> = {
    waitlist: {
      1: 'Welcome to Strentor - Your Transformation Journey Begins! 🚀',
      2: 'Top 3 Transformation Accelerators That Actually Work',
      5: 'The Psychology of Breakthrough Moments',
      8: 'Your Weekly Progress Check-In',
      11: 'Advanced Strategies for Lasting Change',
      14: 'Ready to Take Your Transformation to the Next Level?',
    },
    calendly_booked: {
      1: 'Your Discovery Call is Confirmed! Here\'s What to Expect',
      2: 'Preparing for Success: Your Pre-Call Checklist',
      5: 'Maximizing Your Transformation Call',
      8: 'Advanced Questions to Ask During Your Session',
      11: 'Making the Most of Your Investment',
      14: 'Ready to Begin Your Transformation Journey?',
    },
    calendly_abandoned: {
      1: 'Did Something Come Up? Let\'s Get You Scheduled',
      2: 'Your Transformation is Just One Click Away',
      5: 'Don\'t Let This Opportunity Slip By',
      8: 'Last Chance: Reserve Your Spot',
      11: 'We\'re Here to Help - Schedule Your Call',
      14: 'Final Reminder: Your Transformation Awaits',
    },
  };

  return subjects[campaignType]?.[day] || `Strentor Update - Day ${day}`;
} 