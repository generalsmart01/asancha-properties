import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    MapPin, Bed, Bath, Move, Calendar, ShieldCheck,
    CheckCircle2, Phone, Mail, MessageSquare,
    Facebook, Instagram, Linkedin, Heart, Share2,
    ChevronLeft, ChevronRight, Star, Building2,
    ArrowRight
} from 'lucide-react';
import data from '@/data/mock-data.json';
import ReturnsCalculator from '@/components/property/ReturnsCalculator';
import PropertyActions from '@/components/property/PropertyActions';
import PropertyImageSlider from '@/components/property/PropertyImageSlider';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return data.properties.map((property) => ({
        slug: property.slug,
    }));
}

const SinglePropertyPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const property = data.properties.find((p) => p.slug === slug);

    if (!property) {
        notFound();
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <main className="grow bg-background">
            {/* ##### Property Hero Section & Images ##### */}
            <section className="container mx-auto px-4 py-8">
                <PropertyImageSlider images={property.images} title={property.title}>
                    {/* Hero Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none rounded-4xl" />

                    <div className="absolute bottom-0 left-0 right-0 py-12 pointer-events-none">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl pointer-events-auto">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                                        {property.status}
                                    </span>
                                    <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/20">
                                        {property.propertyType}
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight uppercase drop-shadow-2xl">
                                    {property.title}
                                </h1>
                                <div className="flex items-center gap-2 text-white/80 text-lg uppercase tracking-wider font-medium">
                                    <MapPin size={20} className="text-primary shrink-0" />
                                    {property.address}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-8 right-8 flex gap-3 pointer-events-auto z-20">
                        <button className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all duration-300">
                            <Heart size={20} />
                        </button>
                        <button className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all duration-300">
                            <Share2 size={20} />
                        </button>
                    </div>
                </PropertyImageSlider>
            </section>

            {/* ##### Property Content ##### */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content (Left) */}
                        <div className="lg:col-span-8">
                            {/* Stats Bar */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-card rounded-[2.5rem] shadow-xl border border-border/50 mb-12">
                                <div className="flex flex-col items-center justify-center text-center gap-2">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-1">
                                        <Bed size={24} />
                                    </div>
                                    <span className="text-2xl font-black text-foreground">{property.bedrooms}</span>
                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Bedrooms</span>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center gap-2 border-l border-border">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-1">
                                        <Bath size={24} />
                                    </div>
                                    <span className="text-2xl font-black text-foreground">{property.bathrooms}</span>
                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Bathrooms</span>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center gap-2 border-l border-border">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-1">
                                        <Move size={24} />
                                    </div>
                                    <span className="text-2xl font-black text-foreground">{property.sqft}</span>
                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Sq Ft</span>
                                </div>
                                <div className="flex flex-col items-center justify-center text-center gap-2 border-l border-border">
                                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-1">
                                        <Calendar size={24} />
                                    </div>
                                    <span className="text-2xl font-black text-foreground">{property.yearBuilt}</span>
                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Year Built</span>
                                </div>
                            </div>

                            {/* Property Information Table */}
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <h2 className="text-2xl font-bold text-foreground">Property Information</h2>
                                    <span className="h-1 flex-grow bg-border rounded-full"></span>
                                </div>
                                <div className="bg-card rounded-3xl border border-border/50 overflow-hidden">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        {[
                                            { label: "Type", value: property.propertyType },
                                            { label: "Bedrooms", value: property.bedrooms },
                                            { label: "Tenure", value: property.tenure || "N/A" },
                                            { label: "Strategy", value: property.strategy || "N/A" },
                                            { label: "Asking Price", value: formatPrice(property.price) },
                                            { label: "Zoopla Valuation", value: property.zooplaValuation ? formatPrice(property.zooplaValuation) : "N/A" },
                                            { label: "Occupancy", value: property.occupancy || "N/A" },
                                            { label: "Gross Yield", value: property.grossYield ? `${property.grossYield}%` : "N/A" },
                                            { label: "Current Rent", value: property.rentalIncome ? formatPrice(property.rentalIncome) : "N/A" },
                                            { label: "Market Rent", value: property.marketRent ? formatPrice(property.marketRent) : property.rentalIncome ? formatPrice(property.rentalIncome) : "N/A" },
                                            { label: "Size", value: `${property.sqft} Sq. Ft.` },
                                            { label: "EPC", value: property.epc || "N/A" },
                                            { label: "Flood Risk", value: property.floodRisk || "N/A" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between p-4 border-b border-r border-border/50 last:border-b-0">
                                                <span className="text-sm font-semibold text-muted-foreground">{item.label}</span>
                                                <span className="text-sm font-bold text-foreground text-right">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-8 mb-16">
                                <div className="flex flex-col items-start justify-start mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-4">
                                        <Building2 className="text-primary" size={32} />
                                        <span className="capitalize text-outline text-foreground dark:text-white text-left">Description</span>
                                    </h2>
                                    <span className="h-1 w-24 bg-primary rounded-full"></span>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-8">
                                    {property.description}
                                </p>
                            </div>

                            {/* Property Financial Information */}
                            {property.financials && (
                                <div className="mb-16">
                                    <div className="flex items-center gap-4 mb-6">
                                        <h2 className="text-2xl font-bold text-foreground">Property Financial Information</h2>
                                        <span className="h-1 flex-grow bg-border rounded-full"></span>
                                    </div>
                                    <div className="bg-card rounded-3xl border border-border/50 overflow-hidden">
                                        <div className="space-y-1">
                                            {[
                                                { label: "Purchase Price", value: formatPrice(property.price) },
                                                { label: "Deposit", value: formatPrice(property.financials.deposit) },
                                                { label: "Brokerage (1% of borrowing)", value: formatPrice(property.financials.brokerage) },
                                                { label: "Stamp Duty", value: formatPrice(property.financials.stampDuty) },
                                                { label: "Total investment", value: formatPrice(property.totalInvestment || 0), highlight: true },
                                                { label: "Market Rent", value: formatPrice(property.marketRent || property.rentalIncome || 0) },
                                                { label: "Mortgage", value: formatPrice(property.financials.mortgage) },
                                                { label: "Net cashflow", value: formatPrice(property.netCashflow || 0), textGreen: true },
                                                { label: "Net annual cashflow", value: formatPrice(property.financials.netAnnualCashflow), textGreen: true, bold: true },
                                            ].map((item, i) => (
                                                <div key={i} className={`flex justify-between p-4 ${i % 2 === 0 ? 'bg-muted/30' : 'bg-transparent'} ${item.highlight ? 'bg-primary/5 border-l-4 border-primary' : ''}`}>
                                                    <span className="text-sm font-semibold text-muted-foreground">{item.label}</span>
                                                    <span className={`text-sm font-bold ${item.textGreen ? 'text-green-600 dark:text-green-400' : 'text-foreground'} ${item.bold ? 'text-lg' : ''}`}>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            <div className="space-y-12 mb-20">
                                <div className="flex flex-col items-start justify-start mb-12">
                                    <div className="flex items-center gap-4 mb-4">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                                            <span className="capitalize text-outline text-foreground dark:text-white text-left">Key Features</span>
                                        </h2>
                                        <div className="h-px grow bg-border"></div>
                                    </div>
                                    <span className="h-1 w-24 bg-primary rounded-full"></span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {property.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4 group">
                                            <div className="h-8 w-8 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-foreground font-bold italic tracking-wide group-hover:text-primary transition-colors">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Nearby Section */}
                            <div className="space-y-12 pb-12">
                                <div className="flex flex-col items-start justify-start mb-12">
                                    <div className="flex items-center gap-4 mb-4">
                                        <h2 className="text-2xl font-bold text-foreground">
                                            <span className="capitalize text-outline text-foreground dark:text-white text-left">Location</span>
                                        </h2>
                                        <div className="h-px grow bg-border"></div>
                                    </div>
                                    <span className="h-1 w-20 bg-primary rounded-full"></span>
                                </div>

                                {/* Schools & Stations */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-card p-6 rounded-3xl border border-border/50">
                                        <h3 className="text-lg font-black text-foreground uppercase tracking-tight mb-6 flex items-center gap-2">
                                            <Move className="text-primary" size={20} />
                                            Nearest Stations
                                        </h3>
                                        <div className="space-y-4">
                                            {property.transport && property.transport.length > 0 ? (
                                                property.transport.map((item, idx) => (
                                                    <div key={idx} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                                                        <span className="text-sm font-medium text-foreground">{item.name}</span>
                                                        <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md">{item.distance}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-muted-foreground text-sm italic">- - -</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="bg-card p-6 rounded-3xl border border-border/50">
                                        <h3 className="text-lg font-black text-foreground uppercase tracking-tight mb-6 flex items-center gap-2">
                                            <Building2 className="text-primary" size={20} />
                                            Nearest Schools
                                        </h3>
                                        <div className="space-y-4">
                                            {property.schools && property.schools.length > 0 ? (
                                                property.schools.map((item, idx) => (
                                                    <div key={idx} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                                                        <span className="text-sm font-medium text-foreground">{item.name}</span>
                                                        <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md">{item.distance}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-muted-foreground text-sm italic">- - -</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar (Right) */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 space-y-8">
                                {/* Action Buttons - Using PropertyActions Component */}
                                <PropertyActions property={property} />

                                {/* Price Card */}
                                <div className="bg-card p-8 rounded-[2.5rem] shadow-2xl border border-border/50 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full -mr-16 -mt-16" />

                                    <div className="relative z-10">
                                        <div className="mb-6">
                                            <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em] block mb-2 leading-none">Property Price</span>
                                            <h2 className="text-4xl font-black text-primary tracking-tighter leading-none">
                                                {formatPrice(property.price)}
                                            </h2>
                                        </div>

                                        <Link
                                            href={`https://wa.me/+4407404799254?text=Hi, I am interested in ${property.title}`}
                                            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 transition-all duration-300"
                                        >
                                            <MessageSquare size={20} />
                                            WhatsApp
                                        </Link>
                                    </div>
                                </div>

                                {/* Returns Calculator */}
                                <ReturnsCalculator initialPrice={property.price} />

                                {/* Agent Card */}
                                <div className="bg-card p-8 rounded-[2.5rem] shadow-xl border border-border/50">
                                    <h3 className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em] mb-8 text-center leading-none">Listed By</h3>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-primary/20 mb-6 drop-shadow-2xl">
                                            <Image
                                                src={property.agent.avatar || "/img/core-img/avatar.png"}
                                                alt={property.agent.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h4 className="text-xl font-black text-foreground uppercase tracking-tight mb-2 leading-none">{property.agent.name}</h4>
                                        <div className="flex items-center gap-1 text-primary mb-4">
                                            <Star size={14} fill="currentColor" />
                                            <span className="text-sm font-black italic">{property.agent.rating} <span className="text-muted-foreground font-black uppercase text-[10px] ml-1">({property.agent.reviews})</span></span>
                                        </div>
                                        <div className="flex gap-4 w-full">
                                            <button className="flex-1 h-12 rounded-xl bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors flex items-center justify-center border border-transparent hover:border-primary/20">
                                                <Phone size={18} />
                                            </button>
                                            <button className="flex-1 h-12 rounded-xl bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors flex items-center justify-center border border-transparent hover:border-primary/20">
                                                <Mail size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main >
    );
};

export default SinglePropertyPage;
