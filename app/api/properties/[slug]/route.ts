import { NextResponse } from 'next/server';
import { getMockProperty } from '@/services/mock-data';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function GET(
    request: Request,
    { params }: Props
) {
    const { slug } = await params;

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const property = getMockProperty(slug);

    if (!property) {
        return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    return NextResponse.json(property);
}
