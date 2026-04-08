import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  trackLabels: string[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isLoading?: boolean;
}

export function StepIndicator({ trackLabels, currentStep, setCurrentStep, isLoading }: StepIndicatorProps) {
  const totalSteps = trackLabels.length;

  return (
    <div className="mb-10 w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex items-center justify-center min-w-max gap-2 sm:gap-4 px-2">
        {trackLabels.map((label, idx) => {
          const isActive = currentStep === idx;
          const isPast = currentStep > idx;

          return (
            <div key={idx} className="flex items-center">
              <div
                className={cn(
                  "rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 select-none",
                  isActive
                    ? "bg-primary text-white shadow-md ring-2 ring-primary/20 ring-offset-2"
                    : isPast
                    ? "bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
                    : "bg-muted text-muted-foreground",
                  isLoading && "opacity-50 pointer-events-none"
                )}
                onClick={() => (!isLoading && isPast) && setCurrentStep(idx)}
              >
                {isPast && <Check className="w-3 h-3" />}
                {label}
              </div>
              {idx < totalSteps - 1 && (
                <div
                  className={cn(
                    "w-4 sm:w-8 h-[2px] mx-1 sm:mx-2 rounded-full transition-colors",
                    isPast ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
