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

interface WaitlistDay2EmailProps {
  userEmail?: string;
}

export const WaitlistDay2Email = ({
  userEmail = 'user@example.com',
}: WaitlistDay2EmailProps) => (
  <Html>
    <Head />
    <Preview>Top 3 Transformation Accelerators - Day 2</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🚀 Top 3 Transformation Accelerators</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          As promised, here are the <strong>Top 3 Transformation Accelerators</strong> that our community 
          members have used to create breakthrough results. These are simple but powerful!
        </Text>
        
        <Section style={tipSection}>
          <Text style={tipNumber}>1️⃣</Text>
          <Text style={tipTitle}>The 5-Minute Morning Momentum</Text>
          <Text style={tipContent}>
            Start each day with 5 minutes of intentional movement and visualization. This primes your 
            mind and body for success. Studies show morning routines increase productivity by 40%.
          </Text>
        </Section>
        
        <Section style={tipSection}>
          <Text style={tipNumber}>2️⃣</Text>
          <Text style={tipTitle}>The Power of Progressive Overload</Text>
          <Text style={tipContent}>
            Whether it's physical exercise, learning a skill, or mental challenges - always aim to do 
            slightly more than yesterday. Small, consistent improvements compound into massive results.
          </Text>
        </Section>
        
        <Section style={tipSection}>
          <Text style={tipNumber}>3️⃣</Text>
          <Text style={tipTitle}>The Identity Shift Method</Text>
          <Text style={tipContent}>
            Instead of saying "I want to be fit," say "I am someone who prioritizes health." 
            This identity-based approach makes lasting change inevitable.
          </Text>
        </Section>
        
        <Text style={actionText}>
          💡 <strong>Your Action Step:</strong> Pick ONE of these accelerators and implement it today. 
          Small actions lead to big transformations!
        </Text>
        
        <Text style={text}>
          Tomorrow, I'll share something special about the psychology of breakthrough moments...
        </Text>
        
        <Text style={text}>
          Keep building momentum,<br />
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

export default WaitlistDay2Email;

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

const tipSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
};

const tipNumber = {
  fontSize: '24px',
  margin: '0 0 8px 0',
};

const tipTitle = {
  color: '#F31818',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const tipContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
};

const actionText = {
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