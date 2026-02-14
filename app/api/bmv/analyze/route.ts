import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

const DAILY_LIMIT = 2;

export async function POST(request: Request) {
    const cookieStore = await cookies();

    // 1. Check for existing Guest UUID
    let guestUuid = cookieStore.get('asancha_guest_id')?.value;
    let usageCount = parseInt(cookieStore.get('asancha_bmv_usage')?.value || '0');
    const lastUsageDate = cookieStore.get('asancha_bmv_date')?.value;

    const today = new Date().toISOString().split('T')[0];

    // 2. Reset quota if new day
    if (lastUsageDate !== today) {
        usageCount = 0;
    }

    // 3. User Identification (Mock Logic)
    // If no guest ID, assign one.
    if (!guestUuid) {
        guestUuid = uuidv4();
    }

    // 4. Rate Limit Check
    if (usageCount >= DAILY_LIMIT) {
        return NextResponse.json(
            {
                error: "Daily limit exceeded",
                code: "LIMIT_EXCEEDED",
                message: "You have reached your daily limit of free analyses."
            },
            { status: 402 } // Payment Required (trigger for subscription modal)
        );
    }

    // 5. Increment Usage
    usageCount++;

    // 6. Simulate Analysis Processing
    const body = await request.json();
    // ... (Mock calculation logic would go here)
    const results = {
        grossYield: 5.5,
        netYield: 4.2,
        details: "Mock Analysis Result based on input..."
    };

    // 7. Return Response with Updates Cookies
    const response = NextResponse.json(results);

    // Set cookies
    response.cookies.set('asancha_guest_id', guestUuid, { httpOnly: true, maxAge: 60 * 60 * 24 * 365 });
    response.cookies.set('asancha_bmv_usage', usageCount.toString(), { httpOnly: true, maxAge: 60 * 60 * 24 });
    response.cookies.set('asancha_bmv_date', today, { httpOnly: true, maxAge: 60 * 60 * 24 });

    return response;
}
