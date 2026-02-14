import { VerificationStatus } from "./user";

// --- Property Enums ---

export type PropertySource = "property_owner" | "property_sourcer" | "agent" | "asancha";
export type UploadMethod = "api" | "direct_upload";
export type ListingType = "rent" | "sale" | "refurbishment";
export type ListingCategory = "offMarket" | "bmv" | "marketListings" | "manual";
export type StrategyBadge = "HMO" | "BRR" | "BRRR" | "flip" | "buy_to_let" | "other";
export type HouseType =
    | "apartment"
    | "terraced_house"
    | "detached_house"
    | "semi_detached"
    | "bungalow"
    | "land"
    | "commercial"
    | "other";
export type TenureType = "freehold" | "leasehold" | "other";
export type Region =
    | "East Midlands"
    | "London"
    | "North East"
    | "North West"
    | "Scotland"
    | "South East"
    | "South West"
    | "West Midlands";
export type PropertyStatus = "available" | "under_offer" | "reserved" | "inactive";
export type ValuationSource = "zoopla" | "propmarker" | "manual";
export type OccupancyStatus = "vacant" | "tenanted";

// --- Deal Flow Enums ---

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled" | "no_show";
export type PaymentType = "booking_fee" | "reservation_fee" | "investment" | "repayment";
export type PaymentProvider = "stripe" | "bank_transfer";
export type PaymentStatus = "pending" | "succeeded" | "failed" | "refunded";
export type InvestmentType = "direct_buy" | "joint_venture" | "bridge_loan";
export type InvestmentStatus = "proposed" | "committed" | "active" | "exited" | "cancelled";
export type LoanType = "bridge";

// --- Interfaces ---

export interface PropertyListing {
    id: string;
    publicId: string;
    propertyId: string;
    title: string;
    slug: string;
    source: PropertySource;
    sourceName?: string;
    uploadMethod: UploadMethod;
    uploadedByUserId: string;
    listingType: ListingType;
    category: ListingCategory;
    strategyBadge?: StrategyBadge;
    description: string;


    // Single Property Page Data (Asset Shell)
    houseType: HouseType;
    tenureType: TenureType;
    propertySizeSqft: number;
    propertySizeSqm: number;
    functionalSpace: {
        bedrooms: number;
        bathrooms: number;
        receptions: number;
        rooms?: number;
    };

    // Lease & Costs
    leaseLength?: number;
    serviceCharge?: number;
    groundRent?: number;

    // Location
    location: {
        longitude?: number;
        latitude?: number;
        fullAddress?: string;
        postcode: string;
        region: Region;
        town: string;
        countryCode: string;
        ukCountry: string;
        outcode: string;
        incode: string;
        doorNumber?: string;
        houseNumber?: string;
    };

    // Availability
    isListingLive: boolean;
    listedDate: string; // ISO Date
    soldStc: boolean;
    reserved: boolean;
    reservationPrice?: number;
    calculatedStatus: PropertyStatus;

    // Pricing
    price: number;
    currency: string;
    valuationSource?: ValuationSource;
    valuationAmount?: number;

    // Rental Ops
    occupancyStatus: OccupancyStatus;
    currentRent?: number;
    averageRent?: number;
    annualRent?: number;

    // Investment Metrics
    investmentMetrics: Record<string, any>;
    listingCardMetrics: {
        grossYield: number;
        netYield: number;
        bmvDiscountPercent: number;
        netCashflowMonthly: number;
        totalInvestment: number;
        rentalIncomePcm: number;
    };

    // Denormalized Data (for speed)
    locationSummary: {
        town: string;
        region: Region;
        postcode: string;
        outcode: string;
    };
    functionalSpaceSummary: {
        bedrooms: number;
        bathrooms: number;
        receptions: number;
    };

    // Media
    coverImageUrl: string;
    images: string[];

    // Details & Features
    yearBuilt?: number;
    epc?: string;
    floodRisk?: string;
    features: string[];

    // Nearby
    transport?: { name: string; distance: string }[];
    schools?: { name: string; distance: string }[];

    // Agent
    agent: {
        name: string;
        avatar?: string;
        rating: number;
        reviews: number;
        phone?: string;
        email?: string;
    };
}

export interface Wishlist {
    id: string;
    userId: string;
    listingId: string;
    snapshot: {
        title: string;
        slug: string;
        coverImageUrl: string;
        price: number;
        currency: string;
        town: string;
        region: string;
        outcode: string;
        grossYield: number;
        bmvDiscountPercent: number;
    };
}

export interface UserBmvAnalysis {
    id: string;
    userId: string;
    listingId: string;
    inputs: Record<string, any>;
    outputs: Record<string, any>;
    createdAt: string;
}

export interface Booking {
    id: string;
    publicId: string;
    listingId: string;
    requestedByUserId: string;
    assignedToAgentProfileId?: string;
    scheduleAt: string; // ISO Date
    endAt: string; // ISO Date
    status: BookingStatus;
    notesUser: string;
    notesInternal: string;
    createdAt: string;
    updatedAt: string;
}

export interface Payment {
    id: string;
    publicId?: string;
    userId: string;
    type: PaymentType;
    ref: {
        refType: string;
        refId: string;
    };
    amount: number;
    currency: string;
    provider: PaymentProvider;
    providerRef?: string;
    status: PaymentStatus;
}

export interface Investment {
    id: string;
    publicId?: string;
    investorProfileId: string;
    listingId: string;
    type: InvestmentType;
    amount: number;
    currency: string;
    status: InvestmentStatus;
    terms: Record<string, any>;
}

export interface Loan {
    id: string;
    publicId?: string;
    type: LoanType;
    lenderCompanyId?: string;
    lenderUserId?: string;
    investorProfileId: string;
    propertyId: string;
    principal: number;
    rate: number;
    totalRepaymentAmount: number;
    outstandingAmount: number;
    repaymentCount: number;
    paymentMethod: string;
    status: string;
}

export interface LoanRepayment {
    id: string;
    loanId: string;
    dueDate: string;
    amountDue: number;
    amountPaid: number;
    status: string;
    createdAt: string;
}
