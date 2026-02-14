export type InvestmentType = "direct_buy" | "joint_venture" | "bridge_loan";
export type InvestmentStatus = "proposed" | "committed" | "active" | "exited" | "cancelled";

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
