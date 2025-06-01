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

interface CalendlyAbandonedDay2EmailProps {
  userEmail?: string;
}

export const CalendlyAbandonedDay2Email = ({
  userEmail = 'user@example.com',
}: CalendlyAbandonedDay2EmailProps) => (
  <Html>
    <Head />
    <Preview>Your Transformation is Just One Click Away</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>✨ Your Transformation is Just One Click Away</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          I wanted to follow up personally because I believe in your potential for transformation. Sometimes we get busy, sometimes we overthink, sometimes we just need a gentle reminder that our dreams are worth pursuing.
        </Text>
        
        <Section style={realizationSection}>
          <Text style={realizationTitle}>🌟 Here's What I've Realized...</Text>
          <Text style={realizationContent}>
            The people who achieve extraordinary transformations aren't necessarily the most motivated or the most prepared. They're simply the ones who <strong>take action</strong> when the opportunity presents itself.
          </Text>
          <Text style={realizationContent}>
            Right now, that opportunity is in front of you.
          </Text>
        </Section>
        
        <Section style={valueSection}>
          <Text style={valueTitle}>💎 What's Waiting for You</Text>
          <Text style={bulletPoint}>🎯 <strong>Personalized Strategy:</strong> A roadmap designed specifically for your goals and situation</Text>
          <Text style={bulletPoint}>💡 <strong>Expert Insights:</strong> Professional guidance that saves you months of trial and error</Text>
          <Text style={bulletPoint}>🚀 <strong>Immediate Clarity:</strong> Finally understand exactly what steps to take</Text>
          <Text style={bulletPoint}>💪 <strong>Confidence Boost:</strong> Leave the call knowing transformation is possible for you</Text>
        </Section>
        
        <Text style={encouragementText}>
          💭 <strong>Remember:</strong> Every expert was once a beginner. Every success story started with someone taking that first step. Your first step is just one click away.
        </Text>
        
        <Section style={ctaSection}>
          <Text style={ctaTitle}>🚀 Take Your First Step</Text>
          <Text style={ctaContent}>
            Don't wait for the "perfect" time—it doesn't exist. The best time to plant a tree was 20 years ago. The second-best time is now.
          </Text>
          <Text style={ctaButton}>
            <Link href="https://calendly.com/strentor/strentor-services" style={buttonLink}>
              📅 SCHEDULE YOUR FREE CALL
            </Link>
          </Text>
        </Section>
        
        <Text style={text}>
          Your future self is counting on the decision you make today. Make it count.
        </Text>
        
        <Text style={text}>
          Believing in your potential,<br />
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

export default CalendlyAbandonedDay2Email;

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

const realizationSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#faf5ff',
  borderRadius: '8px',
  border: '1px solid #7c3aed',
  textAlign: 'center' as const,
};

const realizationTitle = {
  color: '#7c3aed',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const realizationContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px 0',
};

const valueSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const valueTitle = {
  color: '#16a34a',
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

const encouragementText = {
  color: '#059669',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#ecfdf5',
  borderLeft: '4px solid #059669',
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