import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getEmailSubject } from '@/lib/email';
import { getEmailTemplateComponent, hasEmailTemplate } from '@/emails';

export async function POST(request: NextRequest) {
  try {
    const { email, campaignType, day } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!campaignType || !day) {
      return NextResponse.json({ error: 'Campaign type and day are required' }, { status: 400 });
    }

    // Check if template exists
    if (!hasEmailTemplate(campaignType, day)) {
      return NextResponse.json({ 
        error: `Template not found for ${campaignType} day ${day}` 
      }, { status: 404 });
    }

    // Get the template component
    const TemplateComponent = getEmailTemplateComponent(campaignType, day);
    
    if (!TemplateComponent) {
      return NextResponse.json({ error: 'Template component not found' }, { status: 404 });
    }

    // Get subject line
    const subject = getEmailSubject(campaignType, day);

    // Send email
    const result = await sendEmail({
      to: email,
      subject,
      templateComponent: TemplateComponent,
      templateProps: { 
        userEmail: email,
        userName: 'Test User' // You can make this dynamic
      },
    });

    if (result.success) {
      return NextResponse.json({ 
        message: 'Email sent successfully', 
        data: result.data,
        templateUsed: `${campaignType}-day-${day}`,
        subject: subject
      });
    } else {
      return NextResponse.json({ 
        error: 'Failed to send email', 
        details: result.error 
      }, { status: 500 });
    }
  } catch (error: unknown) {
    console.error('Error in test-email route:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 