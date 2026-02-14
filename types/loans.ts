export type LoanType = "bridge";

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
