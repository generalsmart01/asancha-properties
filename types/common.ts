import { LegacyPropertyType, LegacyPropertyStatus } from "./legacy";

export interface PropertySearchFilters {
    propertyType?: LegacyPropertyType[];
    status?: LegacyPropertyStatus[];
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    minSquareFeet?: number;
    maxSquareFeet?: number;
    location?: string;
    features?: string[];
    isBmvEligible?: boolean;
    isFeatured?: boolean;
}

export interface SearchParams {
    query?: string;
    page?: number;
    limit?: number;
    sortBy?: "price" | "createdAt" | "squareFeet" | "bmvScore";
    sortOrder?: "asc" | "desc";
    filters?: PropertySearchFilters;
}

export interface ContactForm {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    propertyId?: string;
}

export interface NewsletterForm {
    email: string;
    interests?: string[];
}

export interface ApiError {
    message: string;
    status: number;
    code?: string;
    details?: any;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    errors?: string[];
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
