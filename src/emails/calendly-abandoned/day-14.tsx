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

interface CalendlyAbandonedDay14EmailProps {
  userEmail?: string;
}

export const CalendlyAbandonedDay14Email = ({
  userEmail = 'user@example.com',
}: CalendlyAbandonedDay14EmailProps) => (
  <Html>
    <Head />
    <Preview>Final Reminder - Your Transformation Awaits</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🌟 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>Your Transformation Awaits - Final Reminder</Heading>
        
        <Text style={text}>Dear Friend,</Text>
        
        <Text style={text}>
          Over the past two weeks, I've shared my heart with you about the power of transformation and the incredible journey that awaits when you take that first brave step.
        </Text>
        
        <Section style={reflectionSection}>
          <Text style={reflectionTitle}>🎭 A Moment of Truth</Text>
          <Text style={reflectionContent}>
            Two weeks ago, something inside you sparked with possibility. You took the time to start scheduling a call with us - that wasn't an accident. That was your intuition guiding you toward something greater.
          </Text>
          <Text style={reflectionContent}>
            <strong>That spark is still there. I can feel it.</strong>
          </Text>
        </Section>
        
        <Text style={text}>
          Today marks my final message in this series. While I'd love to continue sharing insights and encouragement, I also deeply respect your space and your journey.
        </Text>
        
        <Section style={choicesSection}>
          <Text style={choicesTitle}>🛤️ Three Paths Forward</Text>
          <Text style={choiceItem}><strong>Path 1:</strong> You schedule that call and discover what's possible when you have the right support and strategy</Text>
          <Text style={choiceItem}><strong>Path 2:</strong> You bookmark this email and return when the timing feels right (we'll be here)</Text>
          <Text style={choiceItem}><strong>Path 3:</strong> You choose a different journey, and we part as friends who crossed paths at just the right moment</Text>
        </Section>
        
        <Text style={wisdomText}>
          💎 <strong>Here's what I've learned:</strong> The people who transform their lives aren't the ones without fear - they're the ones who act despite the fear.
        </Text>
        
        <Section style={finalCtaSection}>
          <Text style={finalCtaTitle}>✨ If Today is Your Day...</Text>
          <Text style={finalCtaContent}>
            If something in your heart is saying "yes," if you're tired of wondering "what if," if you're ready to honor that spark of possibility that brought you here...
          </Text>
          <Text style={finalCtaContent}>
            <strong>Then let's have that conversation.</strong>
          </Text>
          <Text style={ctaButton}>
            <Link href="https://calendly.com/strentor/strentor-services" style={buttonLink}>
              🚀 YES, I'M READY FOR TRANSFORMATION
            </Link>
          </Text>
        </Section>
        
        <Section style={testimonialSection}>
          <Text style={testimonialText}>
            💬 <em>"That email series was exactly what I needed to hear. When I finally booked my call, it felt like coming home to myself. Two months later, I'm living a completely different life."</em> - Sarah M.
          </Text>
        </Section>
        
        <Section style={gratitudeSection}>
          <Text style={gratitudeTitle}>🙏 A Heartfelt Thank You</Text>
          <Text style={gratitudeContent}>
            Thank you for allowing me into your inbox these past two weeks. Thank you for considering us as partners in your journey. Thank you for the privilege of sharing this time together.
          </Text>
          <Text style={gratitudeContent}>
            Whatever path you choose, I'm rooting for you. Your transformation - in whatever form it takes - matters.
          </Text>
        </Section>
        
        <Text style={text}>
          The door remains open. The possibility remains real. The transformation remains yours for the taking.
        </Text>
        
        <Text style={text}>
          With deep respect and excitement for your journey,<br />
          <strong>The Strentor Team</strong>
        </Text>
        
        <Text style={psText}>
          P.S. If you ever want to restart this conversation, just reply to this email with "I'm ready to talk." Sometimes the best time is simply when you decide it's time.
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

export default CalendlyAbandonedDay14Email;

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

const reflectionSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fefce8',
  borderRadius: '8px',
  border: '2px solid #eab308',
  textAlign: 'center' as const,
};

const reflectionTitle = {
  color: '#eab308',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const reflectionContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px 0',
};

const choicesSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const choicesTitle = {
  color: '#0ea5e9',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const choiceItem = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '12px 0',
  paddingLeft: '8px',
};

const wisdomText = {
  color: '#7c3aed',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#faf5ff',
  borderLeft: '4px solid #7c3aed',
  borderRadius: '4px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const finalCtaSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '3px solid #22c55e',
  textAlign: 'center' as const,
};

const finalCtaTitle = {
  color: '#22c55e',
  fontSize: '22px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const finalCtaContent = {
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

const gratitudeSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fdf2f8',
  borderRadius: '8px',
  border: '1px solid #ec4899',
  textAlign: 'center' as const,
};

const gratitudeTitle = {
  color: '#ec4899',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const gratitudeContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px 0',
};

const psText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '12px',
  backgroundColor: '#f9fafb',
  borderRadius: '4px',
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
