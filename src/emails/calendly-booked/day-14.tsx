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

interface CalendlyBookedDay14EmailProps {
  userEmail?: string;
  userName?: string;
}

export const CalendlyBookedDay14Email = ({
  userEmail = 'user@example.com',
  userName = 'there',
}: CalendlyBookedDay14EmailProps) => (
  <Html>
    <Head />
    <Preview>Ready to Begin Your Transformation Journey!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🚀 Ready to Begin Your Transformation Journey!</Heading>
        
        <Text style={text}>Hi {userName}!</Text>
        
        <Text style={text}>
          Today's the day! Your Discovery Call is finally here, and this marks the beginning of something extraordinary. You've been preparing for two weeks—now it's time to turn that preparation into transformation.
        </Text>
        
        <Section style={readinessSection}>
          <Text style={readinessTitle}>✅ You're Ready Because...</Text>
          <Text style={bulletPoint}>🎯 You've clarified your goals and vision</Text>
          <Text style={bulletPoint}>🔍 You've identified what's been holding you back</Text>
          <Text style={bulletPoint}>💭 You've prepared thoughtful questions</Text>
          <Text style={bulletPoint}>💪 You've committed to taking action</Text>
          <Text style={bulletPoint}>🧠 You have the right mindset for transformation</Text>
        </Section>
        
        <Section style={momentSection}>
          <Text style={momentTitle}>⚡ This is Your Moment</Text>
          <Text style={momentContent}>
            Right now, you're standing at a crossroads. To your left is the familiar path—the same struggles, the same results, the same frustrations. To your right is transformation—the life you've been dreaming of, the person you're meant to become.
          </Text>
          <Text style={momentContent}>
            <strong>Today, you choose transformation.</strong>
          </Text>
        </Section>
        
        <Text style={finalReminder}>
          🎯 <strong>Final Reminder:</strong> Be yourself, be honest, and be ready to invest in your future. The best conversations happen when both sides are authentic and committed to creating something amazing.
        </Text>
        
        <Section style={callToActionSection}>
          <Text style={ctaTitle}>🏆 Your Transformation Starts NOW</Text>
          <Text style={ctaContent}>
            When you hang up from today's call, you'll have:
          </Text>
          <Text style={bulletPoint}>✅ A crystal-clear vision of your transformed life</Text>
          <Text style={bulletPoint}>✅ A personalized roadmap to get there</Text>
          <Text style={bulletPoint}>✅ Immediate action steps to start today</Text>
          <Text style={bulletPoint}>✅ The confidence that transformation is possible</Text>
          <Text style={bulletPoint}>✅ A partner committed to your success</Text>
        </Section>
        
        <Text style={text}>
          Your future self is counting on the decisions you make today. Let's make them count.
        </Text>
        
        <Text style={text}>
          Ready to transform your life,<br />
          <strong>The Strentor Team</strong>
        </Text>
        
        <Section style={footer}>
          <Text style={footerText}>
            Follow us: 
            <Link href="https://www.instagram.com/strentor/" style={link}> Instagram</Link>
          </Text>
          <Text style={footerText}>
            This is it—your transformation journey begins today!
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CalendlyBookedDay14Email;

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

const readinessSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const readinessTitle = {
  color: '#16a34a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const momentSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#faf5ff',
  borderRadius: '8px',
  border: '2px solid #7c3aed',
  textAlign: 'center' as const,
};

const momentTitle = {
  color: '#7c3aed',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const momentContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const callToActionSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fef2f2',
  borderRadius: '8px',
  border: '2px solid #F31818',
};

const ctaTitle = {
  color: '#F31818',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
  textAlign: 'center' as const,
};

const ctaContent = {
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

const finalReminder = {
  color: '#F31818',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#fef2f2',
  borderLeft: '4px solid #F31818',
  borderRadius: '4px',
  fontWeight: 'bold',
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