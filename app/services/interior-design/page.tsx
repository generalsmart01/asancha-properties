"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
    Palette,
    Layout,
    Gem,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    Search,
    PenTool,
    Lightbulb,
    Home,
    Sofa,
    Maximize,
    Wand2,
    ChefHat,
    Bath,
    Eye
} from 'lucide-react';
import { ServiceTimeline } from '@/components/common/ServiceTimeline';

const InteriorDesignPage = () => {
    const designBenefits = [
        {
            title: "Bespoke Design Solutions",
            description: "We create custom interiors tailored to your unique style, property architecture, and functional needs.",
            icon: <Palette className="w-12 h-12 text-primary" />
        },
        {
            title: "Luxury & Functional Interiors",
            description: "Striking the perfect balance between high-end elegance and day-to-day practicality.",
            icon: <Gem className="w-12 h-12 text-primary" />
        },
        {
            title: "Value-Boosting Aesthetics",
            description: "Strategic design choices that significantly enhance property value for both resale and rental markets.",
            icon: <Sparkles className="w-12 h-12 text-primary" />
        },
        {
            title: "High-Quality Craftsmanship",
            description: "Access to premium materials and a network of master craftsmen for an impeccable finish.",
            icon: <CheckCircle2 className="w-12 h-12 text-primary" />
        },
        {
            title: "Seamless Project Management",
            description: "From initial concept to final installation, we handle every detail for a stress-free experience.",
            icon: <Layout className="w-12 h-12 text-primary" />
        }
    ];

    const designServices = [
        {
            title: "Full Home Transformation",
            description: "Complete interior redesigns with a cohesive aesthetic across all living spaces.",
            icon: <Home className="w-12 h-12 text-primary" />
        },
        {
            title: "Furniture & Layout Selection",
            description: "Curation of high-quality furnishings and expert placement for flow and comfort.",
            icon: <Sofa className="w-12 h-12 text-primary" />
        },
        {
            title: "Space Optimization",
            description: "Intelligent planning to maximize the functionality and feeling of every room.",
            icon: <Maximize className="w-12 h-12 text-primary" />
        },
        {
            title: "Lighting & Color Consulting",
            description: "Setting the perfect ambiance with curated palettes and tailored lighting schemes.",
            icon: <Lightbulb className="w-12 h-12 text-primary" />
        },
        {
            title: "Wall & Custom Finishes",
            description: "Bespoke wall treatments, premium wallpapers, and unique textural finishes.",
            icon: <Wand2 className="w-12 h-12 text-primary" />
        },
        {
            title: "Kitchen & Bath Design",
            description: "Sleek, modern, and highly functional renovations for the home's key areas.",
            icon: <ChefHat className="w-12 h-12 text-primary" />
        }
    ];

    const timelineSteps = [
        {
            stage: "Stage 1",
            title: "Consultation & Vision Planning",
            description: "We dive deep into your requirements, style preferences, and budget to establish a clear project vision.",
            icon: <Search className="w-6 h-6" />
        },
        {
            stage: "Stage 2",
            title: "Concept & Mood Boards",
            description: "Visualizing the aesthetic through curated mood boards, color palettes, and material samples.",
            icon: <PenTool className="w-6 h-6" />
        },
        {
            stage: "Stage 3",
            title: "Selection & Sourcing",
            description: "Choosing the exact furnishings, fixtures, and finishes that will bring the design to life.",
            icon: <Palette className="w-6 h-6" />
        },
        {
            stage: "Stage 4",
            title: "Execution & Installation",
            description: "Hands-on project management to ensure every piece is perfectly installed and every detail is met.",
            icon: <Layout className="w-6 h-6" />
        },
        {
            stage: "Stage 5",
            title: "Final Styling & Reveal",
            description: "The finishing touches—styling and accessorizing before the final handover and grand reveal.",
            icon: <Eye className="w-6 h-6" />
        }
    ];

    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/interior-decoration.jpg"
                    alt="Luxury Interior Design"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/40" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl uppercase tracking-tight">
                        Elevate Your Space with <br className="hidden md:block" />
                        <span className="text-primary italic">Luxury</span> Interior Design
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                    <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                        Transform your property with elegant, functional, and market-ready interiors designed to enhance both comfort and capital value.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact-us#contact-form" className="primary-btn">
                            Book Free Consultation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/portfolio" className="ghost-btn text-white! border-white/50! hover:bg-white/20!">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col items-start justify-start mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">Why Choose Asancha Interior Design?</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>

                            <div className="space-y-8">
                                {designBenefits.map((benefit, idx) => (
                                    <div key={idx} className="flex gap-6 group">
                                        <div className="shrink-0 p-4 bg-primary/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed italic">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="relative p-4">
                                <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2 translate-x-4 translate-y-4" />
                                <Image
                                    src="/bg-img/interior-design.jpg"
                                    alt="Interior Design Hero"
                                    width={600}
                                    height={800}
                                    className="relative rounded-3xl shadow-2xl object-cover h-full min-h-[500px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Services Grid */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 uppercase tracking-tight italic">
                            <span className="capitalize text-outline text-foreground dark:text-white">Our Design Services</span>
                        </h2>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {designServices.map((service, idx) => (
                            <div key={idx} className="bg-card p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                                <div className="mb-8 p-5 bg-primary/5 w-fit rounded-2xl group-hover:bg-primary transition-colors">
                                    <div className="group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed italic font-medium">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <ServiceTimeline title="Our Design Process" steps={timelineSteps} />

            {/* Who Benefits */}
            <section className="py-24 bg-background overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 italic tracking-tight uppercase">
                            <span className="capitalize text-outline text-foreground dark:text-white">Who Benefits From Our Expertise?</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Homeowners", img: "/bg-img/landlord.jpg", desc: "Create a stylish, soulful, and comfortable sanctuary for you and your family." },
                            { title: "Investors", img: "/bg-img/investor.webp", desc: "Command higher rents and sale prices with strategic, market-driven design aesthetics." },
                            { title: "Luxury Owners", img: "/bg-img/short-term-rental.webp", desc: "Bespoke, high-end designs that reflect your personality and prestige." },
                            { title: "Business Spaces", img: "/bg-img/investor1.webp", desc: "Design professional, inspiring environments that boost brand and productivity." }
                        ].map((target, idx) => (
                            <div key={idx} className="group overflow-hidden rounded-[2.5rem] bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={target.img}
                                        alt={target.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                                    <h3 className="absolute bottom-8 left-8 text-2xl font-black text-white uppercase tracking-tighter">{target.title}</h3>
                                </div>
                                <div className="p-8">
                                    <p className="text-muted-foreground mb-6 leading-relaxed italic font-medium">{target.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <Link href="/contact-us#contact-form" className="primary-btn text-lg! py-5! px-12!">
                            Start Your Design Journey
                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Decoration */}
                <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            </section>
        </main>
    )
}

export default InteriorDesignPage;
