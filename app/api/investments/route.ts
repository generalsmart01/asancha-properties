import { NextResponse } from 'next/server';
import { MOCK_INVESTMENTS } from '@/services/mock-data';

export async function GET() {
    await new Promise(resolve => setTimeout(resolve, 300));
    return NextResponse.json(MOCK_INVESTMENTS);
}

export async function POST(request: Request) {
    const body = await request.json();
    const newInvestment = {
        id: `invest-${Date.now()}`,
        status: 'proposed',
        ...body
    };
    return NextResponse.json(newInvestment, { status: 201 });
}
