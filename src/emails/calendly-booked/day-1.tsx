import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface CalendlyBookedDay1EmailProps {
  userEmail?: string;
  userName?: string;
  meetingName?: string;
  meetingStartTime?: string;
}

export const CalendlyBookedDay1Email = ({
  userEmail = 'user@example.com',
  userName = 'there',
  meetingName,
  meetingStartTime,
}: CalendlyBookedDay1EmailProps) => {
  // Format the meeting start time if available
  const formatMeetingTime = (dateString?: string) => {
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      return date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
      });
    } catch {
      return dateString;
    }
  };

  const formattedMeetingTime = formatMeetingTime(meetingStartTime);

  return (
    <Html>
      <Head />
      <Preview>Your Discovery Call is Confirmed! Here's What to Expect</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Heading style={h1}>🎯 STRENTOR</Heading>
          </Section>
          
          <Heading style={h2}>🎉 Your Discovery Call is Confirmed!</Heading>
          
          <Text style={text}>Hi {userName}!</Text>
          
          <Text style={text}>
            Congratulations on taking this crucial step toward your transformation! Your Discovery Call with our expert team has been successfully scheduled.
          </Text>

          {(meetingName || formattedMeetingTime) && (
            <Section style={meetingDetailsSection}>
              <Text style={meetingDetailsTitle}>📅 Your Meeting Details</Text>
              {meetingName && (
                <Text style={meetingDetail}>
                  <strong>Session:</strong> {meetingName}
                </Text>
              )}
              {formattedMeetingTime && (
                <Text style={meetingDetail}>
                  <strong>Date & Time:</strong> {formattedMeetingTime}
                </Text>
              )}
            </Section>
          )}
          
          <Section style={confirmationSection}>
            <Text style={confirmationTitle}>✅ What Happens Next</Text>
            <Text style={bulletPoint}>📞 You'll receive a calendar invitation with call details</Text>
            <Text style={bulletPoint}>📋 We'll send you a pre-call questionnaire (coming soon)</Text>
            <Text style={bulletPoint}>🎯 Our team will review your goals and prepare a customized approach</Text>
            <Text style={bulletPoint}>🚀 During the call, we'll create your personalized transformation roadmap</Text>
          </Section>
          
          <Section style={expectationSection}>
            <Text style={expectationTitle}>🔍 What to Expect During Your Call</Text>
            <Text style={expectationContent}>
              This is a comprehensive strategy session, not a sales call. Our expert will:
            </Text>
            <Text style={bulletPoint}>🎯 <strong>Assess Your Current Situation:</strong> Understanding where you are now</Text>
            <Text style={bulletPoint}>🚀 <strong>Define Your Vision:</strong> Clarifying exactly where you want to be</Text>
            <Text style={bulletPoint}>🛠️ <strong>Create Your Roadmap:</strong> Mapping out the specific steps to get there</Text>
            <Text style={bulletPoint}>💡 <strong>Identify Quick Wins:</strong> Actions you can take immediately</Text>
          </Section>
          
          <Text style={preparationText}>
            📝 <strong>How to Prepare:</strong> Come ready to discuss your goals, challenges, and what you've tried before. The more open you are, the more valuable your session will be!
          </Text>
          
          <Text style={text}>
            We're genuinely excited to be part of your transformation journey and can't wait to help you unlock your full potential.
          </Text>
          
          <Text style={text}>
            See you soon,<br />
            <strong>The Strentor Team</strong>
          </Text>
          
          <Section style={footer}>
            <Text style={footerText}>
              Follow us: 
              <Link href="https://www.instagram.com/strentor/" style={link}> Instagram</Link>
            </Text>
            <Text style={footerText}>
              Need to reschedule? Simply reply to this email or contact us directly.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CalendlyBookedDay1Email;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const logoContainer = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const h1 = {
  color: '#F31818',
  fontSize: '36px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0',
  letterSpacing: '2px',
};

const h2 = {
  color: '#1f1f1f',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const text = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '16px 0',
};

const confirmationSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const confirmationTitle = {
  color: '#16a34a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const expectationSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const expectationTitle = {
  color: '#0ea5e9',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const expectationContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const bulletPoint = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '8px 0',
  paddingLeft: '8px',
};

const preparationText = {
  color: '#F31818',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#fef2f2',
  borderLeft: '4px solid #F31818',
  borderRadius: '4px',
};

const footer = {
  marginTop: '40px',
  paddingTop: '20px',
  borderTop: '1px solid #eaeaea',
};

const footerText = {
  color: '#666666',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '4px 0',
  textAlign: 'center' as const,
};

const link = {
  color: '#F31818',
  textDecoration: 'underline',
};

const meetingDetailsSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const meetingDetailsTitle = {
  color: '#16a34a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const meetingDetail = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '8px 0',
}; 