"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
    Target,
    Zap,
    LineChart,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Search,
    BookOpen,
    TrendingUp,
    Users,
    Scale,
    Hammer,
    PiggyBank
} from 'lucide-react';
import { ServiceTimeline } from '@/components/common/ServiceTimeline';

const PropertyInvestmentPage = () => {
    const investmentBenefits = [
        {
            title: "High-Yield Property Investments",
            description: "Maximize ROI with carefully selected real estate opportunities focused on capital growth or rental yield.",
            icon: <TrendingUp className="w-12 h-12 text-primary" />
        },
        {
            title: "Exclusive Off-Market Deals",
            description: "Gain access to lucrative properties before they hit the market through our extensive sourcing network.",
            icon: <Zap className="w-12 h-12 text-primary" />
        },
        {
            title: "Data-Driven Market Analysis",
            description: "In-depth research and stress-testing to ensure your capital is deployed in high-performing areas.",
            icon: <LineChart className="w-12 h-12 text-primary" />
        },
        {
            title: "Financial & Legal Guidance",
            description: "Expert assistance with creative financing, legal processes, and proactive risk management.",
            icon: <ShieldCheck className="w-12 h-12 text-primary" />
        },
        {
            title: "Long-Term Wealth Growth",
            description: "Build a sustainable property portfolio with a clear exit strategy and strategic compounding.",
            icon: <Target className="w-12 h-12 text-primary" />
        }
    ];

    const educationModules = [
        "Step by step flip guide",
        "Legal & Conveyancing Process",
        "Rigorous Deal Assessment",
        "Bridging & Development Finance",
        "Schedule of Works & Timing",
        "Interpreting Builder Quotes",
        "Project Management Best Practices",
        "Selecting Sales/Rental Agencies",
        "The Exit Strategy & Sale Process",
        "Refinancing & Capital Recycling"
    ];

    const powerTeams = [
        "Lawyers & Solicitors",
        "Financial Brokers",
        "Specialist Accountants",
        "Property Managers",
        "Architects & Surveyors",
        "Trusted Builders & Contractors"
    ];

    const timelineSteps = [
        {
            stage: "Stage 1",
            title: "Investment Consultation",
            description: "We analyze your investment goals, risk tolerance, and capital requirements in a 1-to-1 session.",
            icon: <Users className="w-6 h-6" />
        },
        {
            stage: "Stage 2",
            title: "Research & Selection",
            description: "Identifying properties that match your criteria, performing site visits, and data validation.",
            icon: <Search className="w-6 h-6" />
        },
        {
            stage: "Stage 3",
            title: "Structuring & Due Diligence",
            description: "Handling the legal paperwork, creative financing setups, and deep-dive surveys.",
            icon: <Scale className="w-6 h-6" />
        },
        {
            stage: "Stage 4",
            title: "Acquisition & Value-Add",
            description: "Securing the property and initiating any refurbishment or planning strategies to boost value.",
            icon: <Hammer className="w-6 h-6" />
        },
        {
            stage: "Stage 5",
            title: "Performance Monitoring",
            description: "Ongoing management, monthly yield reporting, and strategic advice on when to flip or refi.",
            icon: <LineChart className="w-6 h-6" />
        }
    ];

    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/investment-property.jpg"
                    alt="Property Investment"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/40" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl uppercase tracking-tight">
                        Secure <span className="text-primary">High-Yield</span> <br className="hidden md:block" />
                        Real Estate Investments
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                    <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                        Expert guidance to help you identify, acquire, and maximize returns on high-performing property assets across the UK.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/property-listings" className="primary-btn">
                            Explore Opportunities
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/contact-us#contact-form" className="ghost-btn text-white! border-white/50! hover:bg-white/20!">
                            Get Expert Advice
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Invest Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col items-start justify-start mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">Why Invest with Asancha Properties?</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>

                            <div className="space-y-8">
                                {investmentBenefits.map((benefit, idx) => (
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
                                    src="/bg-img/investment.jpg"
                                    alt="Investment Success"
                                    width={600}
                                    height={800}
                                    className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] lg:aspect-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Invest Earn Learn */}
            <section className="py-24 bg-black text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase italic tracking-tighter">
                            Invest. Earn. Learn.
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="flex items-center gap-8 group">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary/20 transition-all">
                                    <PiggyBank className="w-12 h-12 text-primary" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Invest <span className="text-primary tracking-normal">£20,000</span></h3>
                            </div>
                            <div className="flex items-center gap-8 group">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary/20 transition-all">
                                    <TrendingUp className="w-12 h-12 text-primary" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Earn <span className="text-primary tracking-normal">10% Interest</span></h3>
                            </div>
                            <div className="flex items-center gap-8 group">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary/20 transition-all">
                                    <BookOpen className="w-12 h-12 text-primary" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-widest">Learn for <span className="text-primary tracking-normal">12 Months</span></h3>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-2xl font-black mb-8 border-b border-primary pb-4 inline-block">Free Education on Flip Projects</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {educationModules.map((module, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white/80 group/li">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover/li:scale-110 transition-transform" />
                                        <span className="text-sm font-medium">{module}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12 text-center">
                                <Link href="/contact-us#contact-form" className="primary-btn w-full">
                                    Register as an Investor
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
            </section>

            {/* Product Selector Graphic */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-card rounded-[3rem] p-12 md:p-20 shadow-2xl border border-border/50 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex flex-col items-center justify-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 uppercase tracking-tight">
                                    <span className="capitalize text-outline text-foreground dark:text-white">Investment Products to Suit Your Goals</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>

                            <div className="relative mb-12 transform hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src="/bg-img/investment-graphic.png"
                                    alt="Investment Product Matrix"
                                    width={1000}
                                    height={400}
                                    className="rounded-2xl"
                                />
                            </div>

                            <Link href="/contact-us#contact-form" className="primary-btn text-lg! py-5! px-10!">
                                Get Started Today
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Power Teams */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 uppercase tracking-tight">
                            Expert Power Teams
                        </h2>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                    </div>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto italic font-medium">
                        Asancha provides access to a hand-picked network of trusted professionals for every stage of your investment journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {powerTeams.map((team, idx) => (
                        <div key={idx} className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-primary/50 transition-all">
                            <span className="text-xl font-bold group-hover:text-primary transition-colors uppercase tracking-tight">{team}</span>
                            <CheckCircle2 className="w-8 h-8 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works - Timeline */}
            <ServiceTimeline title="Our Investment Process" steps={timelineSteps} />

            {/* Who Benefits */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 italic tracking-tight">
                            <span className="capitalize text-outline text-foreground dark:text-white">Who Benefits From Our Expertise?</span>
                        </h2>
                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "First-Timers", img: "/bg-img/landlord.jpg", desc: "Expert guidance for your very first real estate asset acquisition." },
                            { title: "Seasoned Pro", img: "/bg-img/investor.webp", desc: "Strategic tools to help you expand and diversify your existing portfolio." },
                            { title: "HNW Individuals", img: "/bg-img/individual-invests.jpg", desc: "Bespoke, high-yield strategies for capital preservation and growth." },
                            { title: "Real Estate Funds", img: "/bg-img/investor1.webp", desc: "Scaling large-scale, income-generating residential & commercial units." }
                        ].map((target, idx) => (
                            <div key={idx} className="group overflow-hidden rounded-[2rem] bg-card border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={target.img}
                                        alt={target.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                    <h3 className="absolute bottom-6 left-8 text-2xl font-black text-white uppercase tracking-tighter">{target.title}</h3>
                                </div>
                                <div className="p-8">
                                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base italic">{target.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link href="/contact-us#contact-form" className="primary-btn text-lg! py-5! px-12!">
                            Start Investing Today
                            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default PropertyInvestmentPage;