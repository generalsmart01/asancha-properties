import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Trophy, Target, Eye } from 'lucide-react';

const AboutUsPage = () => {
    return (
        <main className="flex-grow">
            {/* ##### Breadcrumb Area Start ##### */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-img/about-us.jpg"
                        alt="About Us Background"
                        fill
                        className="object-cover object-top brightness-50"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight drop-shadow-2xl">About Us</h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                    <p className="pb-8 text-center text-xl font-normal text-white max-w-3xl mx-auto">
                        Learn about our mission, values, and the expert team behind Asancha Properties.
                    </p>
                </div>
            </section>
            {/* ##### Breadcrumb Area End ##### */}

            {/* ##### About Content Wrapper Start ##### */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Who We Are */}
                        <div className="animate-in fade-in slide-in-from-left-5 duration-700">
                            <div className="flex flex-col items-start justify-start mb-8">
                                <h2 className="text-3xl font-bold text-foreground mb-4">
                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">Who We Are</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>
                            <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-8">
                                <Image
                                    src="/bg-img/about.jpg"
                                    alt="Who We Are"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Asancha Properties is a premier real estate firm specializing in property sourcing, investment, management, refurbishment, and interior design. Our mission is to transform overlooked properties into high-value investments and beautiful homes, providing tailored real estate solutions to investors, homeowners, and landlords.
                            </p>
                        </div>

                        {/* Our Values */}
                        <div className="animate-in fade-in slide-in-from-right-5 duration-700 delay-200">
                            <div className="flex flex-col items-start justify-start mb-8">
                                <h2 className="text-3xl font-bold text-foreground mb-4">
                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">Our Values</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>
                            <div className="grid gap-8">
                                {[
                                    { title: "Integrity", text: "We operate with transparency, honesty, and professionalism." },
                                    { title: "Client Success", text: "Your goals are our priority; we work to maximize your investment returns." },
                                    { title: "Innovation", text: "We leverage market insights and strategic planning to deliver top-tier real estate solutions." },
                                    { title: "Excellence", text: "Quality-driven services in property management, refurbishment, and investment strategies." }
                                ].map((value, idx) => (
                                    <div key={idx} className="flex gap-6 group p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300">
                                        <div className="flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                                            <CheckCircle size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{value.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ##### About Content Wrapper End ##### */}

            {/* ##### Our Mission and Vision Area Start ##### */}
            <section className="relative py-32 bg-fixed bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/bg-img/investment.avif')" }}>
                <div className="absolute inset-0 bg-black/70 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center max-w-5xl mx-auto">
                        {/* Mission */}
                        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-5 duration-700">
                            <Target size={48} className="text-primary mb-6" />
                            <div className="flex flex-col items-center justify-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    <span className="capitalize text-outline text-white">Our Mission</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                                Helping clients secure the best property deals with expert insights and personalized service.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
                            <Eye size={48} className="text-primary mb-6" />
                            <div className="flex flex-col items-center justify-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    <span className="capitalize text-outline text-white">Our Vision</span>
                                </h2>
                                <span className="h-1 w-20 bg-primary rounded-full"></span>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                                Becoming the leading property sourcing and investment firm, revitalizing communities and transforming properties.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ##### Our Mission and Vision Area End ##### */}

            {/* ##### Meet Our Team Area Start ##### */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Meet Our Team</span>
                        </h2>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Stephanie Nkemchor", role: "Managing Partner", desc: "Industry expert with years of experience in real estate investment.", image: "/core-img/stephanie.jpg" },
                            { name: "Ionut John", role: "Head of Property Management", desc: "Ensuring hassle-free rental experiences for property owners.", image: "/core-img/john-ionut.jpg" },
                            { name: "Lovelyn Ositadinma", role: "Lead Project Manager", desc: "Overseeing refurbishments and renovations for property enhancement.", image: "/core-img/lovelyn.jpg" },
                            { name: "Kim Mariano", role: "Lead Designer", desc: "Crafting beautiful and functional interiors that maximize value.", image: "/core-img/kim-mariano.jpg" }
                        ].map((member, idx) => (
                            <div key={idx} className="group animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                                <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-2">
                                    <div className="relative h-80 w-full overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <div className="flex justify-center mb-4">
                                            <Trophy size={24} className="text-primary/40 group-hover:text-primary transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                        <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ##### Meet Our Team Area End ##### */}

            {/* ##### Partners Area Start ##### */}
            <section className="relative py-24 bg-fixed bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/bg-img/cta.jpg')" }}>
                <div className="absolute inset-0 bg-black/80 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            <span className="capitalize text-outline text-white">Our Partners</span>
                        </h2>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                    </div>
                    <p className="text-gray-400 mt-6 md:text-lg">We work with the UK's leading property portals and regulatory bodies.</p>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-500 max-w-6xl mx-auto">
                        {[
                            { src: "/icons/rightmove.jpg", alt: "Rightmove" },
                            { src: "/icons/PRS-logo.png", alt: "Property Redress Scheme" },
                            { src: "/icons/ico-header-logo.svg", alt: "ICO" },
                            { src: "/icons/dps.jpg", alt: "DPS" },
                            { src: "/icons/on-the-market.jpg", alt: "OnTheMarket" },
                            { src: "/icons/zoopla.png", alt: "Zoopla" },
                            { src: "/icons/chiswell.png", alt: "Chiswell" }
                        ].map((partner, idx) => (
                            <div key={idx} className="relative grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    className="max-h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ##### Partners Area End ##### */}
        </main>
    );
};

export default AboutUsPage;