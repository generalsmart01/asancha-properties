import { NextResponse } from 'next/server';
import { MOCK_USERS } from '@/services/mock-data';

export async function GET() {
    // Simulate auth check/delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // For now, return the mock agent user
    const currentUser = MOCK_USERS.find(u => u.role === 'agent');

    if (!currentUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(currentUser);
}
