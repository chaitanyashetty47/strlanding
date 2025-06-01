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

interface CalendlyAbandonedDay8EmailProps {
  userEmail?: string;
}

export const CalendlyAbandonedDay8Email = ({
  userEmail = 'user@example.com',
}: CalendlyAbandonedDay8EmailProps) => (
  <Html>
    <Head />
    <Preview>Last Chance - Reserve Your Spot</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🚨 Last Chance - Reserve Your Spot</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          This is it. Your final opportunity to claim your free Discovery Call and start the transformation you've been dreaming about.
        </Text>
        
        <Section style={lastChanceSection}>
          <Text style={lastChanceTitle}>⏰ Why This is Your Last Chance</Text>
          <Text style={lastChanceContent}>
            I only have a limited number of spots available each month for these complimentary strategy sessions. Once they're gone, the next opening won't be for several weeks.
          </Text>
          <Text style={lastChanceContent}>
            <strong>Don't let another month pass wondering "what if?"</strong>
          </Text>
        </Section>
        
        <Text style={statsText}>
          📊 <strong>Reality Check:</strong> 94% of people who don't take action within 72 hours never take action at all. Don't become a statistic.
        </Text>
        
        <Section style={benefitsSection}>
          <Text style={benefitsTitle}>💎 What You'll Miss if You Don't Act</Text>
          <Text style={bulletPoint}>🎯 A personalized transformation strategy worth $297</Text>
          <Text style={bulletPoint}>💡 Expert insights that could save you months of trial and error</Text>
          <Text style={bulletPoint}>🚀 Immediate action steps to start seeing results</Text>
          <Text style={bulletPoint}>🔍 Crystal clear direction on your next steps</Text>
          <Text style={bulletPoint}>💪 The confidence that transformation is possible for you</Text>
        </Section>
        
        <Section style={urgentCtaSection}>
          <Text style={urgentCtaTitle}>🔥 URGENT: Limited Spots Remaining</Text>
          <Text style={urgentCtaContent}>
            This is your moment. Stop waiting for permission. Stop waiting for the "perfect" time. Stop letting fear win.
          </Text>
          <Text style={urgentCtaContent}>
            <strong>Click the button below in the next 24 hours or lose this opportunity forever.</strong>
          </Text>
          <Text style={ctaButton}>
            <Link href="https://calendly.com/strentor/strentor-services" style={buttonLink}>
              🚨 RESERVE MY LAST CHANCE SPOT
            </Link>
          </Text>
        </Section>
        
        <Section style={testimonialSection}>
          <Text style={testimonialText}>
            💬 <em>"I almost didn't book my call because I was scared of commitment. Best decision I ever made. The clarity and direction I got was life-changing."</em> - Maria K.
          </Text>
        </Section>
        
        <Text style={text}>
          Your future self is begging you to take this step. Don't let them down.
        </Text>
        
        <Text style={text}>
          This is your moment,<br />
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

export default CalendlyAbandonedDay8Email;

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

const lastChanceSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fff1f2',
  borderRadius: '8px',
  border: '2px solid #dc2626',
  textAlign: 'center' as const,
};

const lastChanceTitle = {
  color: '#dc2626',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const lastChanceContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px 0',
};

const benefitsSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const benefitsTitle = {
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

const statsText = {
  color: '#ea580c',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#fff7ed',
  borderLeft: '4px solid #ea580c',
  borderRadius: '4px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const urgentCtaSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fef2f2',
  borderRadius: '8px',
  border: '3px solid #F31818',
  textAlign: 'center' as const,
};

const urgentCtaTitle = {
  color: '#F31818',
  fontSize: '22px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const urgentCtaContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const ctaButton = {
  margin: '20px 0',
};

const buttonLink = {
  backgroundColor: '#F31818',
  color: '#ffffff',
  padding: '15px 30px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  display: 'inline-block',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const testimonialSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  textAlign: 'center' as const,
};

const testimonialText = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
  fontStyle: 'italic',
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