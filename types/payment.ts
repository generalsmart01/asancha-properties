export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  clientSecret: string;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: "pending" | "success" | "failed";
  productId?: string;
  createdAt: string;
}

export interface PaymentRefund {
  id: string;
  paymentId: string;
  amount: number;
  reason: string;
  status: string;
  createdAt: string;
}

export interface PaymentsResponse {
  payments: Payment[];
  total: number;
}

export interface PaymentFilters {
  status?: string;
  startDate?: string;
  endDate?: string;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  clientSecret?: string;
}

export interface UpdatePaymentRequest {
  status: string;
}

export interface CreatePaymentIntentRequest {
  amount: number;
  currency: string;
  productId?: string;
}

export interface SimplePaymentIntentRequest {
  productId?: string;
  isTeam?: boolean;
  participantType?: string;
  numberOfExpectedParticipants?: number;
}

export interface PricePreviewResponse {
  totalPrice: number;
  currency: string;
}

export interface InstallmentsPreviewResponse {
  installments: Array<{
    amount: number;
    dueDate: string;
  }>;
}

export interface InstallmentsStartRequest {
  productId: string;
  planId: string;
}

export interface InstallmentsStartResponse {
  setupIntentSecret: string;
}

export interface InstallmentsConfirmRequest {
  setupIntentId: string;
}

export interface InstallmentsConfirmResponse {
  success: boolean;
}

export interface SubscriptionConfirmRequest {
  setupIntentId: string;
}

export interface SubscriptionConfirmResponse {
  success: boolean;
}

export interface EarlyPayoffRequest {
  paymentId: string;
}

export interface EarlyPayoffResponse {
  success: boolean;
}

export interface SavedPaymentMethod {
  id: string;
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
}
