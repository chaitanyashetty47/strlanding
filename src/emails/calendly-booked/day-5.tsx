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

interface CalendlyBookedDay5EmailProps {
  userEmail?: string;
  userName?: string;
}

export const CalendlyBookedDay5Email = ({
  userEmail = 'user@example.com',
  userName = 'there',
}: CalendlyBookedDay5EmailProps) => (
  <Html>
    <Head />
    <Preview>Maximizing Your Transformation Call</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🚀 Maximizing Your Transformation Call</Heading>
        
        <Text style={text}>Hi {userName}!</Text>
        
        <Text style={text}>
          Your Discovery Call is coming up soon, and I want to ensure you extract maximum value from our time together. Here's how to approach this conversation to get transformational results.
        </Text>
        
        <Section style={mindsetSection}>
          <Text style={mindsetTitle}>🧠 The Right Mindset</Text>
          <Text style={bulletPoint}>🎯 <strong>Come as the CEO of your life:</strong> You're making an investment decision in yourself</Text>
          <Text style={bulletPoint}>📈 <strong>Think long-term:</strong> Where do you want to be 6-12 months from now?</Text>
          <Text style={bulletPoint}>💪 <strong>Be ready to commit:</strong> Transformation requires action, not just conversation</Text>
          <Text style={bulletPoint}>🔍 <strong>Stay curious:</strong> Ask questions and explore possibilities</Text>
        </Section>
        
        <Section style={strategySection}>
          <Text style={strategyTitle}>💡 Call Strategy Framework</Text>
          <Text style={strategyContent}>
            We'll use our proven TRANSFORM methodology:
          </Text>
          <Text style={bulletPoint}><strong>T</strong>arget - Define your specific goals and outcomes</Text>
          <Text style={bulletPoint}><strong>R</strong>eality - Assess your current situation honestly</Text>
          <Text style={bulletPoint}><strong>A</strong>ssess - Identify gaps and obstacles</Text>
          <Text style={bulletPoint}><strong>N</strong>avigate - Create your personalized roadmap</Text>
          <Text style={bulletPoint}><strong>S</strong>upport - Determine what help you need</Text>
          <Text style={bulletPoint}><strong>F</strong>ocus - Prioritize immediate next steps</Text>
          <Text style={bulletPoint}><strong>O</strong>ptimize - Fine-tune your approach</Text>
          <Text style={bulletPoint}><strong>R</strong>esults - Plan for measuring success</Text>
          <Text style={bulletPoint}><strong>M</strong>omentum - Build sustainable habits</Text>
        </Section>
        
        <Text style={resultText}>
          🏆 <strong>Expected Outcome:</strong> By the end of our call, you'll have a clear, actionable 90-day transformation plan tailored specifically to your goals and situation.
        </Text>
        
        <Text style={text}>
          Remember: This isn't just a consultation—it's the first step of your transformation journey. Come ready to take action!
        </Text>
        
        <Text style={text}>
          Excited to transform your vision into reality,<br />
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

export default CalendlyBookedDay5Email;

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

const mindsetSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#faf5ff',
  borderRadius: '8px',
  border: '1px solid #7c3aed',
};

const mindsetTitle = {
  color: '#7c3aed',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const strategySection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const strategyTitle = {
  color: '#0ea5e9',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const strategyContent = {
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

const resultText = {
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