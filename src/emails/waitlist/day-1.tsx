import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface WaitlistDay1EmailProps {
  userEmail?: string;
}

export const WaitlistDay1Email = ({
  userEmail = 'user@example.com',
}: WaitlistDay1EmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Strentor - Your Transformation Journey Begins!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>Welcome to Your Transformation Journey! 🚀</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          Thank you for joining the Strentor Waitlist! We're absolutely thrilled to have you on board 
          for what's going to be an incredible transformation journey.
        </Text>
        
        <Section style={benefitsSection}>
          <Text style={text}>
            At Strentor, we believe in empowering your complete transformation through our three core pillars:
          </Text>
          
          <Text style={bulletPoint}>🏋️ <strong>Fitness Training</strong> - Build physical strength and endurance</Text>
          <Text style={bulletPoint}>✨ <strong>Manifestation Guidance</strong> - Transform your mindset and reality</Text>
          <Text style={bulletPoint}>🧠 <strong>Psychological Support</strong> - Develop mental resilience and clarity</Text>
        </Section>
        
        <Text style={text}>
          Over the next few days, we'll be sharing valuable insights, transformation tips, and exclusive resources 
          to help you get started on your journey even before our official launch.
        </Text>
        
        <Text style={highlightText}>
          🎁 <strong>Tomorrow's Preview:</strong> We'll share our "Top 3 Transformation Accelerators" that our 
          community has used to create breakthrough results!
        </Text>
        
        <Text style={text}>
          Stay tuned, stay motivated, and get ready to unlock your true potential.
        </Text>
        
        <Text style={text}>
          Cheers to your transformation,<br />
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

export default WaitlistDay1Email;

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

const highlightText = {
  color: '#F31818',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '20px 0',
  padding: '16px',
  backgroundColor: '#fef2f2',
  borderLeft: '4px solid #F31818',
  borderRadius: '4px',
};

const benefitsSection = {
  margin: '24px 0',
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