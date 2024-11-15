import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client'

import prisma from '@/config/prisma.config';


export async function POST(request: NextRequest) {
  const { name, surname, email, country, dialCode, contactNumber, appointmentDate, appointmentTime, servicesInterested } = await request.json();

  try {
    // Create a new contact record in the database with servicesInterestedd
    const newContact = await prisma.contactSubmission.create({
      data: {
        name,
        surname,
        email,
        country,
        dialCode,
        contactNumber,
        appointmentDate,
        appointmentTime,
        servicesInterested
      }
    });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error: unknown) {
    // Type guard to check if error is an Error object
    if (error instanceof Error) {
      console.error('Detailed error:', {
        message: error.message,
        stack: error.stack,
        code: (error as any).code  // If code is a custom property
      });
  
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to submit form',
          details: error.message,
          code: (error as any).code
        },
        { status: 500 }
      );
    }
  
    // Fall back for non-Error objects
    console.error('Unknown error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit form',
        details: 'An unknown error occurred'
      },
      { status: 500 }
    );
  }finally {
    await prisma.$disconnect();
  }
}
