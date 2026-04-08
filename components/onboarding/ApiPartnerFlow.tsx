import { Check, Building } from "lucide-react";
import { FlowProps, ApiPartnerData } from "../../types/userOnboarding";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function ApiPartnerFlow({ currentStep, data, onChange }: FlowProps<ApiPartnerData>) {
  return (
    <div className="space-y-6">

      {/* Step 1: Company Profile */}
      {currentStep === 0 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Tell us about your company</h2>
            <p className="text-muted-foreground italic font-medium">Identify your partner business.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company Name</Label>
              <Input placeholder="e.g. DealStack Technologies" value={data.companyName} onChange={(e) => onChange("companyName", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Website</Label>
              <Input placeholder="e.g. dealstack.io" value={data.website} onChange={(e) => onChange("website", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Country</Label>
              <Input placeholder="e.g. United Kingdom" value={data.country} onChange={(e) => onChange("country", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Use Case</Label>
              <textarea
                rows={3}
                placeholder="e.g. We want to syndicate approved listings into our investor portal."
                value={data.useCase}
                onChange={(e) => onChange("useCase", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-sm font-medium text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>
        </>
      )}

      {/* Step 2: Contacts */}
      {currentStep === 1 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Contacts</h2>
            <p className="text-muted-foreground italic font-medium">Capture business and technical owners.</p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="p-5 bg-card border border-border/50 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-foreground">Business / Product Contact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</Label>
                  <Input placeholder="John Doe" value={data.businessContactName} onChange={(e) => onChange("businessContactName", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</Label>
                  <Input type="email" placeholder="john@example.com" value={data.businessContactEmail} onChange={(e) => onChange("businessContactEmail", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
                </div>
              </div>
            </div>
            <div className="p-5 bg-card border border-border/50 rounded-2xl space-y-4">
              <h4 className="text-sm font-bold text-foreground">Technical Contact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</Label>
                  <Input placeholder="Jane Smith (Dev Lead)" value={data.technicalContactName} onChange={(e) => onChange("technicalContactName", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</Label>
                  <Input type="email" placeholder="devs@example.com" value={data.technicalContactEmail} onChange={(e) => onChange("technicalContactEmail", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
                </div>
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
            <p className="text-muted-foreground italic font-medium">Validate legitimacy and intended usage.</p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-3">Company Documents</h4>
              <div className="border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-6 flex flex-col items-center justify-center bg-white/50 dark:bg-black/20 cursor-pointer hover:bg-white dark:hover:bg-black/40 transition-colors">
                <Building className="text-blue-400 mb-2 h-6 w-6" />
                <span className="text-sm font-bold text-blue-900 dark:text-blue-400">Upload Company Registration</span>
                <span className="text-xs text-blue-700/60 mt-1">Certificate of incorporation</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Describe Intended API Usage</Label>
              <textarea
                rows={3}
                placeholder="Please describe how your application will interact with the API..."
                value={data.intendedUsage}
                onChange={(e) => onChange("intendedUsage", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-sm font-medium text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex items-start space-x-3 bg-card p-4 rounded-xl border border-border/50">
              <Checkbox id="compliance-ack" className="mt-1" checked={data.complianceAck} onCheckedChange={(c) => onChange("complianceAck", c)} />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="compliance-ack" className="font-bold text-sm cursor-pointer">Confirm compliance with platform terms</Label>
                <p className="text-xs text-muted-foreground">I agree to abide by the API Terms of Service, rate limits, and data privacy policies.</p>
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
            <p className="text-muted-foreground italic font-medium">Prepare billing and access plan.</p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pricing Plan</Label>
              <Select value={data.pricingPlan} onValueChange={(val: string) => onChange("pricingPlan", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue placeholder="Select a plan" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">Startup (up to 10k calls/mo)</SelectItem>
                  <SelectItem value="growth">Growth (up to 100k calls/mo)</SelectItem>
                  <SelectItem value="enterprise">Enterprise (Unlimited + SLAs)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Estimated Monthly API Calls</Label>
              <Select value={data.estimatedMonthlyCalls} onValueChange={(val: string) => onChange("estimatedMonthlyCalls", val)}>
                <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue placeholder="Select range" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="<10k">Less than 10,000</SelectItem>
                  <SelectItem value="10k-50k">10,000 - 50,000</SelectItem>
                  <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>
                  <SelectItem value="100k+">More than 100,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Billing Email</Label>
              <Input type="email" placeholder="billing@example.com" value={data.billingEmail} onChange={(e) => onChange("billingEmail", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
          </div>
        </>
      )}

      {/* Step 5: API Scope */}
      {currentStep === 4 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">API Scope</h2>
            <p className="text-muted-foreground italic font-medium">Define access permissions needed.</p>
          </div>
          <div className="space-y-4 mt-6">
            {[
              { id: "scopeRetrieve", text: "Retrieve listings", sub: "GET endpoints for properties, search, and details." },
              { id: "scopeCreate", text: "Create listings", sub: "POST endpoints to add new inventory." },
              { id: "scopeUpdate", text: "Update listings", sub: "PUT/PATCH endpoints to modify existing inventory." },
              { id: "scopeRemove", text: "Remove listings", sub: "DELETE or status-update endpoints to deactivate listings." },
            ].map(({ id, text, sub }) => (
              <div key={id} className="flex items-start space-x-3 bg-card p-4 rounded-xl border border-border/50">
                <Checkbox
                  id={id}
                  className="mt-1 border-primary data-[state=checked]:bg-primary"
                  checked={data[id as "scopeRetrieve" | "scopeCreate" | "scopeUpdate" | "scopeRemove"]}
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

      {/* Step 6: Sandbox Access (End) */}
      {currentStep === 5 && (
        <div className="flex flex-col items-center justify-center py-8 text-center space-y-6">
          <div className="h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center">
            <Check className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground mb-3 uppercase">Profile Submitted!</h2>
            <p className="text-muted-foreground font-medium max-w-sm mx-auto">
              Your API Partner profile is recorded and commercial review has started. You can now generate your sandbox key to prepare for integration.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
