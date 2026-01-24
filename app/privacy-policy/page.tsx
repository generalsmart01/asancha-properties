import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Bell, Scale } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const sections = [
        {
            id: "information-we-collect",
            title: "Information We Collect",
            icon: <Eye className="w-6 h-6 text-primary" />,
            items: [
                { label: "Personal Identification Information", desc: "Name, address, email address, phone number." },
                { label: "Financial Information", desc: "Bank account details, payment information." },
                { label: "Property Preferences", desc: "Details regarding property interests and criteria." },
                { label: "Technical Data", desc: "IP address, browser type, and usage data collected through cookies." }
            ]
        },
        {
            id: "use-of-personal-data",
            title: "Use of Personal Data",
            icon: <FileText className="w-6 h-6 text-primary" />,
            items: [
                { label: "Service Delivery", desc: "To provide property sourcing services and communicate relevant information." },
                { label: "Transaction Processing", desc: "To manage payments, fees, and charges." },
                { label: "Client Support", desc: "To respond to inquiries and provide customer support." },
                { label: "Marketing Communications", desc: "To inform you about services, offers, and events with your consent." },
                { label: "Legal Compliance", desc: "To fulfill legal obligations, such as anti-money laundering requirements." }
            ]
        },
        {
            id: "legal-basis",
            title: "Legal Basis for Processing",
            icon: <Scale className="w-6 h-6 text-primary" />,
            items: [
                { label: "Contractual Necessity", desc: "Processing necessary for the performance of a contract." },
                { label: "Legitimate Interests", desc: "Processing for our legitimate business interests." },
                { label: "Consent", desc: "Where you have provided explicit consent." },
                { label: "Legal Obligation", desc: "Compliance with legal and regulatory obligations." }
            ]
        }
    ];

    return (
        <main className="grow bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/privacy-policy.jpg"
                    alt="Privacy Policy"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/40" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-border/50">
                            {/* Header Info */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-border pb-8">
                                <div>
                                    <div className="flex flex-col items-start justify-start mb-4">
                                        <h2 className="text-3xl font-bold text-foreground mb-4">
                                            <span className="capitalize text-outline text-foreground dark:text-white text-left">Your Privacy Matters</span>
                                        </h2>
                                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                                    </div>
                                    <p className="text-muted-foreground mt-2 font-medium">How we handle and protect your personal information.</p>
                                </div>
                                <div className="shrink-0 px-6 py-3 bg-muted rounded-2xl border border-border">
                                    <span className="text-sm font-black text-foreground uppercase tracking-widest">Compliant with <span className="text-primary italic">GDPR</span></span>
                                </div>
                            </div>

                            <div className="space-y-16">
                                {/* Introduction */}
                                <div className="prose prose-slate dark:prose-invert max-w-none">
                                    <div className="flex flex-col items-start justify-start mb-4">
                                        <h3 className="text-2xl font-bold text-foreground mb-4">
                                            <span className="capitalize text-outline text-foreground dark:text-white text-left">Introduction</span>
                                        </h3>
                                        <span className="h-1 w-12 bg-primary rounded-full"></span>
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                                        At Asancha, we are committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, store, and disclose your personal information in accordance with the General Data Protection Regulation (GDPR) and the Data Protection Act 2018.
                                    </p>
                                </div>

                                {/* Dynamic Sections */}
                                {sections.map((section) => (
                                    <div key={section.id} className="group">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                {section.icon}
                                            </div>
                                            <div className="flex flex-col items-start justify-start mb-4">
                                                <h3 className="text-2xl font-bold text-foreground mb-4">
                                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">{section.title}</span>
                                                </h3>
                                                <span className="h-1 w-12 bg-primary rounded-full"></span>
                                            </div>
                                        </div>
                                        <div className="grid gap-6 pl-4 border-l-2 border-border group-hover:border-primary/50 transition-colors">
                                            {section.items.map((item, idx) => (
                                                <div key={idx} className="bg-muted/30 p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-all">
                                                    <h4 className="font-bold text-foreground mb-1">{item.label}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Data Sharing & Security */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-primary/5 p-8 rounded-4xl border border-primary/10 group hover:border-primary/30 transition-all">
                                        <div className="flex items-center gap-3 mb-6">
                                            <Lock className="w-6 h-6 text-primary" />
                                            <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">Data Security</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed italic">
                                            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 p-8 rounded-[2rem] border border-border group hover:border-primary/30 transition-all">
                                        <div className="flex items-center gap-3 mb-6">
                                            <ShieldCheck className="w-6 h-6 text-primary" />
                                            <h3 className="text-xl font-bold text-foreground uppercase tracking-tight">Data Retention</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed italic">
                                            We retain personal data only as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
                                        </p>
                                    </div>
                                </div>

                                {/* Your Rights */}
                                <div className="group">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <UserCheck className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex flex-col items-start justify-start mb-4">
                                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                                <span className="capitalize text-outline text-foreground dark:text-white text-left">Your Rights</span>
                                            </h3>
                                            <span className="h-1 w-12 bg-primary rounded-full"></span>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4 pl-4">
                                        {[
                                            { label: "Access", desc: "Request access to your personal data." },
                                            { label: "Rectification", desc: "Request correction of inaccurate data." },
                                            { label: "Erasure", desc: "Request deletion of your personal data." },
                                            { label: "Restriction", desc: "Request restriction of processing." },
                                            { label: "Portability", desc: "Request transfer of your data." },
                                            { label: "Objection", desc: "Object to processing of your data." }
                                        ].map((right, idx) => (
                                            <div key={idx} className="flex flex-col p-4 bg-muted/20 rounded-xl border border-border group/item hover:border-primary/30 transition-all">
                                                <span className="font-bold text-foreground text-sm uppercase tracking-tighter mb-1">{right.label}</span>
                                                <span className="text-muted-foreground text-xs">{right.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Changes & Contact */}
                                <div className="pt-12 border-t border-border">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <Bell className="w-5 h-5 text-primary" />
                                                <h3 className="font-bold text-foreground uppercase tracking-tight">Policy Updates</h3>
                                            </div>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and where appropriate, notified to you by email.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground uppercase tracking-tight mb-4">Contact Information</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                                If you have any questions or concerns about this policy or our data practices, please contact us:
                                            </p>
                                            <a href="mailto:info@asancha.co.uk" className="text-primary font-black italic hover:underline transition-all">
                                                info@asancha.co.uk
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back to Home Link */}
                        <div className="mt-12 text-center">
                            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm">
                                <span className="text-xl">←</span> Back to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicyPage;