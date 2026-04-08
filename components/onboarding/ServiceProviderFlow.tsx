import { Check, ShieldCheck, ClipboardCheck, Building, ArrowUpRight, MapPin } from "lucide-react";
import { FlowProps, ServiceProviderData } from "../../types/userOnboarding";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface ServiceProviderFlowProps extends FlowProps<ServiceProviderData> {
  onComplete: () => void;
  onSkip: () => void;
}

export function ServiceProviderFlow({ currentStep, data, onChange, onComplete, onSkip }: ServiceProviderFlowProps) {
  return (
    <div className="space-y-6">

      {/* Step 1: Service Category */}
      {currentStep === 0 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">What service do you provide?</h2>
            <p className="text-muted-foreground italic font-medium">Select the category that best describes your offering.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { id: "solicitor", label: "Solicitor / Conveyancing" },
              { id: "mortgage_broker", label: "Mortgage Broker" },
              { id: "surveyor", label: "Surveyor" },
              { id: "inspector", label: "Property Inspector" },
              { id: "photographer", label: "Photographer / Media" },
              { id: "contractor", label: "Contractor / Refurb" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange("serviceCategory", opt.id)}
                className={cn(
                  "p-5 rounded-2xl border-2 font-bold text-sm transition-all text-left",
                  data.serviceCategory === opt.id
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border/50 bg-muted/30 text-muted-foreground hover:border-border"
                )}
              >
                {opt.label}
                {data.serviceCategory === opt.id && (
                  <Check className="w-4 h-4 mt-2 text-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Step 2: Business Profile */}
      {currentStep === 1 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Business Profile</h2>
            <p className="text-muted-foreground italic font-medium">Tell buyers and sourcers about your business.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Business Name</Label>
              <Input placeholder="e.g. Stonebridge Survey Consult" value={data.businessName} onChange={(e) => onChange("businessName", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Years of Experience</Label>
              <Select value={data.yearsExperience} onValueChange={(val: string) => onChange("yearsExperience", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue placeholder="Select range" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="<2">Less than 2 years</SelectItem>
                  <SelectItem value="2-5">2 – 5 years</SelectItem>
                  <SelectItem value="5-10">5 – 10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Short Description</Label>
              <textarea
                rows={3}
                placeholder="e.g. Residential survey and valuation services across London and surrounding areas."
                value={data.description}
                onChange={(e) => onChange("description", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-sm font-medium text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </>
      )}

      {/* Step 3: Coverage Area */}
      {currentStep === 2 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Coverage Area</h2>
            <p className="text-muted-foreground italic font-medium">Where can you deliver your services?</p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2"><MapPin size={14} /> Areas Served</Label>
              <Input placeholder="e.g. London, Surrey, Kent" value={data.areasCovered} onChange={(e) => onChange("areasCovered", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
              <p className="text-[10px] text-muted-foreground">Comma-separated cities or regions.</p>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Service Mode</Label>
              <div className="grid grid-cols-3 gap-3">
                {(["onsite", "remote", "both"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => onChange("serviceMode", mode)}
                    className={cn(
                      "p-4 rounded-xl border-2 font-bold text-sm capitalize transition-all text-center",
                      data.serviceMode === mode
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border/50 bg-muted/30 text-muted-foreground hover:border-border"
                    )}
                  >
                    {mode === "onsite" ? "On-site" : mode === "remote" ? "Remote" : "Both"}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step 4: Verification */}
      {currentStep === 3 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Verification</h2>
            <p className="text-muted-foreground italic font-medium">Build credibility on the platform.</p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-3">Upload Documents</h4>
              <div className="space-y-3">
                <div className="border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-5 flex items-center gap-4 bg-white/50 dark:bg-black/20 cursor-pointer hover:bg-white dark:hover:bg-black/30 transition-colors">
                  <ShieldCheck className="text-blue-400 h-6 w-6 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-blue-900 dark:text-blue-400">Government ID</p>
                    <p className="text-xs text-blue-700/60">Passport, Driving Licence</p>
                  </div>
                </div>
                <div className="border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-5 flex items-center gap-4 bg-white/50 dark:bg-black/20 cursor-pointer hover:bg-white dark:hover:bg-black/30 transition-colors">
                  <ClipboardCheck className="text-blue-400 h-6 w-6 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-blue-900 dark:text-blue-400">Professional Licence / Certification</p>
                    <p className="text-xs text-blue-700/60">If applicable to your profession</p>
                  </div>
                </div>
                <div className="border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-5 flex items-center gap-4 bg-white/50 dark:bg-black/20 cursor-pointer hover:bg-white dark:hover:bg-black/30 transition-colors">
                  <Building className="text-blue-400 h-6 w-6 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-blue-900 dark:text-blue-400">Company Registration <span className="font-medium text-blue-700/60">(Optional)</span></p>
                    <p className="text-xs text-blue-700/60">Certificate of incorporation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step 5: Profile Completion */}
      {currentStep === 4 && (
        <div className="flex flex-col items-center justify-center py-8 text-center space-y-6">
          <div className="h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center">
            <Check className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground mb-3 uppercase">Profile Ready!</h2>
            <p className="text-muted-foreground font-medium max-w-sm mx-auto">
              Your service provider profile is set up. You can go live now or save it as a draft.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full max-w-sm">
            <button
              type="button"
              onClick={onComplete}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 transition-all px-6 py-4 rounded-xl shadow-lg shadow-primary/20"
            >
              <ArrowUpRight className="w-4 h-4" /> Go Live
            </button>
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground bg-muted/50 hover:bg-muted transition-all px-6 py-4 rounded-xl border border-border/50"
            >
              Save as Draft
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
