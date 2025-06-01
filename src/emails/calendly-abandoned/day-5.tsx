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

interface CalendlyAbandonedDay5EmailProps {
  userEmail?: string;
}

export const CalendlyAbandonedDay5Email = ({
  userEmail = 'user@example.com',
}: CalendlyAbandonedDay5EmailProps) => (
  <Html>
    <Head />
    <Preview>Don't Let This Opportunity Slip By</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>⏰ Don't Let This Opportunity Slip By</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          I've been thinking about you since you showed interest in transformation. There's something powerful about someone who seeks change—it shows courage, vision, and a refusal to settle for less than they deserve.
        </Text>
        
        <Section style={opportunitySection}>
          <Text style={opportunityTitle}>🌅 Why This Moment Matters</Text>
          <Text style={opportunityContent}>
            Opportunities like this don't come around often. Think about it:
          </Text>
          <Text style={bulletPoint}>💎 <strong>Free expert consultation</strong> (usually worth $297)</Text>
          <Text style={bulletPoint}>🎯 <strong>Personalized transformation strategy</strong> designed for your unique situation</Text>
          <Text style={bulletPoint}>⚡ <strong>Immediate action steps</strong> you can implement today</Text>
          <Text style={bulletPoint}>🚀 <strong>Access to proven methods</strong> that have transformed thousands of lives</Text>
        </Section>
        
        <Text style={realityCheck}>
          🤔 <strong>Reality Check:</strong> How many opportunities have you let slip by? How many times have you thought "I'll do it later" and later never came?
        </Text>
        
        <Section style={urgencySection}>
          <Text style={urgencyTitle}>⚠️ The Cost of Waiting</Text>
          <Text style={urgencyContent}>
            Every day you wait is another day of:
          </Text>
          <Text style={bulletPoint}>❌ Staying stuck in the same patterns</Text>
          <Text style={bulletPoint}>❌ Missing out on the life you really want</Text>
          <Text style={bulletPoint}>❌ Letting fear and doubt win</Text>
          <Text style={bulletPoint}>❌ Watching others transform while you stay the same</Text>
        </Section>
        
        <Section style={ctaSection}>
          <Text style={ctaTitle}>🔥 Take Action NOW</Text>
          <Text style={ctaContent}>
            Your transformation is waiting. Your future self is counting on you. Don't let another day pass wondering "what if?"
          </Text>
          <Text style={ctaButton}>
            <Link href="https://calendly.com/strentor/strentor-services" style={buttonLink}>
              🚀 CLAIM YOUR FREE STRATEGY SESSION
            </Link>
          </Text>
        </Section>
        
        <Text style={text}>
          Remember: The regret of inaction lasts far longer than the fear of taking action.
        </Text>
        
        <Text style={text}>
          Your transformation partner,<br />
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

export default CalendlyAbandonedDay5Email;

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

const opportunitySection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#ecfdf5',
  borderRadius: '8px',
  border: '1px solid #059669',
};

const opportunityTitle = {
  color: '#059669',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const opportunityContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const urgencySection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fff1f2',
  borderRadius: '8px',
  border: '1px solid #dc2626',
};

const urgencyTitle = {
  color: '#dc2626',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const urgencyContent = {
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

const realityCheck = {
  color: '#ea580c',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#fff7ed',
  borderLeft: '4px solid #ea580c',
  borderRadius: '4px',
  textAlign: 'center' as const,
};

const ctaSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fef2f2',
  borderRadius: '8px',
  border: '2px solid #F31818',
  textAlign: 'center' as const,
};

const ctaTitle = {
  color: '#F31818',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const ctaContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 20px 0',
};

const ctaButton = {
  margin: '20px 0',
};

const buttonLink = {
  backgroundColor: '#F31818',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  display: 'inline-block',
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