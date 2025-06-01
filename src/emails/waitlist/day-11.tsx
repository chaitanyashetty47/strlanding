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

interface WaitlistDay11EmailProps {
  userEmail?: string;
}

export const WaitlistDay11Email = ({
  userEmail = 'user@example.com',
}: WaitlistDay11EmailProps) => (
  <Html>
    <Head />
    <Preview>Advanced Strategies for Lasting Change - Day 11</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🔬 Advanced Strategies for Lasting Change</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          You've been with us for 11 days now, and you're ready for some advanced strategies. These are the techniques that separate temporary changes from lifelong transformations.
        </Text>
        
        <Section style={strategySection}>
          <Text style={strategyNumber}>🎯</Text>
          <Text style={strategyTitle}>Strategy #1: The Environment Design</Text>
          <Text style={strategyContent}>
            Your environment shapes your behavior more than willpower ever will. Make good choices automatic and bad choices harder. Redesign your space to support your goals.
          </Text>
        </Section>
        
        <Section style={strategySection}>
          <Text style={strategyNumber}>🔄</Text>
          <Text style={strategyTitle}>Strategy #2: The Implementation Intention</Text>
          <Text style={strategyContent}>
            Instead of "I will exercise," use "I will exercise at 7 AM in my living room every weekday." Specific plans dramatically increase follow-through rates.
          </Text>
        </Section>
        
        <Section style={strategySection}>
          <Text style={strategyNumber}>📊</Text>
          <Text style={strategyTitle}>Strategy #3: The Progress Tracking System</Text>
          <Text style={strategyContent}>
            What gets measured gets managed. Track both leading indicators (habits) and lagging indicators (results). Celebrate small wins along the way.
          </Text>
        </Section>
        
        <Text style={expertTip}>
          🧠 <strong>Expert Insight:</strong> Research shows that people who implement all three strategies are 3x more likely to maintain their changes long-term.
        </Text>
        
        <Section style={actionableSection}>
          <Text style={actionTitle}>Your 3-Step Implementation Plan:</Text>
          <Text style={bulletPoint}>1. <strong>Environment:</strong> Identify one change you can make to your physical space today</Text>
          <Text style={bulletPoint}>2. <strong>Plan:</strong> Write out one specific "when-where-how" implementation intention</Text>
          <Text style={bulletPoint}>3. <strong>Track:</strong> Choose one metric to track daily for the next week</Text>
        </Section>
        
        <Text style={text}>
          These aren't just theories—they're battle-tested strategies used by Olympic athletes, CEOs, and transformation experts worldwide.
        </Text>
        
        <Text style={text}>
          Keep implementing and evolving,<br />
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

export default WaitlistDay11Email;

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

const strategySection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  borderLeft: '4px solid #6366f1',
};

const strategyNumber = {
  fontSize: '24px',
  margin: '0 0 8px 0',
};

const strategyTitle = {
  color: '#6366f1',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const strategyContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
};

const expertTip = {
  color: '#059669',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#ecfdf5',
  borderLeft: '4px solid #059669',
  borderRadius: '4px',
};

const actionableSection = {
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
  margin: '0 0 16px 0',
};

const bulletPoint = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '8px 0',
  paddingLeft: '8px',
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