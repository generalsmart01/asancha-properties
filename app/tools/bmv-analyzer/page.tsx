"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Calculator as CalcIcon,
    TrendingUp,
    BarChart3,
    UserCheck,
    ArrowRight,
    Info,
    Percent,
    PoundSterling,
    Wrench,
    Gavel,
    CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BMVAnalyzerPage = () => {
    const [formData, setFormData] = useState({
        askingPrice: '',
        marketValue: '',
        repairCosts: '',
        closingCosts: '',
        potentialRent: '',
        potentialResale: ''
    });

    const [results, setResults] = useState<any>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const calculateDeal = (e: React.FormEvent) => {
        e.preventDefault();
        setIsCalculating(true);

        // Simulate calculation delay for effect
        setTimeout(() => {
            const asking = parseFloat(formData.askingPrice);
            const market = parseFloat(formData.marketValue);
            const repairs = parseFloat(formData.repairCosts) || 0;
            const closing = parseFloat(formData.closingCosts) || 0;
            const rent = parseFloat(formData.potentialRent) || 0;
            const resale = parseFloat(formData.potentialResale) || market;

            const totalInvestment = asking + repairs + closing;
            const discountAmount = market - asking;
            const discountPercentage = (discountAmount / market) * 100;

            // ROI Calculation: ((Resale - Total Investment) / Total Investment) * 100
            const potentialROI = ((resale - totalInvestment) / totalInvestment) * 100;

            // Rental Yield: ((Annual Rent) / Total Investment) * 100
            const rentalYield = ((rent * 12) / totalInvestment) * 100;

            // Simple BMV Score out of 100
            // Factors: Discount (40%), ROI (40%), Yield (20%)
            const scoreDiscount = Math.min(discountPercentage * 2.5, 40); // 16% discount = 40 pts
            const scoreROI = Math.min(potentialROI * 1.5, 40); // 26% ROI = 40 pts
            const scoreYield = Math.min(rentalYield * 2, 20); // 10% Yield = 20 pts
            const bmvScore = Math.round(scoreDiscount + scoreROI + scoreYield);

            setResults({
                bmvScore,
                discountPercentage: discountPercentage.toFixed(1),
                totalInvestment: totalInvestment.toLocaleString(),
                potentialROI: potentialROI.toFixed(1),
                rentalYield: rentalYield.toFixed(1)
            });
            setIsCalculating(false);

            // Scroll to results
            document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
        }, 800);
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-500';
        if (score >= 60) return 'text-primary';
        if (score >= 40) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <main className="grow bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/bmv-analyzer-hero.jpg"
                    alt="BMV Deal Analyzer"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/60" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                            BMV Deal <span className="text-primary italic">Analyzer</span>
                        </h1>
                        <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                        <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                            Evaluate your property investments with institutional-grade precision using our comprehensive analysis tool.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-12">
                            {/* Form */}
                            <div className="lg:col-span-3">
                                <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-border/50 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <CalcIcon className="w-32 h-32" />
                                    </div>

                                    <div className="flex flex-col items-start justify-start mb-8">
                                        <h2 className="text-3xl font-bold text-foreground">
                                            <span className="capitalize text-outline text-foreground dark:text-white text-left">Analyze Your Deal</span>
                                        </h2>
                                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                                    </div>

                                    <form onSubmit={calculateDeal} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="askingPrice" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Asking Price (£)</label>
                                                <div className="relative">
                                                    <PoundSterling className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="number" id="askingPrice" required
                                                        value={formData.askingPrice} onChange={handleInputChange}
                                                        className="w-full bg-muted/30 border border-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                                                        placeholder="0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="marketValue" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Market Value (£)</label>
                                                <div className="relative">
                                                    <PoundSterling className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="number" id="marketValue" required
                                                        value={formData.marketValue} onChange={handleInputChange}
                                                        className="w-full bg-muted/30 border border-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                                                        placeholder="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="repairCosts" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Renovation Costs (£)</label>
                                                <div className="relative">
                                                    <Wrench className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="number" id="repairCosts" required
                                                        value={formData.repairCosts} onChange={handleInputChange}
                                                        className="w-full bg-muted/30 border border-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                                                        placeholder="0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="closingCosts" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Closing Costs (£)</label>
                                                <div className="relative">
                                                    <Gavel className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="number" id="closingCosts" required
                                                        value={formData.closingCosts} onChange={handleInputChange}
                                                        className="w-full bg-muted/30 border border-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                                                        placeholder="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="potentialRent" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Monthly Rent (£)</label>
                                                <div className="relative">
                                                    <PoundSterling className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="number" id="potentialRent"
                                                        value={formData.potentialRent} onChange={handleInputChange}
                                                        className="w-full bg-muted/30 border border-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                                                        placeholder="0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="potentialResale" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Resale Price (£)</label>
                                                <div className="relative">
                                                    <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <input
                                                        type="number" id="potentialResale"
                                                        value={formData.potentialResale} onChange={handleInputChange}
                                                        className="w-full bg-muted/30 border border-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                                                        placeholder="Market Value if empty"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="submit" disabled={isCalculating}
                                            className="primary-btn w-full rounded-2xl! py-5! shadow-xl hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:scale-100"
                                        >
                                            {isCalculating ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                <>
                                                    Run Analysis
                                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Info Sidebar */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className="bg-muted/50 p-8 rounded-3xl border border-border">
                                    <div className="flex flex-col items-start justify-start mb-6">
                                        <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tight flex items-center gap-2">
                                            <Info className="w-5 h-5 text-primary" />
                                            Analyzer Guide
                                        </h3>
                                        <span className="h-1 w-12 bg-primary rounded-full"></span>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">01</div>
                                            <div>
                                                <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Market Value</h4>
                                                <p className="text-muted-foreground text-xs leading-relaxed italic">The estimated value of the property in its current state or direct comparables.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">02</div>
                                            <div>
                                                <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Investment Costs</h4>
                                                <p className="text-muted-foreground text-xs leading-relaxed italic">Include legal fees, stamp duty, and necessary refurbishments.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">03</div>
                                            <div>
                                                <h4 className="font-bold text-foreground text-sm uppercase tracking-tight">Potential Returns</h4>
                                                <p className="text-muted-foreground text-xs leading-relaxed italic">Calculates ROI based on resale and Yield based on monthly rental income.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
                                    <h3 className="text-xl font-black text-primary uppercase tracking-tight mb-4 italic">Pro Tip</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                                        "A high BMV score (80+) typically indicates a prime investment opportunity with significant equity growth potential."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <AnimatePresence>
                            {results && (
                                <motion.div
                                    id="results"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    className="mt-16 bg-[#04283a] rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden text-white"
                                >
                                    <div className="absolute top-0 right-0 p-12 opacity-10">
                                        <BarChart3 className="w-64 h-64" />
                                    </div>

                                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                                        <div className="text-center lg:text-left flex-1">
                                            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Analysis Complete</span>
                                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">Your Custom <br />Deal Report</h3>
                                            <p className="text-white/60 font-medium max-w-md leading-relaxed">
                                                Based on your data, this deal shows the following performance indicators.
                                            </p>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <div className="relative w-48 h-48 rounded-full border-8 border-white/5 flex items-center justify-center mb-4">
                                                <div className="text-center">
                                                    <span className={`text-6xl font-black block leading-none ${getScoreColor(results.bmvScore)}`}>{results.bmvScore}</span>
                                                    <span className="text-[10px] uppercase font-black tracking-widest text-white/40">BMV Score</span>
                                                </div>
                                                <svg className="absolute inset-0 w-full h-full -rotate-90">
                                                    <circle
                                                        cx="96" cy="96" r="88"
                                                        fill="none" stroke="currentColor"
                                                        strokeWidth="8" className="text-primary opacity-20"
                                                    />
                                                    <motion.circle
                                                        cx="96" cy="96" r="88"
                                                        fill="none" stroke="currentColor"
                                                        strokeWidth="8" strokeDasharray="552.9"
                                                        initial={{ strokeDashoffset: 552.9 }}
                                                        animate={{ strokeDashoffset: 552.9 - (552.9 * results.bmvScore / 100) }}
                                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                                        className="text-primary"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                                            {[
                                                { label: "Discount", val: `${results.discountPercentage}%`, icon: <Percent className="w-4 h-4" /> },
                                                { label: "Total Invest", val: `£${results.totalInvestment}`, icon: <PoundSterling className="w-4 h-4" /> },
                                                { label: "ROI", val: `${results.potentialROI}%`, icon: <TrendingUp className="w-4 h-4" /> },
                                                { label: "Yield", val: `${results.rentalYield}%`, icon: <BarChart3 className="w-4 h-4" /> }
                                            ].map((stat, idx) => (
                                                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-between aspect-square group hover:bg-white/10 transition-all">
                                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                        {stat.icon}
                                                    </div>
                                                    <div>
                                                        <span className="block text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">{stat.label}</span>
                                                        <span className="text-xl font-black text-white">{stat.val}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <UserCheck className="w-6 h-6" />
                                            </div>
                                            <p className="text-sm font-medium text-white/70 italic max-w-xs">
                                                Want a professional verification? Book a consultation with our experts.
                                            </p>
                                        </div>
                                        <Link href="/free-consultation" className="primary-btn text-sm! px-12! py-4!">
                                            Get Expert Analysis
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">How It Works</span>
                        </h2>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Enter Details",
                                desc: "Input the asking price, estimated market value, and all projected costs to start the analysis.",
                                icon: <CalcIcon className="w-8 h-8" />
                            },
                            {
                                title: "Get Results",
                                desc: "Receive comprehensive calculations including BMV score, ROI, and yield projections instantly.",
                                icon: <BarChart3 className="w-8 h-8" />
                            },
                            {
                                title: "Expert Support",
                                desc: "Get professional advice on your results to refine your investment strategy and move forward.",
                                icon: <UserCheck className="w-8 h-8" />
                            }
                        ].map((step, idx) => (
                            <div key={idx} className="bg-card p-10 rounded-[2.5rem] border border-border shadow-sm text-center group hover:border-primary/30 transition-all">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    {step.icon}
                                </div>
                                <h4 className="text-xl font-bold text-foreground uppercase tracking-tight mb-4">{step.title}</h4>
                                <p className="text-muted-foreground leading-relaxed italic text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter/CTA */}
            <section className="py-24 bg-background border-y border-border">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-col items-center justify-center mb-8">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Ready for Early Access to BMV Deals?</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>
                    <Link href="/contact-us" className="primary-btn bg-foreground! text-background! hover:bg-primary! hover:text-white! px-10! py-5! rounded-2xl!">
                        Join Our Investor Circle
                        <CheckCircle2 className="ml-3 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default BMVAnalyzerPage;