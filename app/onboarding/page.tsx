"use client";

import { useState, useEffect } from "react";
import { UserRole } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { postApiRequest } from "@/lib/apiFetch";

// Types
import { SellerData, BuyerData, SourcerData, ServiceProviderData, ApiPartnerData } from "../../types/userOnboarding";

// Flow Components
import { SellerFlow } from "../../components/onboarding/SellerFlow";
import { BuyerFlow } from "../../components/onboarding/BuyerFlow";
import { SourcerFlow } from "../../components/onboarding/SourcerFlow";
import { ServiceProviderFlow } from "../../components/onboarding/ServiceProviderFlow";
import { ApiPartnerFlow } from "../../components/onboarding/ApiPartnerFlow";
import { StepIndicator } from "../../components/onboarding/StepIndicator";
import { StepConfirmationModal } from "../../components/onboarding/StepConfirmationModal";

const ONBOARDING_TRACKS: Record<string, string[]> = {
  buyer: ["Investment Profile", "Search Criteria", "Deal Preferences", "Funding Readiness", "Complete Setup"],
  investor: ["Investment Profile", "Search Criteria", "Deal Preferences", "Funding Readiness", "Complete Setup"],
  sourcer: ["Identity", "Coverage", "Verify", "Fees", "Rules", "Start"],
  agent: ["Account Type", "Business Details", "Portfolio", "Verification", "Start"],
  vendor: ["Account Type", "Business Details", "Portfolio", "Verification", "Start"],
  landlord: ["Account Type", "Business Details", "Portfolio", "Verification", "Start"],
  developer: ["Account Type", "Business Details", "Portfolio", "Verification", "Start"],
  service_provider: ["Service", "Business", "Coverage", "Verify", "Finish"],
  api_partner: ["Company", "Contacts", "Verify", "Billing", "Scope", "Sandbox"],
};

