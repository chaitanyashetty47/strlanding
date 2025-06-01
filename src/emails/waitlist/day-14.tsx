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

interface WaitlistDay14EmailProps {
  userEmail?: string;
}

export const WaitlistDay14Email = ({
  userEmail = 'user@example.com',
}: WaitlistDay14EmailProps) => (
  <Html>
    <Head />
    <Preview>Ready to Take Your Transformation to the Next Level? - Day 14</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Heading style={h1}>🎯 STRENTOR</Heading>
        </Section>
        
        <Heading style={h2}>🚀 Ready to Take Your Transformation to the Next Level?</Heading>
        
        <Text style={text}>Hi there!</Text>
        
        <Text style={text}>
          Wow! It's been 14 days since you joined our community. That's two weeks of transformation insights, strategies, and momentum-building. You've come so far!
        </Text>
        
        <Section style={journeySection}>
          <Text style={journeyTitle}>🌟 Your Transformation Journey So Far</Text>
          <Text style={bulletPoint}>✅ You discovered the 3 core transformation accelerators</Text>
          <Text style={bulletPoint}>✅ You learned the psychology behind breakthrough moments</Text>
          <Text style={bulletPoint}>✅ You completed a weekly progress check-in</Text>
          <Text style={bulletPoint}>✅ You mastered advanced strategies for lasting change</Text>
          <Text style={bulletPoint}>✅ You've built momentum that most people never achieve</Text>
        </Section>
        
        <Text style={readyText}>
          🎯 <strong>The question is:</strong> Are you ready to accelerate your transformation with personalized guidance from our expert team?
        </Text>
        
        <Section style={offerSection}>
          <Text style={offerTitle}>🔥 Exclusive Opportunity</Text>
          <Text style={offerContent}>
            Our comprehensive transformation programs are designed to take you from where you are now to where you want to be. We combine:
          </Text>
          <Text style={bulletPoint}>🏋️ <strong>Personalized Fitness Training</strong> - Tailored to your goals and lifestyle</Text>
          <Text style={bulletPoint}>✨ <strong>Manifestation Coaching</strong> - Turn your dreams into achievable plans</Text>
          <Text style={bulletPoint}>🧠 <strong>Psychological Support</strong> - Build unshakeable mental resilience</Text>
        </Section>
        
        <Section style={ctaSection}>
          <Text style={ctaTitle}>🎁 Special Early Bird Offer</Text>
          <Text style={ctaContent}>
            As a valued waitlist member, you get first access to our transformation programs when they launch, plus:
          </Text>
          <Text style={bulletPoint}>• 20% early bird discount</Text>
          <Text style={bulletPoint}>• Free strategy session with our team</Text>
          <Text style={bulletPoint}>• Exclusive bonuses worth $500</Text>
          <Text style={ctaButton}>
            <Link href="https://calendly.com/strentor/strentor-services" style={buttonLink}>
              🚀 CLAIM YOUR SPOT NOW
            </Link>
          </Text>
        </Section>
        
        <Text style={urgencyText}>
          ⏰ <strong>Limited Time:</strong> This exclusive offer is only available for the next 48 hours and limited to the first 50 members.
        </Text>
        
        <Text style={text}>
          You've invested 14 days in learning. Now it's time to invest in transforming. Your future self will thank you.
        </Text>
        
        <Text style={text}>
          Ready to unlock your full potential,<br />
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

export default WaitlistDay14Email;

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

const journeySection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f0fdf4',
  borderRadius: '8px',
  border: '1px solid #16a34a',
};

const journeyTitle = {
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

const readyText = {
  color: '#7c3aed',
  fontSize: '18px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#faf5ff',
  borderLeft: '4px solid #7c3aed',
  borderRadius: '4px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const offerSection = {
  margin: '24px 0',
  padding: '20px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #6366f1',
};

const offerTitle = {
  color: '#6366f1',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 12px 0',
};

const offerContent = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
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
  margin: '0 0 16px 0',
  textAlign: 'left' as const,
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

const urgencyText = {
  color: '#dc2626',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '24px 0',
  padding: '16px',
  backgroundColor: '#fef2f2',
  borderLeft: '4px solid #dc2626',
  borderRadius: '4px',
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