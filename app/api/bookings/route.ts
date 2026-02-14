import { NextResponse } from 'next/server';
import { MOCK_BOOKINGS } from '@/services/mock-data';

export async function GET() {
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Return all bookings (in real app, filter by user)
    return NextResponse.json(MOCK_BOOKINGS);
}

export async function POST(request: Request) {
    const body = await request.json();

    // Mock creation logic
    const newBooking = {
        id: `booking-${Date.now()}`,
        publicId: `uuid-${Date.now()}`,
        status: 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...body
    };

    // In a real mock, we'd push to MOCK_BOOKINGS, but it's read-only imports usually.
    // We'll just return the success response.

    return NextResponse.json(newBooking, { status: 201 });
}