export default function OnboardingPage() {
  const router = useRouter();
  const [role, setRole] = useState<UserRole>("buyer");
  const [currentStep, setCurrentStep] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Flow States
  const [sellerData, setSellerData] = useState<SellerData>({
    accountType: "agent", companyName: "", fullName: "", phone: "", transactionRole: "",
    website: "", numberOfProperties: "", mainLocations: "", propertyTypes: "residential",
    salesIntent: "general", documentAck: false, accuracyAck: false,
  });

  const [buyerData, setBuyerData] = useState<BuyerData>({
    investorType: "individual", investmentGoal: "buy_to_let", experienceLevel: "intermediate",
    targetLocations: "", budgetMin: "", budgetMax: "", propertyTypes: [],
    desiredBmv: "yes", tenantedAcceptable: "yes", refurbLevel: "light_only",
    targetYield: "", fundingMethod: "mortgage", proofOfFunds: "no", dealPeriod: "30_days",
  });

  const [sourcerData, setSourcerData] = useState<SourcerData>({
    accountType: "individual", tradingName: "", yearsExperience: "", bio: "",
    areasCovered: "", propertyCategories: [], dealTypes: [], idUploaded: false,
    companyDocUploaded: false, infoAccuracyAck: false, feeModel: "fixed",
    feeRange: "", bankName: "", accountName: "", accountNumber: "",
    ruleAck1: false, ruleAck2: false, ruleAck3: false,
  });

  const [spData, setSpData] = useState<ServiceProviderData>({
    serviceCategory: "", businessName: "", yearsExperience: "", description: "",
    areasCovered: "", serviceMode: "both", idUploaded: false, licenseUploaded: false,
    companyDocUploaded: false,
  });

  const [apiPartnerData, setApiPartnerData] = useState<ApiPartnerData>({
    companyName: "", website: "", country: "", useCase: "", businessContactName: "",
    businessContactEmail: "", technicalContactName: "", technicalContactEmail: "",
    companyDocUploaded: false, intendedUsage: "", complianceAck: false,
    estimatedMonthlyCalls: "", pricingPlan: "", billingEmail: "",
    scopeRetrieve: false, scopeCreate: false, scopeUpdate: false, scopeRemove: false,
  });

  useEffect(() => {
    setIsMounted(true);
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        if (user.role && ONBOARDING_TRACKS[user.role]) {
          setRole(user.role);
          if (["agent", "vendor", "landlord", "developer"].includes(user.role)) {
            setSellerData(prev => ({ ...prev, accountType: user.role }));
          }
        }
      } catch (e) { }
    }
  }, []);

  if (!isMounted) return null;

  const isSellerFlow = ["agent", "vendor", "landlord", "developer"].includes(role);
  const isBuyerFlow = ["buyer", "investor"].includes(role);
  const isSourcerFlow = role === "sourcer";
  const isServiceProviderFlow = role === "service_provider";
  const isApiPartnerFlow = role === "api_partner";

  const trackLabels = ONBOARDING_TRACKS[role] || ONBOARDING_TRACKS["buyer"];
  const totalSteps = trackLabels.length;

  // Decide what data payload to send based on current role and step
  const getCurrentStepPayload = () => {
    // In a real scenario, you'd filter out only the keys mapped to the specific step.
    // We send the whole object for simplicity unless specified.
    if (isSellerFlow) return sellerData;
    if (isBuyerFlow) return buyerData;
    if (isSourcerFlow) return sourcerData;
    if (isServiceProviderFlow) return spData;
    if (isApiPartnerFlow) return apiPartnerData;
    return {};
  };

  const handleNextClick = () => {
    if (currentStep < totalSteps - 1) {
      // Prompt modal before going to next step
      setIsModalOpen(true);
    } else {
      // Form complete, route away
      if (isSellerFlow || isSourcerFlow) router.push("/dashboard/listings/new");
      else router.push("/dashboard");
    }
  };

  const handleConfirmNext = async () => {
    setIsSubmitting(true);
    // API step is 1-indexed (1 for first step)
    const apiStepIndex = currentStep + 1;
    const payload = getCurrentStepPayload();

    try {
      await postApiRequest(`/profiles/me/onboarding/step/${apiStepIndex}`, payload);
      
      // Success
      setIsSubmitting(false);
      setIsModalOpen(false);
      setCurrentStep(s => s + 1);
      window.scrollTo(0, 0);
    } catch (err: any) {
      console.error("API call failed:", err);
      alert(`Failed to save step: ${err.message || "Please check required fields."}`);
      setIsSubmitting(false);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(s => s - 1);
  };

  // State Builders
  const buildOnChange = (setter: React.Dispatch<React.SetStateAction<any>>) => (field: string, value: any) => {
    setter((prev: any) => ({ ...prev, [field]: value }));
  };
  const buildOnMultiToggle = (setter: React.Dispatch<React.SetStateAction<any>>) => (field: string, value: string) => {
    setter((prev: any) => {
      const current = prev[field] as string[];
      return current.includes(value)
        ? { ...prev, [field]: current.filter(v => v !== value) }
        : { ...prev, [field]: [...current, value] };
    });
  };

  // State Handlers
  const handleSellerChange = (field: string, value: any) => {
    setSellerData(p => ({ ...p, [field]: value }));
    if (field === "accountType") setRole(value as UserRole);
  };

  const stepVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col font-sans">
      <nav className="w-full bg-card border-b border-border/50 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <Link href="/">
          <Image src="/img/logo.png" alt="Asancha" width={120} height={35} className="object-contain" />
        </Link>
        <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
          {isSellerFlow ? "Seller Dashboard Setup" : isBuyerFlow ? "Investor Profile Setup" : isSourcerFlow ? "Sourcer Setup" : "Account Setup"}
        </div>
        <div className="w-[120px]" />
      </nav>

      <div className="flex-1 flex flex-col items-center py-10 px-4 sm:px-6">
        <div className="w-full max-w-2xl flex flex-col items-center">

          <StepIndicator
            trackLabels={trackLabels}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            isLoading={isSubmitting}
          />

          <div className="w-full bg-card rounded-4xl shadow-xl border border-border/50 p-6 sm:p-10 min-h-[500px] flex flex-col relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${role}-${currentStep}`}
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-1 flex flex-col"
              >
                {isSellerFlow && (
                  <SellerFlow currentStep={currentStep} data={sellerData} onChange={handleSellerChange} />
                )}
                {isBuyerFlow && (
                  <BuyerFlow currentStep={currentStep} data={buyerData} onChange={buildOnChange(setBuyerData)} onMultiToggle={buildOnMultiToggle(setBuyerData)} />
                )}
                {isSourcerFlow && (
                  <SourcerFlow currentStep={currentStep} data={sourcerData} onChange={buildOnChange(setSourcerData)} onMultiToggle={buildOnMultiToggle(setSourcerData)} onComplete={handleNextClick} onSkip={() => router.push("/dashboard")} />
                )}
                {isServiceProviderFlow && (
                  <ServiceProviderFlow currentStep={currentStep} data={spData} onChange={buildOnChange(setSpData)} onComplete={handleNextClick} onSkip={() => router.push("/dashboard")} />
                )}
                {isApiPartnerFlow && (
                  <ApiPartnerFlow currentStep={currentStep} data={apiPartnerData} onChange={buildOnChange(setApiPartnerData)} />
                )}

                {!isSellerFlow && !isBuyerFlow && !isSourcerFlow && !isServiceProviderFlow && !isApiPartnerFlow && (
                  <>
                    <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">
                      {trackLabels[currentStep]}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-8 font-medium">
                      Please provide your details to continue setting up your {role.replace("_", " ")} account.
                    </p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={isSubmitting}
                  className="flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-xl hover:bg-muted/50 cursor-pointer disabled:opacity-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNextClick}
                disabled={isSubmitting}
                className="flex items-center text-xs font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 transition-all hover:scale-105 px-8 py-4 rounded-xl shadow-xl shadow-primary/20 cursor-pointer disabled:opacity-50"
              >
                {currentStep === totalSteps - 1 && isSellerFlow ? (
                  <>Add Your First Property <Plus className="w-4 h-4 ml-2" /></>
                ) : currentStep === totalSteps - 1 && isSourcerFlow ? (
                  <>Activate Sourcer Profile <Check className="w-4 h-4 ml-2" /></>
                ) : currentStep === totalSteps - 1 && isBuyerFlow ? (
                  <>View Matched Opportunities <ArrowRight className="w-4 h-4 ml-2" /></>
                ) : currentStep === totalSteps - 1 && isServiceProviderFlow ? (
                  <>Preview My Profile <ArrowUpRight className="w-4 h-4 ml-2" /></>
                ) : currentStep === totalSteps - 1 && isApiPartnerFlow ? (
                  <>Generate Sandbox Key <Check className="w-4 h-4 ml-2" /></>
                ) : currentStep === totalSteps - 1 ? (
                  <>Complete Setup <Check className="w-4 h-4 ml-2" /></>
                ) : (
                  <>Continue <ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <StepConfirmationModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        onConfirm={handleConfirmNext}
        isLoading={isSubmitting}
        stepName={trackLabels[currentStep]}
      />
    </div>
  );
}
