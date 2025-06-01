// Waitlist Email Templates
export { default as WaitlistDay1Email } from './waitlist/day-1';
export { default as WaitlistDay2Email } from './waitlist/day-2';
export { default as WaitlistDay5Email } from './waitlist/day-5';
export { default as WaitlistDay8Email } from './waitlist/day-8';
export { default as WaitlistDay11Email } from './waitlist/day-11';
export { default as WaitlistDay14Email } from './waitlist/day-14';

// Calendly Booked Email Templates  
export { default as CalendlyBookedDay1Email } from './calendly-booked/day-1';
// TODO: Add remaining calendly-booked templates (day-2, day-5, day-8, day-11, day-14)

// Calendly Abandoned Email Templates
export { default as CalendlyAbandonedDay1Email } from './calendly-abandoned/day-1';
export { default as CalendlyAbandonedDay2Email } from './calendly-abandoned/day-2';
export { default as CalendlyAbandonedDay5Email } from './calendly-abandoned/day-5';
export { default as CalendlyAbandonedDay8Email } from './calendly-abandoned/day-8';
export { default as CalendlyAbandonedDay11Email } from './calendly-abandoned/day-11';
export { default as CalendlyAbandonedDay14Email } from './calendly-abandoned/day-14';

// Import statements for dynamic loading
import { WaitlistDay1Email, WaitlistDay2Email, WaitlistDay5Email, WaitlistDay8Email, WaitlistDay11Email, WaitlistDay14Email } from './index';
import { CalendlyBookedDay1Email } from './index';
import { CalendlyAbandonedDay1Email, CalendlyAbandonedDay2Email, CalendlyAbandonedDay5Email, CalendlyAbandonedDay8Email, CalendlyAbandonedDay11Email, CalendlyAbandonedDay14Email } from './index';

// Define valid campaign types
export type CampaignType = 'waitlist' | 'calendly_booked' | 'calendly_abandoned';
export type EmailDay = 1 | 2 | 5 | 8 | 11 | 14;

export interface EmailTemplateMap {
  waitlist: {
    1: React.ComponentType<Record<string, unknown>>;
    2: React.ComponentType<Record<string, unknown>>;
    5: React.ComponentType<Record<string, unknown>>;
    8: React.ComponentType<Record<string, unknown>>;
    11: React.ComponentType<Record<string, unknown>>;
    14: React.ComponentType<Record<string, unknown>>;
  };
  calendly_booked: {
    1: React.ComponentType<Record<string, unknown>>;
    2: React.ComponentType<Record<string, unknown>>;
    5: React.ComponentType<Record<string, unknown>>;
    8: React.ComponentType<Record<string, unknown>>;
    11: React.ComponentType<Record<string, unknown>>;
    14: React.ComponentType<Record<string, unknown>>;
  };
  calendly_abandoned: {
    1: React.ComponentType<Record<string, unknown>>;
    2: React.ComponentType<Record<string, unknown>>;
    5: React.ComponentType<Record<string, unknown>>;
    8: React.ComponentType<Record<string, unknown>>;
    11: React.ComponentType<Record<string, unknown>>;
    14: React.ComponentType<Record<string, unknown>>;
  };
}

// Type guard to check if campaign type is valid
function isValidCampaignType(campaignType: string): campaignType is CampaignType {
  return ['waitlist', 'calendly_booked', 'calendly_abandoned'].includes(campaignType);
}

// Type guard to check if day is valid
function isValidEmailDay(day: number): day is EmailDay {
  return [1, 2, 5, 8, 11, 14].includes(day);
}

// Helper function to get the correct email template component
export function getEmailTemplateComponent(campaignType: string, day: number): React.ComponentType<Record<string, unknown>> | null {
  // Type guards to ensure we have valid inputs
  if (!isValidCampaignType(campaignType) || !isValidEmailDay(day)) {
    return null;
  }

  const templates: Record<CampaignType, Record<EmailDay, React.ComponentType<Record<string, unknown>> | null>> = {
    waitlist: {
      1: WaitlistDay1Email,
      2: WaitlistDay2Email,
      5: WaitlistDay5Email,
      8: WaitlistDay8Email,
      11: WaitlistDay11Email,
      14: WaitlistDay14Email,
    },
    calendly_booked: {
      1: CalendlyBookedDay1Email,
      // TODO: Add remaining components when created
      2: null,
      5: null,
      8: null,
      11: null,
      14: null,
    },
    calendly_abandoned: {
      1: CalendlyAbandonedDay1Email,
      2: CalendlyAbandonedDay2Email,
      5: CalendlyAbandonedDay5Email,
      8: CalendlyAbandonedDay8Email,
      11: CalendlyAbandonedDay11Email,
      14: CalendlyAbandonedDay14Email,
    }
  };

  return templates[campaignType][day] || null;
}

// Helper function to check if template exists
export function hasEmailTemplate(campaignType: string, day: number): boolean {
  const component = getEmailTemplateComponent(campaignType, day);
  return component !== null;
} 