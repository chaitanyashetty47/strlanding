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

interface WaitlistDay8EmailProps {
  userEmail?: string;
}

export const WaitlistDay8Email = ({
  userEmail = 'user@example.com',
}: WaitlistDay8EmailProps) => (
  <Html>
    <Head />
    <Preview>Your Weekly Progress Check-In - Day 8</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>📈 Your Weekly Progress Check-In</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          It's been a week since you joined our community! Time for a quick check-in to celebrate your progress and reset your momentum for the week ahead.
        </Text>
        
        <Section style={progressSection}>
          <Text style={progressTitle}>🏆 This Week's Wins</Text>
          <Text style={progressContent}>
            Take a moment to acknowledge what you've accomplished:
          </Text>
          <Text style={bulletPoint}>✅ You took the first step by joining our waitlist</Text>
          <Text style={bulletPoint}>✅ You learned about transformation accelerators</Text>
          <Text style={bulletPoint}>✅ You reflected on your breakthrough psychology</Text>
          <Text style={bulletPoint}>✅ You're building momentum, one day at a time</Text>
        </Section>
        
        <Text style={statsText}>
          📊 <strong>Progress Fact:</strong> People who track their progress are 40% more likely to achieve their goals. You're already ahead of the curve!
        </Text>
        
        <Section style={weeklyFocusSection}>
          <Text style={focusTitle}>🎯 This Week's Focus</Text>
          <Text style={focusContent}>
            Choose ONE area to focus on this week:
          </Text>
          <Text style={bulletPoint}>🏋️ <strong>Physical:</strong> Add 10 minutes of movement to your daily routine</Text>
          <Text style={bulletPoint}>🧠 <strong>Mental:</strong> Practice 5 minutes of daily mindfulness or meditation</Text>
          <Text style={bulletPoint}>✨ <strong>Mindset:</strong> Write down 3 things you're grateful for each day</Text>
        </Section>
        
        <Text style={motivationText}>
          💪 <em>"Success is the sum of small efforts repeated day in and day out."</em> - Robert Collier
        </Text>
        
        <Text style={text}>
          Remember, transformation isn't about perfection—it's about progression. Every small step counts.
        </Text>
        
        <Text style={text}>
          Keep pushing forward,<br />
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

export default WaitlistDay8Email;

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

const progressSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const progressTitle = {
  color: '#16a34a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const progressContent = {
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

const statsText = {
  color: '#7c3aed',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#faf5ff',
  borderLeft: '4px solid #7c3aed',
  borderRadius: '4px',
};

const weeklyFocusSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fff7ed',
  borderRadius: '8px',
  border: '1px solid #ea580c',
};

const focusTitle = {
  color: '#ea580c',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const focusContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const motivationText = {
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