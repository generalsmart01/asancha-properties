"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
    CheckCircle2,
    ArrowRight,
    Target,
    Search,
    Percent,
    BarChart3,
    Handshake,
    Building2,
    Coins,
    Layers,
    ChevronRight,
    Zap,
    Briefcase,
    Users,
    ShieldCheck
} from 'lucide-react';
import { ServiceTimeline } from '@/components/common/ServiceTimeline';

const PropertySourcingPage = () => {
    const sourcingServices = [
        {
            title: "Buy-to-Let Investments",
            description: "Generate passive income with high-occupancy rental properties sourced specifically for your portfolio goals.",
            icon: <Coins className="w-10 h-10 text-primary" />
        },
        {
            title: "Fix & Flip Properties",
            description: "Buy undervalued properties, renovate with our power team, and sell for significant profit margins.",
            icon: <Zap className="w-10 h-10 text-primary" />
        },
        {
            title: "Commercial Real Estate",
            description: "Expert sourcing for office spaces, retail units, and strategic commercial-to-residential conversions.",
            icon: <Building2 className="w-10 h-10 text-primary" />
        },
        {
            title: "Land Development",
            description: "Acquire and develop strategic land plots for high-appreciation returns and long-term growth.",
            icon: <Layers className="w-10 h-10 text-primary" />
        },
        {
            title: "Joint Venture Investments",
            description: "Partner with Asancha Properties for high-value real estate ventures and shared success.",
            icon: <Handshake className="w-10 h-10 text-primary" />
        },
        {
            title: "Portfolio Building",
            description: "Strategic planning and sourcing to scale your property portfolio efficiently and sustainably.",
            icon: <Briefcase className="w-10 h-10 text-primary" />
        }
    ];

    const whyWorkWithUs = [
        {
            title: "Exclusive Off-Market Deals",
            description: "Gain access to properties before they reach the public market through our deep network.",
            icon: <Target className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
        },
        {
            title: "Data-Driven Analysis",
            description: "We use advanced metrics to identify investments with the highest rental yields and capital growth.",
            icon: <BarChart3 className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
        },
        {
            title: "Expert Negotiation",
            description: "Our experienced team secures the best possible price and terms for every acquisition.",
            icon: <Users className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
        },
        {
            title: "End-to-End Support",
            description: "From initial search to completion, we handle the complexities of the sourcing process.",
            icon: <ShieldCheck className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
        }
    ];

    const powerTeams = [
        "Expert Solicitors", "Financial Brokers", "Chartered Accountants", "Property Managers", "RIBA Architects", "Reliable Builders"
    ];

    const timelineSteps = [
        {
            stage: "Stage 1",
            title: "Consultation & Strategy",
            description: "We deep-dive into your investment goals, budget, and risk appetite to create a bespoke sourcing plan.",
            icon: <Search className="w-6 h-6" />
        },
        {
            stage: "Stage 2",
            title: "Property Identification",
            description: "Our team leverages off-market networks to find properties that precisely match your strategy.",
            icon: <Building2 className="w-6 h-6" />
        },
        {
            stage: "Stage 3",
            title: "Due Diligence & Analysis",
            description: "Rigorous evaluation of rental yields, demand, refurbishment costs, and exit strategies.",
            icon: <BarChart3 className="w-6 h-6" />
        },
        {
            stage: "Stage 4",
            title: "Offer & Negotiation",
            description: "We represent you in negotiations, using market data to secure the best deal and favorable terms.",
            icon: <Handshake className="w-6 h-6" />
        },
        {
            stage: "Stage 5",
            title: "Transaction & Completion",
            description: "Direct support through the legal and financial process to ensure a smooth transition to ownership.",
            icon: <CheckCircle2 className="w-6 h-6" />
        }
    ];

    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/property-sourcing.jpg"
                    alt="Property Sourcing"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl uppercase tracking-tight">
                        Find High-Yield <span className="text-primary">Property Deals</span> <br className="hidden md:block" />
                        Before Anyone Else
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                    <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                        We source exclusive off-market properties with high returns for investors, landlords, and first-time buyers.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/property-listings" className="primary-btn">
                            View Available Properties
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/free-consultation#consultation-form" className="ghost-btn !text-white !border-white/50 hover:!bg-white/20">
                            Book a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Property Types We Work With */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Property Sectors We Cover</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>
                    <p className="text-muted-foreground text-center text-lg max-w-3xl mx-auto mb-12 leading-relaxed">We maintain a diverse network of opportunities across multiple real estate sectors.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Residential', desc: 'Single lets, HMOs, and residential blocks.' },
                            { title: 'Commercial', desc: 'Retail, office, and industrial opportunities.' },
                            { title: 'Investment', desc: 'BMV deals and high-yield portfolio additions.' }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-10 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 text-center border-b-4 border-b-transparent hover:border-b-primary">
                                <h3 className="text-2xl font-black text-foreground uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Can Source */}
            <section className="py-24 bg-muted/30 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Our Sourcing Capabilities</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sourcingServices.map((service, idx) => (
                            <div key={idx} className="bg-card p-10 rounded-3xl shadow-sm border border-border/50 flex flex-col items-center text-center hover:translate-y-[-8px] transition-all duration-300 group">
                                <div className="mb-8 p-6 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Accents */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
            </section>

            {/* Why Work With Us */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Why Partner With Us?</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {whyWorkWithUs.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="mb-8 p-6 bg-accent rounded-3xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Power Teams Section */}
            <section className="py-24 bg-[#04283a] text-white overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase leading-tight">
                                    Access Our <br /><span className="text-primary-hover">Elite Power Team</span>
                                </h2>
                                <div className="my-4 h-[3px] w-[20%] bg-white mb-8"></div>
                                <p className="text-white/80 text-lg mb-12 leading-relaxed">
                                    Asancha has curated a network of industry-leading experts and trusted partners to support every stage of your investment journey. You don't just get a property; you get a complete infrastructure.
                                </p>
                                <Link href="/contact-us#contact-form" className="primary-btn !text-xl !py-5 !px-10">
                                    Register as an investor
                                    <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {powerTeams.map((team, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                                            <CheckCircle2 className="text-primary w-5 h-5 group-hover:text-white" />
                                        </div>
                                        <span className="font-bold tracking-wide">{team}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
            </section>

            {/* How It Works - Timeline */}
            <ServiceTimeline title="Our Sourcing Process" steps={timelineSteps} />

            {/* Final CTA */}
            <section className="py-24 bg-muted/20 border-t border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Start Building Your Future Today</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>
                    <Link href="/property-listings" className="primary-btn !text-lg !py-6 !px-12">
                        Enter the properties
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    );
};


export default PropertySourcingPage;