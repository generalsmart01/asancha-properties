import { User } from "./user";

// Deprecated / Legacy Types
// These should eventually be migrated to the new schema defined in property.ts and user.ts

export interface LegacyProperty {
    id: string;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    propertyType: LegacyPropertyType;
    status: LegacyPropertyStatus;
    location: LegacyPropertyLocation;
    specifications: LegacyPropertySpecifications;
    images: LegacyPropertyImage[];
    features: string[];
    agent: LegacyPropertyAgent;
    isFeatured: boolean;
    isBmvEligible: boolean;
    bmvScore?: number;
    createdAt: string;
    updatedAt: string;
}

export type LegacyPropertyType =
    | "house"
    | "apartment"
    | "condo"
    | "townhouse"
    | "land"
    | "commercial";

export type LegacyPropertyStatus =
    | "for_sale"
    | "for_rent"
    | "sold"
    | "rented"
    | "off_market";

export interface LegacyPropertyLocation {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    neighborhood?: string;
}

export interface LegacyPropertySpecifications {
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    lotSize?: number;
    yearBuilt?: number;
    parkingSpaces?: number;
    garage?: boolean;
    pool?: boolean;
    garden?: boolean;
    balcony?: boolean;
    furnished?: boolean;
}

export interface LegacyPropertyImage {
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
    order: number;
}

export interface LegacyPropertyAgent {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    company?: string;
}

// Legacy BMV Types

export interface BMVAnalysis {
    id: string;
    propertyId?: string;
    address: string;
    propertyType: LegacyPropertyType;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    yearBuilt?: number;
    marketValue: number;
    estimatedValue: number;
    bmvScore: number;
    confidence: number;
    factors: BMVFactor[];
    report: BMVReport;
    createdAt: string;
    userId?: string;
}

export interface BMVFactor {
    name: string;
    impact: "positive" | "negative" | "neutral";
    score: number;
    description: string;
}

export interface BMVReport {
    summary: string;
    recommendations: string[];
    marketTrends: string;
    investmentPotential: "low" | "medium" | "high";
    riskAssessment: "low" | "medium" | "high";
}

export interface BMVAnalysisRequest {
    address: string;
    propertyType: LegacyPropertyType;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    yearBuilt?: number;
    additionalInfo?: string;
}
