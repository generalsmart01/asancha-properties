"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyConsultationButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    className="fixed bottom-8 right-8 z-100"
                >
                    <Link
                        href="/free-consultation"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative flex items-center group"
                    >
                        {/* Label Tooltip */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="absolute right-full mr-4 bg-white text-primary border border-primary/20 px-4 py-2 rounded-xl shadow-xl font-black uppercase tracking-widest text-xs whitespace-nowrap hidden md:block"
                                >
                                    Book Free Consultation
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Button Outer Ring */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20 scale-150" />

                            {/* Main Button */}
                            <div className="relative h-16 w-16 bg-primary hover:bg-primary-hover text-white rounded-full shadow-[0_10px_30px_-5px_rgba(3,108,166,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20">
                                <Calendar className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 border-2 border-white rounded-full animate-pulse shadow-sm" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
