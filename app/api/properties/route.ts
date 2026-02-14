import { NextResponse } from 'next/server';
import { getMockProperties } from '@/services/mock-data';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region');

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500));

    let properties = getMockProperties();

    if (region) {
        properties = properties.filter(p => p.location.region === region);
    }

    return NextResponse.json(properties);
}
