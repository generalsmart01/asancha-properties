"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const DialogContext = React.createContext<{
    open: boolean
    setOpen: (open: boolean) => void
}>({
    open: false,
    setOpen: () => { },
})

const Dialog = ({ children, open, onOpenChange }: { children: React.ReactNode, open?: boolean, onOpenChange?: (open: boolean) => void }) => {
    const [internalOpen, setInternalOpen] = React.useState(false)
    const isControlled = open !== undefined

    const isOpen = isControlled ? open : internalOpen
    const setIsOpen = React.useCallback((newOpen: boolean) => {
        if (!isControlled) {
            setInternalOpen(newOpen)
        }
        if (onOpenChange) {
            onOpenChange(newOpen)
        }
    }, [isControlled, onOpenChange])

    return (
        <DialogContext.Provider value={{ open: isOpen, setOpen: setIsOpen }}>
            {children}
        </DialogContext.Provider>
    )
}

const DialogTrigger = ({ children, asChild, className }: { children: React.ReactNode, asChild?: boolean, className?: string }) => {
    const { setOpen } = React.useContext(DialogContext)

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, {
            onClick: (e: React.MouseEvent) => {
                children.props.onClick?.(e)
                setOpen(true)
            }
        })
    }

    return (
        <button className={className} onClick={() => setOpen(true)}>
            {children}
        </button>
    )
}

const DialogContent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const { open, setOpen } = React.useContext(DialogContext)

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <div className={cn(
                "relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 animate-in fade-in zoom-in-95 sm:rounded-lg md:w-full",
                className
            )}>
                {children}
                <button
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    onClick={() => setOpen(false)}
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </div>
    )
}

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            className
        )}
        {...props}
    />
)

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    />
)

const DialogTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            "text-lg font-semibold leading-none tracking-tight",
            className
        )}
        {...props}
    />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
DialogDescription.displayName = "DialogDescription"

export {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
}
