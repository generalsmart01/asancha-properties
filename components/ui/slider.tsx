"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
    value: number[]
    min: number
    max: number
    step: number
    onValueChange: (value: number[]) => void
    className?: string
}

export function Slider({ value, min, max, step, onValueChange, className }: SliderProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange([parseFloat(e.target.value)])
    }

    return (
        <div className={cn("relative w-full touch-none select-none flex items-center", className)}>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value[0]}
                onChange={handleChange}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            />
        </div>
    )
}
