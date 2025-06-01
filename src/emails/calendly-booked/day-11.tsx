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

interface CalendlyBookedDay11EmailProps {
  userEmail?: string;
  userName?: string;
}

export const CalendlyBookedDay11Email = ({
  userEmail = 'user@example.com',
  userName = 'there',
}: CalendlyBookedDay11EmailProps) => (
  <Html>
    <Head />
    <Preview>Making the Most of Your Investment</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>💎 Making the Most of Your Investment</Heading>
        
        <Text style={text}>Hi {userName}!</Text>
        
        <Text style={text}>
          Your Discovery Call is just around the corner! Let's talk about maximizing the ROI from your time investment and creating the foundation for extraordinary results.
        </Text>
        
        <Section style={valueSection}>
          <Text style={valueTitle}>💰 The True Value of Your Call</Text>
          <Text style={valueContent}>
            This isn't just a 30-minute conversation—it's potentially the most valuable half-hour you'll invest in yourself this year:
          </Text>
          <Text style={bulletPoint}>📈 <strong>Clarity Worth $1,000:</strong> Clear direction eliminates months of trial and error</Text>
          <Text style={bulletPoint}>🎯 <strong>Strategy Worth $2,500:</strong> A personalized roadmap tailored to your unique situation</Text>
          <Text style={bulletPoint">💡 <strong>Insights Worth $5,000:</strong> Expert knowledge that would take years to learn yourself</Text>
          <Text style={bulletPoint}>🚀 <strong>Acceleration Worth $10,000:</strong> Fast-track your progress by avoiding common pitfalls</Text>
        </Section>
        
        <Section style={maximizeSection}>
          <Text style={maximizeTitle}>🚀 How to Maximize Your ROI</Text>
          <Text style={bulletPoint}>📝 <strong>Come Prepared:</strong> Have your goals written down and challenges identified</Text>
          <Text style={bulletPoint}>🔍 <strong>Be Specific:</strong> The more detail you provide, the more customized our advice</Text>
          <Text style={bulletPoint}>💭 <strong>Think Long-term:</strong> Consider where you want to be in 6-12 months</Text>
          <Text style={bulletPoint">🎯 <strong>Stay Open:</strong> Be ready to challenge your current approach</Text>
          <Text style={bulletPoint">⚡ <strong>Take Action:</strong> Commit to implementing what you learn</Text>
        </Section>
        
        <Text style={investmentMindset}>
          🧠 <strong>Investment Mindset:</strong> You're not spending time—you're investing in your future self. The person you become through transformation is your greatest asset.
        </Text>
        
        <Section style={outcomeSection}>
          <Text style={outcomeTitle}>🏆 Expected Outcomes</Text>
          <Text style={bulletPoint">✅ Crystal clear vision of your transformation goals</Text>
          <Text style={bulletPoint">✅ Personalized strategy roadmap with specific milestones</Text>
          <Text style={bulletPoint">✅ Immediate action steps you can implement today</Text>
          <Text style={bulletPoint">✅ Understanding of what support you need to succeed</Text>
          <Text style={bulletPoint">✅ Confidence in your path forward</Text>
        </Section>
        
        <Text style={text}>
          Remember: The best investment you can make is in yourself. Your future self will thank you for taking this step.
        </Text>
        
        <Text style={text}>
          Excited to help you unlock your potential,<br />
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

export default CalendlyBookedDay11Email;

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

const valueSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#fff7ed',
  borderRadius: '8px',
  border: '1px solid #ea580c',
};

const valueTitle = {
  color: '#ea580c',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const valueContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
};

const maximizeSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const maximizeTitle = {
  color: '#16a34a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const outcomeSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const outcomeTitle = {
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

const investmentMindset = {
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