"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AuthLayout from "../App-layout";
import { Eye, EyeOff, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { UserRole } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Roles definition based on requested UI
const ROLES = [
  {
    id: "buyer",
    label: "Buyer / Investor",
    description: "Find quality property opportunities that match your criteria"
  },
  {
    id: "sourcer",
    label: "Property Sourcer",
    description: "Submit and manage property deals for serious buyers"
  },
  {
    id: "vendor", // agent_vendor covers multiple sub-roles, using vendor for registration default mapping
    label: "Agent / Vendor",
    description: "List and manage property inventory"
  },
  {
    id: "service_provider",
    label: "Service Provider",
    description: "Offer legal, survey, finance, inspection, or related services"
  },
  {
    id: "api_partner",
    label: "API Partner",
    description: "Connect your system to Asancha via approved API access"
  }
];

function RegisterForm() {
  const searchParams = useSearchParams();
  const initialRoleParam = searchParams.get("role") as UserRole | null;
  const initialRole = initialRoleParam && ROLES.some(r => r.id === initialRoleParam) ? initialRoleParam : null;

  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole | null>(initialRole);

  // Step 2 state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Step 3 state
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Step 4 state
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptRules, setAcceptRules] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    nextStep();
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleGoogleAuth = () => {
    // Implement actual Google Auth here
    nextStep();
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input logic can be added here
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleAcceptPolicies = (e: React.FormEvent) => {
    e.preventDefault();
    if (acceptTerms && acceptPrivacy && acceptRules) {
      nextStep();
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      {/* Progress Indicator */}
      {step < 5 && (
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center w-full relative">
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium z-10 transition-colors",
                  step === i ? "bg-primary text-primary-foreground" :
                    step > i ? "bg-primary text-primary-foreground" :
                      "bg-muted text-muted-foreground"
                )}
              >
                {step > i ? <Check className="h-4 w-4" /> : i}
              </div>
              {i < 4 && (
                <div
                  className={cn(
                    "absolute top-4 left-[50%] w-full h-[2px] -z-0",
                    step > i ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col space-y-2 text-center">
        {step > 1 && step < 5 && (
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center text-sm text-muted-foreground hover:text-foreground absolute pt-1 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back
          </button>
        )}
        <h1 className="text-2xl font-bold tracking-tight">
          {step === 1 && "Choose your role"}
          {step === 2 && "Create an account"}
          {step === 3 && "Verify your email"}
          {step === 4 && "Accept platform policies"}
          {step === 5 && "Account created"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {step === 1 && "Choose your role and create your account in minutes."}
          {step === 2 && "Enter your email and password below to create your account"}
          {step === 3 && "We've sent a 6-digit code to your email."}
          {step === 4 && "Please review and accept our policies to continue."}
          {step === 5 && "Your registration was successful. You're ready to go!"}
        </p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {ROLES.map((r) => (
                <div
                  key={r.id}
                  onClick={() => handleRoleSelect(r.id as UserRole)}
                  className={cn(
                    "group relative flex cursor-pointer flex-col p-4 rounded-xl border bg-card transition-all hover:border-primary hover:shadow-md",
                    role === r.id ? "border-primary ring-1 ring-primary" : "border-border"
                  )}
                >
                  <div className="font-semibold">{r.label}</div>
                  <div className="text-sm text-muted-foreground mt-1.5">{r.description}</div>
                </div>
              ))}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <button
                type="button"
                onClick={handleGoogleAuth}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Continue with Google
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <form onSubmit={handleCreateAccount} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4 cursor-pointer"
                >
                  Create Account
                </button>
              </form>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-14 text-center text-xl font-medium rounded-md border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  ))}
                </div>

                <div className="text-center text-sm">
                  Didn't receive a code? <button type="button" className="text-primary hover:underline font-medium cursor-pointer">Resend</button>
                </div>

                <button
                  type="submit"
                  disabled={otp.some(d => !d)}
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
                >
                  Verify Email
                </button>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <form onSubmit={handleAcceptPolicies} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I accept the <a href="/terms" className="text-primary hover:underline" target="_blank">Terms of Use</a>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={acceptPrivacy}
                      onChange={(e) => setAcceptPrivacy(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I accept the <a href="/privacy-policy" className="text-primary hover:underline" target="_blank">Privacy Policy</a>
                    </label>
                  </div>

                  {/* <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="rules"
                      checked={acceptRules}
                      onChange={(e) => setAcceptRules(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                    />
                    <label htmlFor="rules" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I agree to abide by the <a href="/platform-rules" className="text-primary hover:underline" target="_blank">Platform Rules</a>
                    </label>
                  </div> */}
                </div>

                <button
                  type="submit"
                  disabled={!acceptTerms && !acceptPrivacy
                    // || !acceptRules
                  }
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
                >
                  Complete Registration
                </button>
              </form>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center space-y-6 py-6"
            >
              <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Check className="h-12 w-12 text-green-600" />
              </div>

              <a
                href="/onboarding"
                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 cursor-pointer"
              >
                Continue to setup <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div className="text-center p-4">Loading form...</div>}>
        <RegisterForm />
      </Suspense>
    </AuthLayout>
  );
}
