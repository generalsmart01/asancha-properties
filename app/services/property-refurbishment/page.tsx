"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
    CheckCircle2,
    ArrowRight,
    Hammer,
    Paintbrush,
    Bath,
    Wrench,
    Zap,
    ChevronRight,
    Users,
    ShieldCheck,
    Coins,
    ClipboardCheck,
    UserCircle,
    Building,
    Home,
    Briefcase
} from 'lucide-react';
import { ServiceTimeline } from '@/components/common/ServiceTimeline';

const PropertyRefurbishmentPage = () => {
    const refurbishmentServices = [
        {
            title: "Full Property Renovation",
            description: "Complete transformation for outdated homes, bringing them up to modern standards and maximizing value.",
            icon: <Home className="w-10 h-10 text-primary" />
        },
        {
            title: "Interior & Exterior Upgrades",
            description: "Enhancing curb appeal and interior design with premium finishes and modern aesthetics.",
            icon: <Paintbrush className="w-10 h-10 text-primary" />
        },
        {
            title: "Kitchen & Bathroom Remodeling",
            description: "Modern, functional, and stylish spaces designed for contemporary living.",
            icon: <Bath className="w-10 h-10 text-primary" />
        },
        {
            title: "Structural Repairs & Enhancements",
            description: "Strengthening foundations and improving layouts to optimize space and stability.",
            icon: <Hammer className="w-10 h-10 text-primary" />
        },
        {
            title: "Electrical & Plumbing Overhaul",
            description: "Ensuring safety and efficiency with complete modern system updates.",
            icon: <Zap className="w-10 h-10 text-primary" />
        }
    ];

    const whyChooseUs = [
        {
            title: "Stress-Free Refurbishment",
            description: "Our expert team handles every detail—supplier coordination, tradesmen management, and project oversight.",
            icon: <ShieldCheck className="w-6 h-6 text-primary" />
        },
        {
            title: "Budget-Friendly & Time-Efficient",
            description: "Maximizing value while keeping costs under control and sticking to strict timelines.",
            icon: <Coins className="w-6 h-6 text-primary" />
        },
        {
            title: "Boost Property Value",
            description: "Increase market price and rental yield with strategic, market-led renovations.",
            icon: <ArrowRight className="w-6 h-6 text-primary" />
        },
        {
            title: "High-Quality Workmanship",
            description: "We use premium materials and skilled professionals to ensure lasting quality.",
            icon: <CheckCircle2 className="w-6 h-6 text-primary" />
        }
    ];

    const powerTeams = [
        "Expert Solicitors", "Financial Brokers", "Chartered Accountants", "Property Managers", "RIBA Architects", "Reliable Builders"
    ];

    const timelineSteps = [
        {
            stage: "Stage 1",
            title: "Assessment & Consultation",
            description: "Evaluating the property's potential for improvement and identifying key value-add opportunities.",
            icon: <ClipboardCheck className="w-6 h-6" />
        },
        {
            stage: "Stage 2",
            title: "Design & Budget Planning",
            description: "Creating a strategy tailored to your needs and investment goals, with detailed costing.",
            icon: <Paintbrush className="w-6 h-6" />
        },
        {
            stage: "Stage 3",
            title: "Construction & Upgrades",
            description: "Implementing high-quality refurbishments with our expert power teams and trusted suppliers.",
            icon: <Hammer className="w-6 h-6" />
        },
        {
            stage: "Stage 4",
            title: "Final Inspection & Handover",
            description: "Ensuring everything meets our high standards and your specifications before final sign-off.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            stage: "Stage 5",
            title: "Post-Renovation Support",
            description: "Helping with staging, valuation, or rental setup to realize your investment returns.",
            icon: <CheckCircle2 className="w-6 h-6" />
        }
    ];

    const targets = [
        {
            title: "Homeowners",
            description: "Modernizing and improving living spaces for comfort and long-term value.",
            image: "/bg-img/landlord.jpg"
        },
        {
            title: "Real Estate Investors",
            description: "Renovating to sell or rent for maximum profit margins.",
            image: "/bg-img/investor.webp"
        },
        {
            title: "Landlords",
            description: "Upgrading properties for higher occupancy rates and premium rental yields.",
            image: "/bg-img/short-term-rental.webp"
        },
        {
            title: "Property Developers",
            description: "Expert management for large-scale renovation and development projects.",
            image: "/bg-img/investor1.webp"
        }
    ];

    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/refurbishment-image.jpg"
                    alt="Property Refurbishment"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/40" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl uppercase tracking-tight max-w-4xl mx-auto leading-tight">
                        Increase Property Value with <span className="text-primary">Expert Refurbishment</span> Solutions
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                    <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                        We transform outdated properties into modern, high-value investments with premium renovation services.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/free-consultation#consultation-form" className="primary-btn">
                            Request Free Assessment
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/property-listings" className="ghost-btn text-white! border-white/50! hover:bg-white/20!">
                            See Recent Transformations
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex flex-col items-start justify-start mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">Why Choose Asancha Refurbishment?</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>

                            <div className="space-y-8">
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/bg-img/refurbish.jpg"
                                alt="Refurbishment in progress"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-muted/30 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Our Refurbishment Services</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {refurbishmentServices.map((service, idx) => (
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

            {/* Power Teams Section */}
            <section className="py-24 bg-[#04283a] text-white overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase leading-tight">
                                    Access Our <br /><span className="text-primary-hover">Expert Power Team</span>
                                </h2>
                                <div className="my-4 h-[3px] w-[20%] bg-white mb-8"></div>
                                <p className="text-white/80 text-lg mb-12 leading-relaxed">
                                    Asancha has curated a network of industry-leading experts and trusted suppliers for every stage of your refurbishment project. From legal sign-off to architectural design.
                                </p>
                                <Link href="/contact-us#contact-form" className="primary-btn text-xl! py-5! px-10!">
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
            <ServiceTimeline title="Our Refurbishment Process" steps={timelineSteps} />

            {/* Who Can Benefit */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Who Can Benefit?</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {targets.map((target, idx) => (
                            <div key={idx} className="flex flex-col group">
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={target.image}
                                        alt={target.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{target.title}</h3>
                                        <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                            {target.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-muted/20 border-t border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xl italic text-muted-foreground mb-8 text-center">Let&apos;s bring your vision to life! 🚀</p>
                    <Link href="/free-consultation#consultation-form" className="primary-btn text-xl! py-6! px-12!">
                        Get a Free Consultation
                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default PropertyRefurbishmentPage;