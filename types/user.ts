export type UserRole =
    | "guest"
    | "buyer"
    | "sourcer"
    | "agent"
    | "vendor"
    | "landlord"
    | "developer"
    | "investor"
    | "service_provider"
    | "api_partner";

export type AuthProvider = "local" | "google";

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    phone?: string;
    role: UserRole;
    provider: AuthProvider;
    isActive: boolean;
    avatar?: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserIpAddress {
    id: string;
    userId?: string;
    guestUuid?: string;
    ipAddress: string;
    userAgent?: string;
    location?: string;
    createdAt: string;
}

export interface GuestProfile {
    id: string;
    guestUuid: string;
    userIpAddressId: string;
    lastKnownConnectionLocation?: string;
    lastKnownConnectionUserAgent?: string;
}

export type AgentCategory = "sourcer" | "vendor" | "agent" | "developer";
export type AgentType = "individual" | "company";
export type VerificationStatus = "approved" | "on_hold" | "rejected" | "pending";

export interface AgentProfile {
    id: string;
    userId: string;
    companyId?: string;
    category: AgentCategory;
    type: AgentType;
    publicName: string;
    verificationStatus: VerificationStatus;
    isVerified: boolean;
    isActive: boolean;
}

export type InvestorType = "individual" | "company";
export type InvestorCategory = "buyer" | "joint-venture";
export type FundingMethod = "cash-buyer" | "mortgage" | "bridge-loan" | "joint-venture";
export type DesiredBmvDiscount = "15" | "20" | "25" | "30_plus";
export type Strategy = "buy_to_let" | "flips" | "BRR" | "BRRR" | "HMO" | "housing_association";

export interface InvestorProfile {
    id: string;
    userId: string;
    companyId?: string;
    type: InvestorType;
    category: InvestorCategory;
    fundingMethod: FundingMethod;
    budgetRange: {
        min: number;
        max: number;
        currency: string;
    };
    dealPeriod: string;
    desiredBmvDiscount: DesiredBmvDiscount;
    strategy: Strategy;
    verificationStatus: VerificationStatus;
    isTAndC: boolean;
    isVerified: boolean;
    isActive: boolean;
}
