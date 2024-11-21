import { NextRequest, NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client'

import prisma from '@/config/prisma.config';


export async function POST(request: NextRequest) {
  const { name, surname, email, country, dialCode, contactNumber, servicesInterested } = await request.json();

  try {
    // Create a new contact record in the database with servicesInterested
    const newContact = await prisma.contactSubmission.create({
      data: {
        name,
        surname,
        email,
        country,
        dialCode,
        contactNumber,
        servicesInterested
      }
    });

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error(error);
     return NextResponse.json({ success: false, error: 'Failed to submit form' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
