"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
}

export default function AnimatedSection({
    children,
    className,
    ...props
}: AnimatedSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(className)}
            {...props}
        >
            {children}
        </motion.section>
    );
}
