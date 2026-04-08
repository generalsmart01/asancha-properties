import { Check, MapPin } from "lucide-react";
import { FlowProps, BuyerData } from "../../types/userOnboarding";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function BuyerFlow({ currentStep, data, onChange, onMultiToggle }: FlowProps<BuyerData>) {
  return (
    <div className="space-y-6">
      {currentStep === 0 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Tell us what kind of buyer you are</h2>
            <p className="text-muted-foreground italic font-medium">To best match you with the right deals.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Buyer Type</Label>
              <Select value={data.investorType} onValueChange={(val: string) => onChange("investorType", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="company">Company</SelectItem>
                  <SelectItem value="first_time">First-time investor</SelectItem>
                  <SelectItem value="experienced">Experienced investor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Investment Goal</Label>
              <Select value={data.investmentGoal} onValueChange={(val: string) => onChange("investmentGoal", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy_to_let">Buy-to-let</SelectItem>
                  <SelectItem value="flip">Flip</SelectItem>
                  <SelectItem value="short_let">Short-let</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Experience Level</Label>
              <Select value={data.experienceLevel} onValueChange={(val: string) => onChange("experienceLevel", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </>
      )}

      {currentStep === 1 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Search Criteria</h2>
            <p className="text-muted-foreground italic font-medium">Where and what are you looking for?</p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2"><MapPin size={14} /> Preferred Locations</Label>
              <Input placeholder="e.g. Manchester, Birmingham, Leeds" value={data.targetLocations} onChange={(e) => onChange("targetLocations", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
              <p className="text-[10px] text-muted-foreground">Separate multiple locations with commas.</p>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Budget Range (£)</Label>
              <div className="flex items-center gap-4">
                <Input type="number" placeholder="Min (e.g. 80000)" value={data.budgetMin} onChange={(e) => onChange("budgetMin", e.target.value)} className="h-12 bg-muted/30 font-bold border-border/50" />
                <span className="text-muted-foreground shrink-0">to</span>
                <Input type="number" placeholder="Max (e.g. 250000)" value={data.budgetMax} onChange={(e) => onChange("budgetMax", e.target.value)} className="h-12 bg-muted/30 font-bold border-border/50" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Property Types (select all that apply)</Label>
              <div className="grid grid-cols-2 gap-3">
                {["Terraced", "Apartment", "Semi-detached", "Detached"].map((type) => (
                  <div
                    key={type}
                    onClick={() => onMultiToggle?.("propertyTypes", type)}
                    className={cn(
                      "p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between",
                      data.propertyTypes.includes(type)
                        ? "bg-primary text-primary-foreground font-bold border-primary"
                        : "bg-muted/30 text-muted-foreground font-medium hover:bg-muted/50 border-border/50"
                    )}
                  >
                    <span>{type}</span>
                    {data.propertyTypes.includes(type) && <Check size={16} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Deal Preferences</h2>
            <p className="text-muted-foreground italic font-medium">Refine your matching criteria.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Looking for Below Market Value (BMV) deals?</Label>
              <Select value={data.desiredBmv} onValueChange={(val: string) => onChange("desiredBmv", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tenanted property acceptable?</Label>
              <Select value={data.tenantedAcceptable} onValueChange={(val: string) => onChange("tenantedAcceptable", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No, requires vacant possession</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Refurb Level Acceptable</Label>
              <Select value={data.refurbLevel} onValueChange={(val: string) => onChange("refurbLevel", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None (Turnkey only)</SelectItem>
                  <SelectItem value="light_only">Light refurb only</SelectItem>
                  <SelectItem value="heavy">Heavy refurb / structural</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Minimum Yield Target (%) — Optional</Label>
              <Input type="number" placeholder="e.g. 8" value={data.targetYield} onChange={(e) => onChange("targetYield", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Funding Readiness</h2>
            <p className="text-muted-foreground italic font-medium">Help sourcers and agents gauge how quickly you can proceed.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Funding Method</Label>
              <Select value={data.fundingMethod} onValueChange={(val: string) => onChange("fundingMethod", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="mortgage">Mortgage</SelectItem>
                  <SelectItem value="bridge">Bridge Loan</SelectItem>
                  <SelectItem value="jv">Joint Venture</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Proof of funds available?</Label>
              <Select value={data.proofOfFunds} onValueChange={(val: string) => onChange("proofOfFunds", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Expected Timeline to Buy</Label>
              <Select value={data.dealPeriod} onValueChange={(val: string) => onChange("dealPeriod", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="30_days">30 days</SelectItem>
                  <SelectItem value="60_days">60 days</SelectItem>
                  <SelectItem value="90_plus_days">90+ days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </>
      )}

      {currentStep === 4 && (
        <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Check className="h-12 w-12 text-primary" />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground mb-3 uppercase">Profile Saved!</h2>
            <p className="text-muted-foreground font-medium max-w-sm mx-auto">
              Your investor profile is complete. Our matching engine is now active. Let&apos;s show you curated opportunities.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
