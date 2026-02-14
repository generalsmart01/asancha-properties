export type PaymentType = "booking_fee" | "reservation_fee" | "investment" | "repayment";
export type PaymentProvider = "stripe" | "bank_transfer";
export type PaymentStatus = "pending" | "succeeded" | "failed" | "refunded";

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
