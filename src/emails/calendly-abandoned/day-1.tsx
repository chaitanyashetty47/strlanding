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

interface CalendlyAbandonedDay1EmailProps {
  userEmail?: string;
}

export const CalendlyAbandonedDay1Email = ({
  userEmail = 'user@example.com',
}: CalendlyAbandonedDay1EmailProps) => (
  <Html>
    <Head />
    <Preview>Did Something Come Up? Let's Get You Scheduled</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🤔 Did Something Come Up?</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          I noticed you started booking a Discovery Call with our team but didn't finish the process. 
          No worries at all—life happens! I wanted to reach out personally to see if I can help.
        </Text>
        
        <Section style={concernSection}>
          <Text style={concernTitle}>💭 Common Concerns We Address</Text>
          <Text style={bulletPoint}>❓ <strong>"Is this really free?"</strong> Yes, absolutely! No hidden costs or surprise charges.</Text>
          <Text style={bulletPoint}>⏰ <strong>"I don't have time."</strong> Our calls are focused and efficient—usually 30 minutes.</Text>
          <Text style={bulletPoint}>🎯 <strong>"I'm not ready yet."</strong> Perfect! We'll help you prepare and plan when you will be.</Text>
          <Text style={bulletPoint}>💰 <strong>"I can't afford coaching."</strong> We have options for every budget and situation.</Text>
        </Section>
        
        <Text style={valueText}>
          🎁 <strong>What You'll Get (Absolutely Free):</strong> A personalized transformation roadmap worth $297, clear next steps, and immediate actions you can take today.
        </Text>
        
        <Section style={ctaSection}>
          <Text style={ctaTitle}>🚀 Ready to Take the Next Step?</Text>
          <Text style={ctaContent}>
            Don't let this opportunity slip away. Thousands of people want to transform their lives, but only a few actually take action.
          </Text>
          <Text style={ctaButton}>
            <Link href="https://calendly.com/strentor/strentor-services" style={buttonLink}>
              📅 SCHEDULE YOUR FREE CALL NOW
            </Link>
          </Text>
        </Section>
        
        <Text style={testimonialText}>
          💬 <em>"I almost didn't book my call, but it was the best decision I made. The insights I got in 30 minutes changed my entire approach to fitness and mindset."</em> - Sarah M.
        </Text>
        
        <Text style={text}>
          Questions? Simply reply to this email—I read every message personally and I'm here to help.
        </Text>
        
        <Text style={text}>
          Looking forward to connecting with you soon,<br />
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

export default CalendlyAbandonedDay1Email;

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

const concernSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const concernTitle = {
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

const valueText = {
  color: '#059669',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#ecfdf5',
  borderLeft: '4px solid #059669',
  borderRadius: '4px',
  fontWeight: 'bold',
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

const testimonialText = {
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