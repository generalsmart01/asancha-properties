export type Currency = "GBP" | "USD" | "EUR";

export type PriceModel = "one-time" | "subscription" | "installment";

export interface Pricing {
    amount: number;
    currency: Currency;
    discount?: number;
    model?: PriceModel;
}

export const DEFAULT_CURRENCY: Currency = "GBP";
