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

interface CalendlyAbandonedDay11EmailProps {
  userEmail?: string;
}

export const CalendlyAbandonedDay11Email = ({
  userEmail = 'user@example.com',
}: CalendlyAbandonedDay11EmailProps) => (
  <Html>
    <Head />
    <Preview>We're Here to Help - Schedule Your Call</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🤝 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>We're Here to Help - Schedule Your Call</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          I wanted to reach out personally because I understand that taking the first step can feel overwhelming. You're not alone in this feeling.
        </Text>
        
        <Section style={supportSection}>
          <Text style={supportTitle}>💝 Here's What I Want You to Know</Text>
          <Text style={supportContent}>
            Every single person who's achieved incredible transformation with our help started exactly where you are right now - uncertain, maybe a little scared, but ready for change.
          </Text>
          <Text style={supportContent}>
            <strong>That uncertainty you're feeling? It's actually a good sign. It means you care about making the right choice.</strong>
          </Text>
        </Section>
        
        <Section style={faqSection}>
          <Text style={faqTitle}>❓ Common Questions We Get</Text>
          <Text style={faqItem}><strong>Q: "What if I'm not ready?"</strong><br />A: The call helps you determine exactly that. No pressure, just clarity.</Text>
          <Text style={faqItem}><strong>Q: "Will you try to sell me something?"</strong><br />A: Only if it's genuinely the right fit. We believe in ethical, pressure-free consultations.</Text>
          <Text style={faqItem}><strong>Q: "What if I can't afford it?"</strong><br />A: We have options for different budgets and situations. Let's explore what works for you.</Text>
          <Text style={faqItem}><strong>Q: "What if I've tried other programs before?"</strong><br />A: Perfect! Your past experiences help us create a better strategy for you.</Text>
        </Section>
        
        <Text style={reminderText}>
          🎯 <strong>Remember:</strong> This consultation is completely free and comes with zero obligation. You'll walk away with valuable insights regardless of what you decide.
        </Text>
        
        <Section style={gentleCtaSection}>
          <Text style={gentleCtaTitle}>✨ Ready to Take the Next Step?</Text>
          <Text style={gentleCtaContent}>
            I'm here to support you, answer your questions, and help you see what's possible. This conversation could be the turning point you've been looking for.
          </Text>
          <Text style={ctaButton}>
            <Link href="https://calendly.com/strentor/strentor-services" style={buttonLink}>
              💬 SCHEDULE MY SUPPORT CALL
            </Link>
          </Text>
        </Section>
        
        <Section style={testimonialSection}>
          <Text style={testimonialText}>
            💬 <em>"I was so nervous about my first call, but the team made me feel completely comfortable. They really listened and gave me hope that change was possible."</em> - David R.
          </Text>
        </Section>
        
        <Text style={text}>
          Whatever you're going through, whatever challenges you're facing - you don't have to figure it out alone.
        </Text>
        
        <Text style={text}>
          I'm here whenever you're ready,<br />
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

export default CalendlyAbandonedDay11Email;

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

const supportSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #22c55e',
  textAlign: 'center' as const,
};

const supportTitle = {
  color: '#22c55e',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const supportContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px 0',
};

const faqSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fefce8',
  borderRadius: '8px',
  border: '1px solid #eab308',
};

const faqTitle = {
  color: '#eab308',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const faqItem = {
  color: '#333333',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '12px 0',
  paddingLeft: '8px',
};

const reminderText = {
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

const gentleCtaSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '2px solid #0ea5e9',
  textAlign: 'center' as const,
};

const gentleCtaTitle = {
  color: '#0ea5e9',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const gentleCtaContent = {
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
