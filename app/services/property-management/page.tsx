"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
    CheckCircle2,
    ArrowRight,
    Search,
    BarChart3,
    Handshake,
    Building2,
    Home,
    ShieldCheck,
    Wallet,
    Wrench,
    FileText,
    Users,
    ClipboardCheck,
    Briefcase,
    Zap
} from 'lucide-react';
import { ServiceTimeline } from '@/components/common/ServiceTimeline';

const PropertyManagementPage = () => {
    const managementServices = [
        {
            title: "Full-Service Management",
            description: "We handle all aspects of managing your rental property, from tenant acquisition to daily operations.",
            icon: <Briefcase className="w-10 h-10 text-primary" />
        },
        {
            title: "Financial Reporting",
            description: "Get detailed reports on your property's performance, ROI analysis, and transparent accounting.",
            icon: <BarChart3 className="w-10 h-10 text-primary" />
        },
        {
            title: "Flexible Rental Management",
            description: "Solutions for both short-term (Airbnb) and long-term rental strategies tailored to your needs.",
            icon: <Home className="w-10 h-10 text-primary" />
        },
        {
            title: "24/7 Maintenance Support",
            description: "Emergency maintenance and routine repairs managed by our trusted network of contractors.",
            icon: <Zap className="w-10 h-10 text-primary" />
        }
    ];

    const managementBenefits = [
        {
            title: "Tenant Sourcing & Screening",
            description: "Finding reliable tenants through rigorous background and credit checks.",
            icon: <Users className="w-12 h-12 text-primary" />
        },
        {
            title: "Rent Collection",
            description: "Hassle-free financial management with guaranteed on-time payment systems.",
            icon: <Wallet className="w-12 h-12 text-primary" />
        },
        {
            title: "Maintenance & Repairs",
            description: "Coordinating with expert vendors for efficient property upkeep.",
            icon: <Wrench className="w-12 h-12 text-primary" />
        },
        {
            title: "Legal Compliance",
            description: "Ensuring your property meets all current housing laws and safety regulations.",
            icon: <FileText className="w-12 h-12 text-primary" />
        },
        {
            title: "Performance Inspections",
            description: "Regular on-site inspections and detailed property health reports.",
            icon: <ClipboardCheck className="w-12 h-12 text-primary" />
        }
    ];

    const timelineSteps = [
        {
            stage: "Stage 1",
            title: "Evaluation & Pricing",
            description: "We conduct a thorough market analysis to set the optimal rental price for your asset.",
            icon: <Search className="w-6 h-6" />
        },
        {
            stage: "Stage 2",
            title: "Marketing & Screening",
            description: "Strategic advertising across major platforms and vetting of premium quality tenants.",
            icon: <Users className="w-6 h-6" />
        },
        {
            stage: "Stage 3",
            title: "Leasing & Collection",
            description: "Execution of legally binding contracts, deposit protection, and automated rent systems.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            stage: "Stage 4",
            title: "Maintenance & Care",
            description: "Ongoing proactive maintenance and rapid response to any tenant requirements.",
            icon: <Wrench className="w-6 h-6" />
        },
        {
            stage: "Stage 5",
            title: "Strategic Monitoring",
            description: "Monthly reviews and strategic adjustments to ensure long-term ROI and property protection.",
            icon: <BarChart3 className="w-6 h-6" />
        }
    ];

    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/property-management.jpg"
                    alt="Property Management"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl uppercase tracking-tight">
                        Stress-Free <span className="text-primary">Property Management</span> <br className="hidden md:block" />
                        Maximize Your Rental Income
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                    <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                        We handle everything from tenant sourcing to legal compliance, ensuring your investment stays profitable and protected.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact-us#contact-form" className="primary-btn">
                            Property Assessment
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="tel:+447404799254" className="ghost-btn text-white! border-white/50! hover:bg-white/20!">
                            Manager: +44 7404 799254
                        </a>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col items-start justify-start mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">Why Choose Asancha Property Management?</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>

                            <div className="space-y-8">
                                {managementBenefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="shrink-0 p-4 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative p-4">
                                <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 translate-x-4 translate-y-4" />
                                <Image
                                    src="/bg-img/management.jpg"
                                    alt="Management Team"
                                    width={600}
                                    height={800}
                                    className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] lg:aspect-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="py-24 bg-muted/30 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 capitalize">
                            <span className="capitalize text-outline text-foreground dark:text-white">Our Management Services</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {managementServices.map((service, idx) => (
                            <div key={idx} className="bg-card p-10 rounded-3xl shadow-sm border border-border/50 flex flex-col items-center text-center hover:translate-y-[-8px] transition-all duration-300 group">
                                <div className="mb-8 p-6 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - Timeline */}
            <ServiceTimeline title="How Our Management Works" steps={timelineSteps} />

            {/* Who Benefits */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Who Benefits From Our Services?</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Landlords", img: "/bg-img/landlord.jpg", desc: "Seeking stress-free property oversight and reliable rental income." },
                            { title: "Investors", img: "/bg-img/investor.webp", desc: "Looking for a fully managed, hands-off approach to real estate." },
                            { title: "Rental Owners", img: "/bg-img/short-term-rental.webp", desc: "Needing Airbnb or vacation rental management expertise." },
                            { title: "Corporations", img: "/bg-img/investor1.webp", desc: "Managing multiple residential or commercial units at scale." }
                        ].map((target, idx) => (
                            <div key={idx} className="group overflow-hidden rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={target.img}
                                        alt={target.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white uppercase tracking-wider">{target.title}</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-muted-foreground mb-6 leading-relaxed">{target.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link href="/contact-us#contact-form" className="primary-btn text-lg! py-5! px-10!">
                            Get Started Today
                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="flex flex-col items-center justify-center mb-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
                            Protect Your Asset. <span className="text-primary">Protect Your Time.</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                        Join hundreds of satisfied property owners who trust Asancha for professional management across the UK.
                    </p>
                    <Link href="/free-consultation" className="primary-btn bg-white! text-black! hover:bg-primary! hover:text-white! px-12! py-5!">
                        Book Consultation
                    </Link>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
            </section>
        </main>
    )
}

export default PropertyManagementPage;
