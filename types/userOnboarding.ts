import { UserRole } from "@/types";

export interface SellerData {
  accountType: string;
  companyName: string;
  fullName: string;
  phone: string;
  transactionRole: string;
  website: string;
  numberOfProperties: string;
  mainLocations: string;
  propertyTypes: string;
  salesIntent: string;
  documentAck: boolean;
  accuracyAck: boolean;
}

export interface BuyerData {
  investorType: string;
  investmentGoal: string;
  experienceLevel: string;
  targetLocations: string;
  budgetMin: string;
  budgetMax: string;
  propertyTypes: string[];
  desiredBmv: string;
  tenantedAcceptable: string;
  refurbLevel: string;
  targetYield: string;
  fundingMethod: string;
  proofOfFunds: string;
  dealPeriod: string;
}

export interface SourcerData {
  accountType: "individual" | "company";
  tradingName: string;
  yearsExperience: string;
  bio: string;
  areasCovered: string;
  propertyCategories: string[];
  dealTypes: string[];
  idUploaded: boolean;
  companyDocUploaded: boolean;
  infoAccuracyAck: boolean;
  feeModel: "fixed" | "percentage";
  feeRange: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  ruleAck1: boolean;
  ruleAck2: boolean;
  ruleAck3: boolean;
}

export interface ServiceProviderData {
  serviceCategory: string;
  businessName: string;
  yearsExperience: string;
  description: string;
  areasCovered: string;
  serviceMode: "onsite" | "remote" | "both";
  idUploaded: boolean;
  licenseUploaded: boolean;
  companyDocUploaded: boolean;
}

export interface ApiPartnerData {
  companyName: string;
  website: string;
  country: string;
  useCase: string;
  businessContactName: string;
  businessContactEmail: string;
  technicalContactName: string;
  technicalContactEmail: string;
  companyDocUploaded: boolean;
  intendedUsage: string;
  complianceAck: boolean;
  estimatedMonthlyCalls: string;
  pricingPlan: string;
  billingEmail: string;
  scopeRetrieve: boolean;
  scopeCreate: boolean;
  scopeUpdate: boolean;
  scopeRemove: boolean;
}

export interface FlowProps<T> {
  currentStep: number;
  data: T;
  onChange: (field: string, value: any) => void;
  onMultiToggle?: (field: any, value: string) => void;
}
