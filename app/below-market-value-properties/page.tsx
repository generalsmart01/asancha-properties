"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    TrendingUp,
    Percent,
    ShieldCheck,
    Rocket,
    CheckCircle2,
    Calculator,
    BarChart3,
    Receipt,
    Star,
    ArrowRight,
    HelpCircle,
    Search,
    FileText,
    Gavel
} from 'lucide-react';
import { ServiceTimeline } from '@/components/common/ServiceTimeline';

const BMVPropertiesPage = () => {
    const benefits = [
        {
            title: "Immediate Equity",
            description: "Gain instant equity through purchase price below market value, giving you a head start on your investment.",
            icon: <TrendingUp className="w-10 h-10 text-primary" />
        },
        {
            title: "Higher Yields",
            description: "Potentially higher rental yields due to lower purchase price, maximizing your monthly cash flow.",
            icon: <Percent className="w-10 h-10 text-primary" />
        },
        {
            title: "Reduced Risk",
            description: "Lower investment risk with built-in equity buffer that protects you against market fluctuations.",
            icon: <ShieldCheck className="w-10 h-10 text-primary" />
        },
        {
            title: "Faster Growth",
            description: "Accelerated capital appreciation potential as the property value aligns with the broader market.",
            icon: <Rocket className="w-10 h-10 text-primary" />
        }
    ];

    const timelineSteps = [
        {
            stage: "Stage 1",
            title: "Market Research",
            description: "Comprehensive analysis of local property markets and identifying areas with high potential for BMV opportunities.",
            icon: <Search className="w-6 h-6" />
        },
        {
            stage: "Stage 2",
            title: "Property Sourcing",
            description: "Accessing exclusive off-market deals and distressed properties through our extensive network of motivated sellers.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            stage: "Stage 3",
            title: "Due Diligence",
            description: "Thorough property inspection, valuation verification, and legal checks to ensure the deal is sound.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            stage: "Stage 4",
            title: "Expert Negotiation",
            description: "High-level negotiation to secure the best possible purchase price, locking in your immediate equity.",
            icon: <Gavel className="w-6 h-6" />
        }
    ];

    const faqs = [
        {
            question: "What makes a property below market value?",
            answer: "A property is considered below market value when it's purchased at a price significantly lower than its current valuation, typically due to motivated sellers, distressed situations, or off-market opportunities."
        },
        {
            question: "How do you verify the market value?",
            answer: "We conduct thorough market research, including comparable sales analysis (RICS standards), local market expertise, and professional valuations to ensure accurate market value assessment."
        },
        {
            question: "What are the typical discounts?",
            answer: "BMV properties typically offer discounts of 15-30% below market value, though this can vary based on property type, repair requirements, and the seller's timeframe."
        },
        {
            question: "How can I get started?",
            answer: "Register as an investor and book a free consultation. We'll discuss your goals and show you our current exclusive BMV opportunities."
        }
    ];

    return (
        <main className="grow bg-background">
            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/Below-Market-Value-Properties-in-UK.avif"
                    alt="Below Market Value Property Investment"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl uppercase tracking-tight max-w-4xl mx-auto">
                        Below Market Value <span className="text-primary italic">Property Investment</span>
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                    <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                        Access exclusive off-market property deals below market value and maximize your investment returns from day one.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/property-listings" className="primary-btn">
                            View Current Opportunities
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/free-consultation" className="ghost-btn !text-white !border-white/50 hover:!bg-white/20">
                            Get Investment Advice
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="flex flex-col items-start justify-start mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">What are BMV Properties?</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Below Market Value (BMV) properties are real estate investments purchased at a price significantly lower than their current market valuation.
                                </p>
                                <p className="font-medium italic text-foreground">
                                    These opportunities arise from various circumstances, including motivated sellers, distressed properties, or exclusive off-market deals.
                                </p>
                                <p>
                                    At Asancha Properties, we specialize in identifying and securing these high-value opportunities for our clients, ensuring maximum potential for capital growth and rental yield.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-muted mt-12 lg:mt-0">
                            <Image
                                src="/bg-img/consulting-legal-advisor.webp"
                                alt="Investing in BMV Properties"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Benefits of BMV Investment</span>
                        </h2>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-card p-10 rounded-[2.5rem] shadow-sm border border-border/50 hover:translate-y-[-10px] transition-all duration-300 group">
                                <div className="mb-8 p-6 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground uppercase tracking-tighter">{benefit.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <ServiceTimeline title="Our BMV Sourcing Process" steps={timelineSteps} />

            {/* Deal Analyzer Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="bg-[#04283a] rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/5">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
                                <span className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6 w-fit text-center">Exclusive Intelligence Tool</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase leading-tight">BMV Deal <br /><span className="text-primary-hover italic">Analyzer Tool</span></h2>
                                <div className="my-4 h-[3px] w-[20%] bg-white mb-8"></div>
                                <p className="text-white/70 text-lg mb-12 leading-relaxed max-w-lg">
                                    Our proprietary Deal Analyzer helps you evaluate potential property investments with institutional-grade precision.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12 border-t border-white/10 pt-12">
                                    {[
                                        { label: "ROI Calculator", desc: "Instant yield projections", icon: <Calculator className="w-5 h-5" /> },
                                        { label: "Market Analysis", desc: "Real-time local data", icon: <BarChart3 className="w-5 h-5" /> },
                                        { label: "Cost Breakdown", desc: "Full expense detailing", icon: <Receipt className="w-5 h-5" /> },
                                        { label: "BMV Score", desc: "Unique deal rating", icon: <Star className="w-5 h-5" /> }
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex gap-4 group">
                                            <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-hover group-hover:bg-primary group-hover:text-white transition-all">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm uppercase tracking-tight">{feature.label}</h4>
                                                <p className="text-white/40 text-xs">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 mt-12">
                                    <Link href="/bmv-deal-analyzer" className="primary-btn !rounded-2xl !py-5">
                                        Try the Tool
                                    </Link>
                                    <Link href="/free-consultation" className="ghost-btn !text-white !border-white/20 hover:!bg-white/10 !rounded-2xl !py-5">
                                        Expert Analysis
                                    </Link>
                                </div>
                            </div>
                            <div className="relative h-96 lg:h-auto min-h-[500px]">
                                <Image
                                    src="/bg-img/bmv-calculation.jpg"
                                    alt="BMV Analysis"
                                    fill
                                    className="object-cover opacity-60 lg:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#04283a] via-transparent to-transparent hidden lg:block" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col items-center justify-center mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                <span className="capitalize text-outline text-foreground dark:text-white">Investment FAQ</span>
                            </h2>
                            <span className="h-1 w-20 bg-primary rounded-full mb-4"></span>
                            <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Everything you need to know about BMV deals</p>
                        </div>

                        <div className="grid gap-6">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-card p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all group">
                                    <div className="flex gap-6">
                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <HelpCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight">{faq.question}</h3>
                                            <p className="text-muted-foreground leading-relaxed italic">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 relative overflow-hidden bg-[#04283a]">
                <Image
                    src="/bg-img/cta.jpg"
                    alt="Property Investment CTA"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
                            Ready to Invest in <br /><span className="text-primary-hover">BMV Properties?</span>
                        </h2>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                    </div>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium italic">
                        Contact us today to discuss your investment goals and get early access to our exclusive below market value opportunities.
                    </p>
                    <div className="flex items-center justify-center">
                        <Link href="/free-consultation" className="primary-btn !text-xl !py-6 !px-12 !rounded-2xl">
                            Book Free Consultation
                            <CheckCircle2 className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Background Decorations */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
            </section>
        </main >
    );
};

export default BMVPropertiesPage;