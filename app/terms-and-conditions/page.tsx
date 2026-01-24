import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Scale, FileText, Info } from 'lucide-react';

const TermsConditionsPage = () => {
    const sections = [
        {
            id: "definitions",
            title: "1. Definitions",
            icon: <Info className="w-6 h-6 text-primary" />,
            content: (
                <ul className="space-y-3 list-disc pl-5 text-muted-foreground leading-relaxed">
                    <li><strong>"Asancha"</strong> refers to the company providing property sourcing services.</li>
                    <li><strong>"User," "You," or "Your"</strong> refers to anyone accessing our website or using our services.</li>
                    <li><strong>"Services"</strong> refers to property sourcing, investment guidance, and other related activities offered by Asancha.</li>
                </ul>
            )
        },
        {
            id: "use-of-website",
            title: "2. Use of Website",
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            content: (
                <ul className="space-y-3 list-disc pl-5 text-muted-foreground leading-relaxed">
                    <li>The content on this website is for informational purposes only and does not constitute professional advice.</li>
                    <li>You agree not to use our website for unlawful purposes.</li>
                    <li>We reserve the right to suspend or terminate access to users who violate these terms.</li>
                </ul>
            )
        },
        {
            id: "services",
            title: "3. Property Sourcing Services",
            icon: <Scale className="w-6 h-6 text-primary" />,
            content: (
                <p className="text-muted-foreground leading-relaxed italic">
                    Asancha acts as a property sourcing intermediary, connecting clients with property opportunities. We do not provide financial, legal, or tax advice.
                </p>
            )
        },
        {
            id: "fees",
            title: "4. Fees and Payments",
            icon: <FileText className="w-6 h-6 text-primary" />,
            content: (
                <ul className="space-y-3 list-disc pl-5 text-muted-foreground leading-relaxed">
                    <li>Asancha charges fees for sourcing properties, which will be communicated before engagement.</li>
                    <li>All payments must be made on time. Late payments may incur additional charges.</li>
                </ul>
            )
        }
    ];

    return (
        <main className="grow bg-background">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/bg-img/conditions.jpg"
                    alt="Terms & Conditions"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/40" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                        Terms & <span className="text-primary">Conditions</span>
                    </h1>
                    <div className="my-4 h-[3px] w-[20%] bg-white mx-auto"></div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-border/50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-border pb-8">
                                <div>
                                    <div className="flex flex-col items-start justify-start mb-4">
                                        <h2 className="text-3xl font-bold text-foreground mb-4">
                                            <span className="capitalize text-outline text-foreground dark:text-white text-left">Essential Legal Information</span>
                                        </h2>
                                        <span className="h-1 w-20 bg-primary rounded-full"></span>
                                    </div>
                                    <p className="text-muted-foreground mt-2 font-medium">Please read these terms carefully before using our services.</p>
                                </div>
                                <div className="shrink-0 px-6 py-3 bg-muted rounded-2xl border border-border">
                                    <span className="text-sm font-black text-foreground uppercase tracking-widest">Last Updated: <span className="text-primary">01/03/2025</span></span>
                                </div>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-12 italic">
                                Welcome to Asancha! These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms.
                            </p>

                            <div className="grid gap-12">
                                {sections.map((section) => (
                                    <div key={section.id} className="group">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                {section.icon}
                                            </div>
                                            <div className="flex flex-col items-start justify-start mb-4">
                                                <h3 className="text-xl font-bold text-foreground mb-4">
                                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">{section.title}</span>
                                                </h3>
                                                <span className="h-1 w-12 bg-primary rounded-full"></span>
                                            </div>
                                        </div>
                                        <div className="pl-4 border-l-2 border-border group-hover:border-primary/50 transition-colors">
                                            {section.content}
                                        </div>
                                    </div>
                                ))}

                                {/* Remaining sections in a cleaner list */}
                                <div className="space-y-12">
                                    {[
                                        { title: "5. Limitation of Liability", items: ["Asancha is not responsible for any losses due to property investments or third-party interactions.", "We do not guarantee the accuracy of property information from third parties."] },
                                        { title: "6. Privacy and Data Protection", content: <span>Your personal data will be handled in accordance with our <Link href="/privacy-policy" className="text-primary hover:underline font-bold italic">Privacy Policy</Link>.</span> },
                                        { title: "7. Intellectual Property", items: ["All content on this website is the property of Asancha and may not be copied without permission."] },
                                        { title: "8. Third-Party Links and Services", content: "We are not responsible for the content or policies of third-party websites linked on our platform." },
                                        { title: "9. Termination of Use", content: "We reserve the right to terminate or restrict access to our website and services at any time." },
                                        { title: "10. Changes to These Terms", content: "We may update these Terms and Conditions at any time, with changes effective upon posting." },
                                        { title: "11. Governing Law", content: "These terms are governed by the laws of England." }
                                    ].map((section, idx) => (
                                        <div key={idx} className="group">
                                            <div className="flex flex-col items-start justify-start mb-4">
                                                <h3 className="text-xl font-bold text-foreground mb-4">
                                                    <span className="capitalize text-outline text-foreground dark:text-white text-left">{section.title}</span>
                                                </h3>
                                                <span className="h-1 w-12 bg-primary rounded-full"></span>
                                            </div>
                                            <div className="pl-4 border-l-2 border-border group-hover:border-primary/50 transition-colors">
                                                {section.items ? (
                                                    <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                                                        {section.items.map((item, i) => <li key={i}>{item}</li>)}
                                                    </ul>
                                                ) : (
                                                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <div className="mt-12 p-8 bg-muted/50 rounded-3xl border border-border">
                                    <h3 className="text-xl font-bold text-foreground mb-6 uppercase tracking-tight">12. Contact Information</h3>
                                    <div className="grid sm:grid-cols-2 gap-8 text-muted-foreground">
                                        <div className="space-y-4">
                                            <p className="flex items-center gap-3">
                                                <span className="font-bold text-foreground">Email:</span>
                                                <a href="mailto:info@asancha.co.uk" className="hover:text-primary italic transition-all">info@asancha.co.uk</a>
                                            </p>
                                            <p className="flex items-center gap-3">
                                                <span className="font-bold text-foreground">Phone:</span>
                                                <a href="tel:07398228137" className="hover:text-primary transition-colors">07398228137</a>
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-foreground mb-1">Address:</p>
                                            <p className="italic">Rushden, Northamptonshire</p>
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

export default TermsConditionsPage;
