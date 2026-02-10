"use client";

import React from 'react';
import Link from 'next/link';
import {
    Database,
    Settings,
    Wallet,
    BrainCircuit,
    Blocks,
    ArrowRight,
    CheckCircle2,
    Terminal,
    Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ApiPage() {
    const features = [
        {
            icon: <Settings className="h-8 w-8 text-primary" />,
            title: "Customised APIs for Your Vision",
            description: "We understand your unique business needs and create fully customised APIs to empower your innovation."
        },
        {
            icon: <Wallet className="h-8 w-8 text-primary" />,
            title: "Affordable Data Solutions",
            description: "We provide budget-friendly, tailored pricing designed specifically for startups and entrepreneurs, with opportunities for strategic partnerships to support your growth."
        },
        {
            icon: <BrainCircuit className="h-8 w-8 text-primary" />,
            title: "Expertly Crafted Insights",
            description: "From regional trends to predictive analytics, our expert team delivers precise insights designed for actionable intelligence."
        },
        {
            icon: <Blocks className="h-8 w-8 text-primary" />,
            title: "Seamless API Integration",
            description: "Effortlessly integrate our data solutions into your current technology stack to drive immediate and lasting results."
        }
    ];

    const apiEndpoints = [
        "sold-prices", "company-owned", "public-register", "selective-licensing",
        "planning", "epc-info", "postcode-info", "education-schools",
        "healthcare-hospital", "transportation", "valuation-sale", "hotspot",
        "yield", "service-accommodation", "property-info", "area-property-type",
        "crime", "flood-risk", "energy-efficiency", "census", "demographics"
    ];

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
                            UK's Leading <span className="text-primary">Data Platform</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Empower your business with comprehensive property data, customised APIs, and actionable insights.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/25">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-bold bg-background/50 backdrop-blur-sm">
                                View Documentation
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-card border border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Showcase Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-foreground">
                                Build faster with <span className="text-primary">Developer-First</span> Tools
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our APIs are designed for simplicity and performance. Get your API key, make a request, and get structured, reliable data in milliseconds.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "RESTful API Architecture",
                                    "99.9% Uptime SLA",
                                    "Comprehensive Documentation",
                                    "Real-time Data Updates"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-primary h-6 w-6" />
                                        <span className="font-bold text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 mt-4 font-bold">
                                Read the Docs
                            </Button>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl border border-white/10">
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/5">
                                    <div className="flex gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="ml-4 text-xs text-gray-400 font-mono">bash — 80x24</div>
                                </div>
                                <div className="p-6 font-mono text-sm overflow-x-auto">
                                    <div className="flex mb-4">
                                        <span className="text-green-400 mr-2">$</span>
                                        <span className="text-gray-300">
                                            curl -X GET "https://api.asancha.co.uk/v1/sold-prices?postcode=SW1A1AA" \
                                            <br />&nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
                                        </span>
                                    </div>
                                    <div className="text-blue-300 mb-2"># Response (200 OK)</div>
                                    <div className="text-gray-300">
                                        {`{
  "data": [
    {
      "address": "10 Downing Street",
      "price": 12500000,
      "date": "2024-01-15",
      "type": "Terraced",
      "tenure": "Freehold"
    }
  ],
  "meta": {
    "count": 1,
    "source": "HM Land Registry"
  }
}`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extensive API Collection */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
                            Explore Our Extensive <span className="text-primary">API Collection</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Access an extensive range of APIs, plus the flexibility to create any custom API from raw data to precisely meet your unique business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {apiEndpoints.map((endpoint, idx) => (
                            <div key={idx} className="group flex items-center gap-3 p-4 bg-background rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                                <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary transition-colors">
                                    <Terminal size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-mono text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                                        /{endpoint}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Endpoint</span>
                                </div>
                            </div>
                        ))}

                        {/* "And More" Card */}
                        <div className="flex items-center justify-center p-4 bg-primary/5 rounded-xl border border-dashed border-primary/30">
                            <span className="text-sm font-bold text-primary flex items-center gap-2">
                                <Code2 size={16} />
                                & a lot more to explore!
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-black text-center text-foreground mb-12">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <div className="grid gap-6">
                        {[
                            { q: "How do I get an API key?", a: "Simply sign up for an account, navigate to the dashboard, and generate your API key instantly. We offer a free tier so you can start testing right away." },
                            { q: "What are the rate limits?", a: "Our free tier allows up to 1,000 requests per month. Pro plans offer higher limits starting at 100,000 requests. Custom enterprise plans have unlimited throughput." },
                            { q: "Is the data real-time?", a: "Yes, our sold price and listing data is updated daily from official sources like HM Land Registry and major portals to ensure you have the latest insights." },
                            { q: "Do you offer technical support?", a: "Absolutely! All plans come with email support. Enterprise customers get a dedicated integration engineer and 24/7 priority support." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-md transition-all">
                                <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to craft the perfect API?</h2>
                    <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
                        Start integrating our powerful property data APIs today and transform your business with actionable insights.
                    </p>
                    <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
                        Create & Integrate
                    </Button>
                </div>
            </section>
        </main>
    );
}
