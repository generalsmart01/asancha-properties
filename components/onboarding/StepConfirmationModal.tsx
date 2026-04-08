import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface StepConfirmationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isLoading: boolean;
  stepName?: string;
}

export function StepConfirmationModal({ isOpen, onOpenChange, onConfirm, isLoading, stepName }: StepConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Step Completion</DialogTitle>
          <DialogDescription>
            Are you sure you want to proceed to the next step? This will save your progress for {stepName ? `"${stepName}"` : "the current step"}. Required fields will be strictly enforced.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4 flex sm:justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Saving..." : "Confirm & Proceed"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
