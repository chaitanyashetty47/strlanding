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

interface WaitlistDay5EmailProps {
  userEmail?: string;
}

export const WaitlistDay5Email = ({
  userEmail = 'user@example.com',
}: WaitlistDay5EmailProps) => (
  <Html>
    <Head />
    <Preview>The Psychology of Breakthrough Moments - Day 5</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🧠 The Psychology of Breakthrough Moments</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          Have you ever wondered why some people seem to achieve breakthrough results while others struggle with the same goals for years? Today, we're diving deep into the psychology behind transformational moments.
        </Text>
        
        <Section style={insightSection}>
          <Text style={insightTitle}>🔍 The Breakthrough Formula</Text>
          <Text style={insightContent}>
            Research shows that lasting transformation happens when three elements align:
          </Text>
          
          <Text style={bulletPoint}>⚡ <strong>Discomfort with the Status Quo</strong> - You're genuinely tired of where you are</Text>
          <Text style={bulletPoint}>🎯 <strong>Clear Vision of Your Future Self</strong> - You can vividly see who you're becoming</Text>
          <Text style={bulletPoint}>🛠️ <strong>A Practical First Step</strong> - You have a concrete action to take today</Text>
        </Section>
        
        <Text style={quotaText}>
          💭 <em>"The pain of staying the same must become greater than the pain of change."</em> - Unknown
        </Text>
        
        <Section style={actionSection}>
          <Text style={actionTitle}>Your Reflection Exercise:</Text>
          <Text style={actionContent}>
            Take 5 minutes today to write down:
          </Text>
          <Text style={bulletPoint}>1. What you're genuinely tired of in your current situation</Text>
          <Text style={bulletPoint}>2. How you'll feel when you achieve your transformation</Text>
          <Text style={bulletPoint}>3. One small action you can take today toward that vision</Text>
        </Section>
        
        <Text style={text}>
          Remember: Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown.
        </Text>
        
        <Text style={text}>
          Your breakthrough moment is closer than you think,<br />
          <strong>The Strentor Team</strong>
        </Text>
        
        <Section style={footer}>
          <Text style={footerText}>
            Follow us: 
            <Link href="https://www.instagram.com/strentor/" style={link}> Instagram</Link>
          </Text>
          <Text style={footerText}>
            If you no longer wish to receive these emails, you can{' '}
            <Link href="#" style={link}>unsubscribe here</Link>.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WaitlistDay5Email;

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

const insightSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const insightTitle = {
  color: '#0ea5e9',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const insightContent = {
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

const quotaText = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#f9fafb',
  borderLeft: '4px solid #d1d5db',
  borderRadius: '4px',
  fontStyle: 'italic',
  textAlign: 'center' as const,
};

const actionSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fef2f2',
  borderRadius: '8px',
  border: '1px solid #F31818',
};

const actionTitle = {
  color: '#F31818',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const actionContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px 0',
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