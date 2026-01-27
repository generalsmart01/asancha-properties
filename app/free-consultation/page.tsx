"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Phone,
    Mail,
    MapPin,
    Globe,
    CheckCircle2,
    ArrowRight,
    Clock,
    Calendar,
    MessageSquare,
    Target,
    BarChart3,
    ShieldCheck,
    Coins,
    Gem,
    Users
} from 'lucide-react';
import { toast } from 'sonner';

const FreeConsultationPage = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        toast.success("Consultation request sent!", {
            description: "We'll be in touch with you shortly to schedule your session."
        });
        setLoading(false);
        (e.target as HTMLFormElement).reset();
    };

    const benefits = [
        {
            title: "Personalized Advice",
            description: "Get expert insights tailored precisely to your property goals and financial situation.",
            icon: <Users className="w-6 h-6 text-primary" />
        },
        {
            title: "Exclusive Insights",
            description: "Gain access to off-market deals and high-yield investment opportunities not found elsewhere.",
            icon: <Gem className="w-6 h-6 text-primary" />
        },
        {
            title: "100% Free - No Catch",
            description: "No hidden costs or commitments. Just valuable, professional guidance for your journey.",
            icon: <Coins className="w-6 h-6 text-primary" />
        },
        {
            title: "End-to-End Support",
            description: "Whether buying, selling, or renovating, we provide the complete roadmap for success.",
            icon: <ShieldCheck className="w-6 h-6 text-primary" />
        }
    ];

    const expectations = [
        {
            title: "Market Insights",
            description: "Learn about trends and specific opportunities in your preferred UK locations.",
            icon: <BarChart3 className="w-10 h-10 text-primary" />
        },
        {
            title: "Investment Strategies",
            description: "Direct guidance on rental yields, capital growth, and risk mitigation techniques.",
            icon: <Target className="w-10 h-10 text-primary" />
        },
        {
            title: "Management Solutions",
            description: "Explore hassle-free ways to handle tenants and maintain consistent rental income.",
            icon: <ShieldCheck className="w-10 h-10 text-primary" />
        },
        {
            title: "Refurbishment ROI",
            description: "Identify cost-effective renovations that maximize your property's market value.",
            icon: <HammerIcon className="w-10 h-10 text-primary" />
        }
    ];

    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/consultation.jpeg"
                    alt="Free Consultation"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight drop-shadow-2xl max-w-5xl mx-auto">
                        Secure High-Yield <span className="text-primary">Real Estate Investments</span>
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                    <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                        Expert guidance to help you identify, acquire, and maximize returns on high-performing property assets.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="#consultation-form" className="primary-btn">
                            Book Your Free Session
                            <Calendar className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </Link>
                        <a href="tel:+447404799254" className="ghost-btn !text-white !border-white/50 hover:!bg-white/20">
                            <Phone className="mr-2 w-4 h-4" />
                            Speak to an Expert
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Book Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="">
                        <div>
                            <div className="flex flex-col items-start justify-start mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">Why Book a Free Consultation?</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>
                            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                                Our consultation sessions are designed to provide immediate value. We slice through the noise to give you the data you actually need to make progress.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex gap-6 p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/50 transition-colors shadow-sm group">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-foreground uppercase tracking-wide group-hover:text-primary transition-colors">{benefit.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)] relative z-10 border border-border/50 translate-x-4">
                            <Image
                                src="/bg-img/short-term.jpg"
                                alt="Professional consultation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-1/2 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/20 rounded-full blur-[80px] -z-10" />
                    </div>
                </div>
            </section>

            {/* Expectations Section */}
            <section className="py-24 bg-muted/40 relative overflow-hidden px-4">
                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">What to Expect</span>
                        </h2>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        No sales pitches. Just actionable property intelligence and strategic planning.
                    </p>
                </div>

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
                        {expectations.map((item, idx) => (
                            <div key={idx} className="bg-card p-10 rounded-[2rem] shadow-sm border border-border/50 flex flex-col items-center text-center hover:translate-y-[-10px] transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5">
                                <div className="mb-10 p-7 bg-primary/5 rounded-[1.5rem] group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-primary/30">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black mb-4 text-foreground uppercase tracking-widest">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </section>

            {/* Contact & Form Section */}
            <section id="consultation-form" className="py-24 bg-background px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Sidebar Info */}
                        <div className="lg:col-span-5 flex flex-col gap-12">
                            <div>
                                <div className="flex flex-col items-start justify-start mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                                        <span className="capitalize text-outline text-foreground dark:text-white text-left">Get In Touch Directly</span>
                                    </h2>
                                    <span className="h-1 w-20 bg-primary rounded-full"></span>
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Prefer immediate contact? Use any of the channels below to reach our specialists. We're available 9 AM - 6 PM on weekdays.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all group shadow-sm">
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">Direct Call</span>
                                        <a href="tel:+447404799254" className="text-xl font-black tracking-tight hover:text-primary transition-colors">+44 7404 799254</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all group shadow-sm">
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">Send Email</span>
                                        <a href="mailto:info@asancha.com" className="text-xl font-black tracking-tight hover:text-primary transition-colors">info@asancha.co.uk</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all group shadow-sm">
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">Our Office</span>
                                        <span className="text-lg font-bold leading-tight">28 Bedford Road, Rushden,<br />Northamptonshire, NN10 0NB</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Consultation Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] border border-border/50 relative overflow-hidden">
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                            <input id="name" placeholder="Name" className="w-full h-14 px-4 bg-muted/30 border-none rounded-xl focus:ring-1 focus:ring-primary shadow-inner outline-none transition-all placeholder:text-muted-foreground/50" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                                            <input id="phone" type="tel" placeholder="Phone" className="w-full h-14 px-4 bg-muted/30 border-none rounded-xl focus:ring-1 focus:ring-primary shadow-inner outline-none transition-all placeholder:text-muted-foreground/50" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                        <input id="email" type="email" placeholder="Email" className="w-full h-14 px-4 bg-muted/30 border-none rounded-xl focus:ring-1 focus:ring-primary shadow-inner outline-none transition-all placeholder:text-muted-foreground/50" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Primary Interest</label>
                                        <select
                                            id="service"
                                            className="w-full h-14 bg-muted/30 border-none rounded-xl px-4 text-sm focus:ring-1 focus:ring-primary shadow-inner outline-none transition-all appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="">Select Service...</option>
                                            <option value="sourcing">Property Sourcing</option>
                                            <option value="management">Property Management</option>
                                            <option value="investment">Property Investment</option>
                                            <option value="refurbishment">Property Refurbishment</option>
                                            <option value="design">Interior Design</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Requirements</label>
                                        <textarea id="message" placeholder="Briefly describe your goals..." className="w-full min-h-[140px] bg-muted/30 border-none rounded-2xl focus:ring-1 focus:ring-primary shadow-inner p-4 outline-none transition-all placeholder:text-muted-foreground/50" required></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="primary-btn w-full !h-16 !rounded-xl !text-lg shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                                    >
                                        {loading ? "Transmitting..." : "Book My Free Session"}
                                        {!loading && <ArrowRight className="ml-3 w-6 h-6" />}
                                    </button>
                                </form>
                                {/* Form decorative bg */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-16 translate-x-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
};

// Simple local component for Hammer icon as lucide doesn't have it under that exact name in some versions
const HammerIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
        <path d="M17.64 15 22 10.64" />
        <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.52.82c.42.66.46 1.5.12 2.2l-.7 1.4c-.34.7-.3 1.53.12 2.2l.52.82h3.07a5.56 5.56 0 0 0 3.94-1.64l2.72-2.72v.86c0 .85.33 1.65.93 2.25l1.25 1.25" />
    </svg>
);

export default FreeConsultationPage;