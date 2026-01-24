"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface NewsletterFormProps {
    placeholder?: string;
    buttonText?: string;
    buttonClassName?: string;
    onSubmit: (email: string) => Promise<void>;
}

export default function NewsletterForm({
    placeholder = "Enter your email",
    buttonText = "Subscribe",
    buttonClassName,
    onSubmit,
}: NewsletterFormProps) {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        try {
            await onSubmit(email);
            toast.success("Subscribed successfully!");
            setEmail("");
        } catch (error) {
            toast.error("Failed to subscribe. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md w-full"
        >
            <Input
                type="email"
                placeholder={placeholder}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary transition-all rounded-xl"
            />
            <Button
                type="submit"
                disabled={isLoading}
                className={cn("bg-primary hover:bg-primary/90 text-white font-bold rounded-xl", buttonClassName)}
            >
                {isLoading ? "Subscribing..." : buttonText}
            </Button>
        </form>
    );
}
