import { Check, ShieldCheck, ClipboardCheck, Plus, MapPin } from "lucide-react";
import { FlowProps, SourcerData } from "../../types/userOnboarding";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

// router navigation must be handled by parent or passed in, but since it's just buttons at step 5, let's keep it simple.
// we will accept router as a prop, or skip using next/navigation here entirely and pass a completion callback.
// Since router is used in step 5, passing onComplete and onSkip is better.
interface SourcerFlowProps extends FlowProps<SourcerData> {
  onComplete: () => void;
  onSkip: () => void;
}

export function SourcerFlow({ currentStep, data, onChange, onMultiToggle, onComplete, onSkip }: SourcerFlowProps) {
  return (
    <div className="space-y-6">

      {/* Step 1: Business Identity */}
      {currentStep === 0 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Set up your sourcer profile</h2>
            <p className="text-muted-foreground italic font-medium">Tell us who you are and how you work.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Account Type</Label>
              <div className="grid grid-cols-2 gap-4">
                {(["individual", "company"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => onChange("accountType", type)}
                    className={cn(
                      "p-4 rounded-xl border-2 font-bold capitalize transition-all text-center",
                      data.accountType === type
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border/50 bg-muted/30 text-muted-foreground hover:border-border"
                    )}
                  >
                    {type === "individual" ? "Individual" : "Company"}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Trading Name</Label>
              <Input placeholder="e.g. NorthEdge Property Sourcing" value={data.tradingName} onChange={(e) => onChange("tradingName", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Years of Experience</Label>
              <Select value={data.yearsExperience} onValueChange={(val: string) => onChange("yearsExperience", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue placeholder="Select range" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="<1">Less than 1 year</SelectItem>
                  <SelectItem value="1-3">1 – 3 years</SelectItem>
                  <SelectItem value="3-5">3 – 5 years</SelectItem>
                  <SelectItem value="5+">5+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Short Bio</Label>
              <textarea
                rows={3}
                placeholder="e.g. I source BMV residential deals across Greater Manchester with a focus on distressed stock."
                value={data.bio}
                onChange={(e) => onChange("bio", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-sm font-medium text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </>
      )}

      {/* Step 2: Coverage & Specialty */}
      {currentStep === 1 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Coverage & Specialty</h2>
            <p className="text-muted-foreground italic font-medium">Where do you source, and what types of deals?</p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2"><MapPin size={14} /> Areas Covered</Label>
              <Input placeholder="e.g. Liverpool, Manchester, Bolton" value={data.areasCovered} onChange={(e) => onChange("areasCovered", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
              <p className="text-[10px] text-muted-foreground">Comma-separated cities or regions.</p>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Property Categories</Label>
              <div className="grid grid-cols-2 gap-3">
                {["Residential", "HMO", "Land", "Commercial"].map((cat) => (
                  <div
                    key={cat}
                    onClick={() => onMultiToggle?.("propertyCategories", cat)}
                    className={cn(
                      "p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between",
                      data.propertyCategories.includes(cat)
                        ? "border-primary bg-primary/5 text-primary font-bold"
                        : "border-border/50 bg-muted/30 text-muted-foreground font-medium hover:bg-muted/50"
                    )}
                  >
                    <span>{cat}</span>
                    {data.propertyCategories.includes(cat) && <Check size={16} />}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Deal Types</Label>
              <div className="grid grid-cols-2 gap-3">
                {["BMV", "Distressed", "Chain-break", "Development"].map((deal) => (
                  <div
                    key={deal}
                    onClick={() => onMultiToggle?.("dealTypes", deal)}
                    className={cn(
                      "p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between",
                      data.dealTypes.includes(deal)
                        ? "border-primary bg-primary/5 text-primary font-bold"
                        : "border-border/50 bg-muted/30 text-muted-foreground font-medium hover:bg-muted/50"
                    )}
                  >
                    <span>{deal}</span>
                    {data.dealTypes.includes(deal) && <Check size={16} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step 3: Verification */}
      {currentStep === 2 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Verification</h2>
            <p className="text-muted-foreground italic font-medium">Build trust with buyers on the platform.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-3">Required Documents</h4>
              <div className="space-y-3">
                <div className="border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-6 flex flex-col items-center justify-center bg-white/50 dark:bg-black/20 cursor-pointer hover:bg-white dark:hover:bg-black/40 transition-colors">
                  <ShieldCheck className="text-blue-400 mb-2 h-6 w-6" />
                  <span className="text-sm font-bold text-blue-900 dark:text-blue-400">Upload Government ID</span>
                  <span className="text-xs text-blue-700/60 mt-1">Passport, Driving Licence</span>
                </div>
                {data.accountType === "company" && (
                  <div className="border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-6 flex flex-col items-center justify-center bg-white/50 dark:bg-black/20 cursor-pointer hover:bg-white dark:hover:bg-black/40 transition-colors">
                    <ClipboardCheck className="text-blue-400 mb-2 h-6 w-6" />
                    <span className="text-sm font-bold text-blue-900 dark:text-blue-400">Upload Company Registration</span>
                    <span className="text-xs text-blue-700/60 mt-1">Certificate of incorporation / CAC</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-start space-x-3 bg-card p-4 rounded-xl border border-border/50">
              <Checkbox id="src-info-ack" className="mt-1" checked={data.infoAccuracyAck} onCheckedChange={(c) => onChange("infoAccuracyAck", c)} />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="src-info-ack" className="font-bold text-sm cursor-pointer">I confirm all business information is accurate</Label>
                <p className="text-xs text-muted-foreground">False information may result in account suspension.</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step 4: Commercial Setup */}
      {currentStep === 3 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Commercial Setup</h2>
            <p className="text-muted-foreground italic font-medium">Define how you earn and where to pay you.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sourcing Fee Model</Label>
              <div className="grid grid-cols-2 gap-4">
                {(["fixed", "percentage"] as const).map((model) => (
                  <button
                    key={model}
                    type="button"
                    onClick={() => onChange("feeModel", model)}
                    className={cn(
                      "p-4 rounded-xl border-2 font-bold capitalize transition-all text-center",
                      data.feeModel === model
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border/50 bg-muted/30 text-muted-foreground hover:border-border"
                    )}
                  >
                    {model === "fixed" ? "Fixed Fee" : "Percentage"}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {data.feeModel === "fixed" ? "Typical Fee (£)" : "Typical Fee (%)"}
              </Label>
              <Input
                type="number"
                placeholder={data.feeModel === "fixed" ? "e.g. 3000" : "e.g. 2"}
                value={data.feeRange}
                onChange={(e) => onChange("feeRange", e.target.value)}
                className="h-12 bg-muted/30 border-border/50"
              />
            </div>
            <div className="border-t border-border/50 pt-5 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-muted-foreground">Bank Details</h4>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bank Name</Label>
                <Input placeholder="e.g. Barclays" value={data.bankName} onChange={(e) => onChange("bankName", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Account Name</Label>
                  <Input placeholder="Full account name" value={data.accountName} onChange={(e) => onChange("accountName", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Account Number</Label>
                  <Input placeholder="e.g. 12345678" value={data.accountNumber} onChange={(e) => onChange("accountNumber", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step 5: Listing Standards */}
      {currentStep === 4 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Listing Standards</h2>
            <p className="text-muted-foreground italic font-medium">Agree to platform quality and compliance rules.</p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="p-5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl">
              <p className="text-sm font-bold text-amber-900 dark:text-amber-400">Please read and acknowledge each commitment below before continuing.</p>
            </div>
            {[
              { id: "ruleAck1", text: "I will only upload genuine and authorised deals", sub: "You must have the seller's authority or instruction before listing any property." },
              { id: "ruleAck2", text: "I understand misleading data may lead to suspension", sub: "All deal data must be accurate, current, and not exaggerated." },
              { id: "ruleAck3", text: "I agree to Asancha listing quality standards", sub: "Including submission format, required evidence, and response time requirements." },
            ].map(({ id, text, sub }) => (
              <div key={id} className="flex items-start space-x-3 bg-card p-4 rounded-xl border border-border/50">
                <Checkbox
                  id={id}
                  className="mt-1 border-primary data-[state=checked]:bg-primary"
                  checked={data[id as "ruleAck1" | "ruleAck2" | "ruleAck3"]}
                  onCheckedChange={(c) => onChange(id, c)}
                />
                <div className="grid gap-1 leading-none">
                  <Label htmlFor={id} className="font-bold text-sm cursor-pointer">{text}</Label>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Step 6: First Deal Action */}
      {currentStep === 5 && (
        <div className="flex flex-col items-center justify-center py-8 text-center space-y-6">
          <div className="h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center">
            <ShieldCheck className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground mb-3 uppercase">Sourcer Profile Activated!</h2>
            <p className="text-muted-foreground font-medium max-w-sm mx-auto">
              Your verification is submitted. You&apos;re ready to submit your first deal to qualified buyers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full max-w-sm">
            <button
              type="button"
              onClick={onComplete}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 transition-all px-6 py-4 rounded-xl shadow-lg shadow-primary/20"
            >
              <Plus className="w-4 h-4" /> Upload First Deal
            </button>
            <button
              type="button"
              onClick={onSkip}
              className="flex-1 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground bg-muted/50 hover:bg-muted transition-all px-6 py-4 rounded-xl border border-border/50"
            >
              Skip for Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
