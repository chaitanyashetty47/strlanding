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

interface CalendlyBookedDay8EmailProps {
  userEmail?: string;
  userName?: string;
}

export const CalendlyBookedDay8Email = ({
  userEmail = 'user@example.com',
  userName = 'there',
}: CalendlyBookedDay8EmailProps) => (
  <Html>
    <Head />
    <Preview>Advanced Questions to Ask During Your Call</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🎙️ Advanced Questions to Ask</Heading>
        
        <Text style={text}>Hi {userName}!</Text>
        
        <Text style={text}>
          Your Discovery Call is approaching, and smart questions will help you get maximum value from our conversation. Here are the advanced questions that will unlock deeper insights and better outcomes.
        </Text>
        
        <Section style={questionsSection}>
          <Text style={questionsTitle}>🔍 Questions About Our Approach</Text>
          <Text style={bulletPoint}>• "What makes your transformation method different from other programs?"</Text>
          <Text style={bulletPoint}>• "How do you customize your approach for someone in my specific situation?"</Text>
          <Text style={bulletPoint}>• "What's the biggest transformation challenge you've helped someone overcome?"</Text>
          <Text style={bulletPoint}>• "How do you ensure long-term results, not just quick fixes?"</Text>
        </Section>
        
        <Section style={strategySection}>
          <Text style={strategyTitle}>🎯 Questions About Your Success</Text>
          <Text style={bulletPoint}>• "Based on my goals, what would be realistic milestones for 30, 60, and 90 days?"</Text>
          <Text style={bulletPoint}>• "What would be early warning signs that I'm going off track?"</Text>
          <Text style={bulletPoint}>• "How will we measure success beyond just the obvious metrics?"</Text>
          <Text style={bulletPoint}>• "What support system should I build around myself for maximum success?"</Text>
        </Section>
        
        <Section style={investmentSection}>
          <Text style={investmentTitle}>💰 Questions About Investment & Value</Text>
          <Text style={bulletPoint}>• "What's the typical ROI your clients see from this transformation?"</Text>
          <Text style={bulletPoint}>• "How do you justify the investment in terms of life-changing value?"</Text>
          <Text style={bulletPoint}>• "What happens if I need additional support beyond the program?"</Text>
          <Text style={bulletPoint}>• "Do you offer any guarantees or success assurances?"</Text>
        </Section>
        
        <Text style={proTip}>
          💡 <strong>Pro Tip:</strong> The quality of your questions reveals your seriousness about transformation. Great questions lead to great answers and better results.
        </Text>
        
        <Text style={text}>
          Come prepared with these questions, and you'll walk away with clarity, confidence, and a concrete path to your goals.
        </Text>
        
        <Text style={text}>
          Ready to dive deep,<br />
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

export default CalendlyBookedDay8Email;

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

const questionsSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  border: '1px solid #0ea5e9',
};

const questionsTitle = {
  color: '#0ea5e9',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const strategySection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const strategyTitle = {
  color: '#16a34a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px 0',
};

const investmentSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#faf5ff',
  borderRadius: '8px',
  border: '1px solid #7c3aed',
};

const investmentTitle = {
  color: '#7c3aed',
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

const proTip = {
  color: '#F31818',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#fef2f2',
  borderLeft: '4px solid #F31818',
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