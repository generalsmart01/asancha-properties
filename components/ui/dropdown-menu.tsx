"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative inline-block text-left" ref={containerRef}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { open, setOpen })
                }
                return child
            })}
        </div>
    )
}

const DropdownMenuTrigger = ({ children, asChild, open, setOpen }: any) => {
    return (
        <div onClick={() => setOpen(!open)}>
            {children}
        </div>
    )
}

const DropdownMenuContent = ({ children, className, align = "end", open, setOpen }: any) => {
    if (!open) return null

    return (
        <div
            className={cn(
                "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-in fade-in zoom-in-95 duration-100",
                align === "end" ? "right-0" : "left-0",
                className
            )}
        >
            <div className="py-1">{children}</div>
        </div>
    )
}

const DropdownMenuItem = ({ children, className, onClick, ...props }: any) => {
    return (
        <div
            className={cn(
                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition-colors",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    )
}

const DropdownMenuLabel = ({ children, className }: any) => {
    return (
        <div className={cn("px-4 py-2 text-sm font-semibold text-gray-900", className)}>
            {children}
        </div>
    )
}

const DropdownMenuSeparator = ({ className }: any) => {
    return <div className={cn("h-px bg-gray-200 my-1", className)} />
}

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
}
