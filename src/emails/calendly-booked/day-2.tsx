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

interface CalendlyBookedDay2EmailProps {
  userEmail?: string;
  userName?: string;
}

export const CalendlyBookedDay2Email = ({
  userEmail = 'user@example.com',
  userName = 'there',
}: CalendlyBookedDay2EmailProps) => (
  <Html>
    <Head />
    <Preview>Preparing for Success - Your Pre-Call Checklist</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🎯 Preparing for Success</Heading>
        
        <Text style={text}>Hi {userName}!</Text>
        
        <Text style={text}>
          Your Discovery Call is approaching, and I want to make sure you get maximum value from our time together. Here's your pre-call preparation checklist to ensure we make the most of your session.
        </Text>
        
        <Section style={checklistSection}>
          <Text style={checklistTitle}>✅ Your Pre-Call Checklist</Text>
          <Text style={bulletPoint}>📝 <strong>Write down your top 3 goals:</strong> What do you want to achieve in the next 90 days?</Text>
          <Text style={bulletPoint}>🚧 <strong>Identify your biggest challenges:</strong> What's been holding you back so far?</Text>
          <Text style={bulletPoint}>📊 <strong>Assess your current situation:</strong> Where are you now vs. where you want to be?</Text>
          <Text style={bulletPoint}>💰 <strong>Consider your investment capacity:</strong> What's your budget for transformation?</Text>
          <Text style={bulletPoint}>⏰ <strong>Think about your time availability:</strong> How many hours per week can you commit?</Text>
        </Section>
        
        <Section style={questionsSection}>
          <Text style={questionsTitle}>🤔 Questions to Reflect On</Text>
          <Text style={questionItem}>• What would your life look like if you achieved your transformation goals?</Text>
          <Text style={questionItem}>• What's the cost of staying where you are now?</Text>
          <Text style={questionItem}>• What support do you need most: accountability, expertise, or motivation?</Text>
          <Text style={questionItem}>• What's worked for you in the past, and what hasn't?</Text>
        </Section>
        
        <Text style={preparationTip}>
          💡 <strong>Pro Tip:</strong> The more honest and open you are during our call, the better we can help you create a personalized roadmap for success.
        </Text>
        
        <Text style={text}>
          Come prepared with these thoughts, and we'll turn them into a concrete action plan that gets you results.
        </Text>
        
        <Text style={text}>
          Looking forward to our conversation,<br />
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

export default CalendlyBookedDay2Email;

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

const checklistSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const checklistTitle = {
  color: '#16a34a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const questionsSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const questionsTitle = {
  color: '#0ea5e9',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const bulletPoint = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '8px 0',
  paddingLeft: '8px',
};

const questionItem = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '8px 0',
  paddingLeft: '16px',
};

const preparationTip = {
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