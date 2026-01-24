"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
    className?: string;
    delay?: number;
}

export default function AnimatedText({
    children,
    as: Component = "div",
    className,
    delay = 0,
}: AnimatedTextProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(className)}
        >
            {React.createElement(Component, { className }, children)}
        </motion.div>
    );
}
