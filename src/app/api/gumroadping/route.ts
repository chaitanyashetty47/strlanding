import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Define interface for the expected webhook body
interface WebhookBody {
  email: string;
  full_name?: string;
  product_name?: string;
  amount?: string;
  [key: string]: string | undefined;
}

// Define interface for the response
interface WebhookResponse {
  message?: string;
  error?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<WebhookResponse>> {
  try {
    // Parse the x-www-form-urlencoded body of the request
    const bodyText: string = await request.text();
    const params: URLSearchParams = new URLSearchParams(bodyText);
    
    // Convert URLSearchParams to a typed object
    const body: WebhookBody = Array.from(params.entries()).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {} as WebhookBody
    );

    // Log the received webhook data
    console.log('Received webhook:', body);
    console.log('Headers:', Object.fromEntries(request.headers));

    // Type check for required fields
    const { email, product_name } = body;
    if (!email || !product_name) {
      return NextResponse.json(
        { error: 'Email and product_name are required' },
        { status: 400 }
      );
    }

    console.log('Processing purchase for email:', email);

    // Save purchase to database
    const purchase = await prisma.gumroadPurchases.create({
      data: {
        email,
        productName: product_name,
        amount: body.amount ? parseFloat(body.amount) : null,
      },
    });

    console.log('Purchase saved:', purchase);

    return NextResponse.json(
      { message: 'Purchase successfully recorded' },
      { status: 200 }
    );

  } catch (error) {
    // Proper error handling with type checking
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error handling request:', errorMessage);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}