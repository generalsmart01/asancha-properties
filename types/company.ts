import { UserRole, VerificationStatus } from "./user";

export type CompanyType =
    | "property-owner"
    | "property-sourcer"
    | "agent"
    | "investor"
    | "solicitor"
    | "lender";

export interface Company {
    id: string;
    publicId: string;
    ownerUserId: string;
    name: string;
    type: CompanyType;
    rcNumber?: string;
    rcLocation?: string;
    email: string;
    phoneNumber?: string;
    address?: string;
    contactPerson: {
        name: string;
        email: string;
        phoneNumber?: string;
    };
    brandImageUrl?: string;
    verificationStatus: VerificationStatus;
    isVerified: boolean;
    isActive: boolean;
}

export type CompanyMemberRole = "owner" | "admin" | "agent" | "staff";

export interface CompanyMember {
    id: string;
    companyId: string;
    userId: string;
    memberRole: CompanyMemberRole;
    isActive: boolean;
    createdAt: string;
}
