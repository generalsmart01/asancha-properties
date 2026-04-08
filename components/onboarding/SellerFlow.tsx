import { Check, Building, ArrowUpRight, ShieldCheck, ClipboardCheck } from "lucide-react";
import { FlowProps, SellerData } from "../../types/userOnboarding";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function SellerFlow({ currentStep, data, onChange }: FlowProps<SellerData>) {
  return (
    <div className="space-y-6">
      {currentStep === 0 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">What best describes you?</h2>
            <p className="text-muted-foreground italic font-medium">Select your primary role to customize your dashboard.</p>
          </div>
          <RadioGroup
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            value={data.accountType}
            onValueChange={(val: string) => onChange("accountType", val)}
          >
            {[
              { id: "agent", label: "Estate Agent", icon: Building, desc: "I manage listings for clients." },
              { id: "landlord", label: "Landlord", icon: ShieldCheck, desc: "I own and rent out properties." },
              { id: "vendor", label: "Property Owner / Vendor", icon: ClipboardCheck, desc: "I am selling my own property." },
              { id: "developer", label: "Developer", icon: ArrowUpRight, desc: "I build and sell new homes." },
            ].map((opt) => (
              <div key={opt.id}>
                <RadioGroupItem value={opt.id} id={opt.id} className="peer sr-only" />
                <Label
                  htmlFor={opt.id}
                  className="flex flex-col items-center justify-between rounded-2xl border-2 border-border/50 bg-transparent p-6 hover:bg-muted/50 hover:border-primary/50 cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all w-full text-center group"
                >
                  <opt.icon className="mb-3 h-8 w-8 text-muted-foreground group-data-[state=checked]:text-primary" />
                  <span className="font-bold text-foreground">{opt.label}</span>
                  <span className="text-xs text-muted-foreground mt-1 font-medium">{opt.desc}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </>
      )}

      {currentStep === 1 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Business Details</h2>
            <p className="text-muted-foreground italic font-medium">Tell us more about how you operate.</p>
          </div>
          <div className="space-y-5 mt-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company Name or Status</Label>
              <Input placeholder="e.g. Ashton Prime Estates" value={data.companyName} onChange={(e) => onChange("companyName", e.target.value)} className="h-12 bg-muted/30 border-border/50 focus:bg-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                <Input placeholder="John Doe" value={data.fullName} onChange={(e) => onChange("fullName", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                <Input placeholder="+44 7000 000000" value={data.phone} onChange={(e) => onChange("phone", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role in Transaction</Label>
              <Input placeholder="e.g. Listing Agent, Owner" value={data.transactionRole} onChange={(e) => onChange("transactionRole", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Website (Optional)</Label>
              <Input placeholder="https://..." value={data.website} onChange={(e) => onChange("website", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
            </div>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Portfolio Profile</h2>
            <p className="text-muted-foreground italic font-medium">Let us understand your typical inventory.</p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Est. Properties / Year</Label>
                <Select value={data.numberOfProperties} onValueChange={(val: string) => onChange("numberOfProperties", val)}>
                  <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue placeholder="Select amount" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1 - 5</SelectItem>
                    <SelectItem value="6-20">6 - 20</SelectItem>
                    <SelectItem value="21-50">21 - 50</SelectItem>
                    <SelectItem value="50+">50+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Sales Intent</Label>
                <Select value={data.salesIntent} onValueChange={(val: string) => onChange("salesIntent", val)}>
                  <SelectTrigger className="h-12 bg-muted/30 border-border/50"><SelectValue placeholder="Select intent" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Sale</SelectItem>
                    <SelectItem value="off_market">Off-Market Sale</SelectItem>
                    <SelectItem value="pre_launch">Pre-launch</SelectItem>
                    <SelectItem value="bulk">Bulk Disposal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Main Locations</Label>
              <Input placeholder="e.g. London, Manchester, Birmingham" value={data.mainLocations} onChange={(e) => onChange("mainLocations", e.target.value)} className="h-12 bg-muted/30 border-border/50" />
              <p className="text-[10px] text-muted-foreground">Comma separated regions or cities.</p>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Property Types</Label>
              <RadioGroup className="flex flex-wrap gap-4" value={data.propertyTypes} onValueChange={(val: string) => onChange("propertyTypes", val)}>
                {[
                  { id: "residential", label: "Residential" },
                  { id: "commercial", label: "Commercial" },
                  { id: "mixed", label: "Mixed Use" },
                  { id: "land", label: "Land" },
                ].map((pt) => (
                  <div key={pt.id} className="flex items-center space-x-2 bg-muted/30 px-4 py-3 rounded-xl border border-border/50">
                    <RadioGroupItem value={pt.id} id={`seller-pt-${pt.id}`} className="text-primary" />
                    <Label htmlFor={`seller-pt-${pt.id}`} className="font-bold text-sm cursor-pointer">{pt.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground mb-2 uppercase">Verification</h2>
            <p className="text-muted-foreground italic font-medium">Confirm you have the authority to list.</p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-100 dark:border-blue-900">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-2">Required Documents</h4>
              <p className="text-sm text-blue-800/80 dark:text-blue-300/80 mb-4">
                To ensure trust on our platform, we require proof of authority to market inventory. Please upload your company registration (e.g. CAC) or proof of ownership.
              </p>
              <div className="border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-8 flex flex-col items-center justify-center bg-white/50 dark:bg-black/20 cursor-pointer hover:bg-white dark:hover:bg-black/40 transition-colors">
                <ClipboardCheck className="text-blue-400 mb-3 h-8 w-8" />
                <span className="text-sm font-bold text-blue-900 dark:text-blue-400">Click to upload documents</span>
                <span className="text-xs text-blue-700/60 mt-1">PDF, JPG, PNG up to 10MB</span>
              </div>
            </div>
            <div className="space-y-4 pt-4 border-t border-border/50">
              <div className="flex items-start space-x-3 bg-card p-4 rounded-xl border border-border/50">
                <Checkbox id="doc-ack" className="mt-1" checked={data.documentAck} onCheckedChange={(c) => onChange("documentAck", c)} />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="doc-ack" className="font-bold text-sm cursor-pointer">I will provide verification later</Label>
                  <p className="text-xs text-muted-foreground">Your account may be limited until documents are verified.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-card p-4 rounded-xl border border-border/50">
                <Checkbox id="acc-ack" className="mt-1" checked={data.accuracyAck} onCheckedChange={(c) => onChange("accuracyAck", c)} />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="acc-ack" className="font-bold text-sm cursor-pointer">Confirm Listing Authority</Label>
                  <p className="text-xs text-muted-foreground">I confirm that any property I add will be accurate and I hold the legal rights to market it.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {currentStep === 4 && (
        <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
          <div className="h-24 w-24 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-4">
            <Check className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-foreground mb-3 uppercase">You&apos;re All Set!</h2>
            <p className="text-muted-foreground font-medium max-w-sm mx-auto">
              Your seller profile is created. Establish your presence by adding your first property or importing your portfolio.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
