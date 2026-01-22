import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from 'lucide-react';

const ContactUsPage = () => {
    return (
        <main className="grow">
            {/* ##### Breadcrumb Area Start ##### */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-img/contact-us.jpg"
                        alt="Contact Us Background"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 capitalize tracking-tight">Contact Us</h1>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
                    {/* <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Get access to off-market properties and high-yield investment opportunities tailored to your goals.
                    </p> */}
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    {/* Google Maps */}
                    <div className="rounded-3xl overflow-hidden shadow-2xl mb-24 border border-border/50 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.7892929465943!2d-0.5917350000000001!3d52.283527199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877a37ec93aea07%3A0xf89256b6a5c5e48!2sAsancha%20Properties!5e0!3m2!1sen!2sng!4v1741598503504!5m2!1sen!2sng"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 opacity-90"
                        ></iframe>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16" id="contact-me">
                        {/* Contact Info Sidebar */}
                        <div className="lg:col-span-4 space-y-12 animate-in fade-in slide-in-from-left-5 duration-700">
                            <div>
                                <h3 className="text-3xl font-bold text-foreground mb-6">Contact Info</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We&apos;re here to help with all your property sourcing, investment, management, refurbishment and interior design needs. Whether you&apos;re an investor, homeowner, or landlord, reach out to us for expert guidance and seamless real estate solutions.
                                </p>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-muted/50 p-8 rounded-3xl border border-border/50">
                                <div className="flex items-center gap-3 mb-6">
                                    <Clock className="text-primary" size={24} />
                                    <h4 className="text-xl font-bold text-foreground">Office Hours</h4>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-muted-foreground border-b border-border pb-2">
                                        <span>Monday - Friday</span>
                                        <span className="font-semibold text-foreground">09 AM - 19 PM</span>
                                    </li>
                                    <li className="flex justify-between items-center text-muted-foreground border-b border-border pb-2">
                                        <span>Saturday</span>
                                        <span className="font-semibold text-foreground">09 AM - 14 PM</span>
                                    </li>
                                    <li className="flex justify-between items-center text-muted-foreground">
                                        <span>Sunday</span>
                                        <span className="text-destructive font-medium">Closed</span>
                                    </li>
                                </ul>

                                <div className="flex gap-4 mt-8">
                                    {[
                                        { icon: Facebook, href: "https://www.facebook.com/share/19qEeUzWVp/" },
                                        { icon: Instagram, href: "https://www.instagram.com/asancha_properties" },
                                        { icon: Linkedin, href: "#" }
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Physical Address & Contact */}
                            <div className="space-y-6">
                                <div className="flex gap-4 group">
                                    <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-muted group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Phone</p>
                                        <a href="tel:+447404799254" className="text-lg font-bold hover:text-primary transition-colors">+44 7404 799254</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-muted group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Email</p>
                                        <a href="mailto:office@asancha.co.uk" className="text-lg font-bold hover:text-primary transition-colors">office@asancha.co.uk</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 group">
                                    <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-muted group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Address</p>
                                        <p className="text-lg font-bold leading-tight">28 Bedford Road, Rushden,<br />Northamptonshire. NN10 0NB</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Area */}
                        <div className="lg:col-span-8 animate-in fade-in slide-in-from-right-5 duration-700 delay-200" id="contact-form">
                            <div className="bg-card p-8 md:p-12 rounded-4xl shadow-xl border border-border/50">
                                <h3 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h3>
                                <form id="contactForm" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="text-sm font-semibold text-muted-foreground">Full Name</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            className="w-full bg-muted border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="text-sm font-semibold text-muted-foreground">Email Address</label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            className="w-full bg-muted border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300"
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label htmlFor="contact-number" className="text-sm font-semibold text-muted-foreground">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="contact-number"
                                            className="w-full bg-muted border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300"
                                            placeholder="+44 1234 567890"
                                            required
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label htmlFor="contact-message" className="text-sm font-semibold text-muted-foreground">Your Message</label>
                                        <textarea
                                            id="contact-message"
                                            rows={6}
                                            className="w-full bg-muted border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 resize-none"
                                            placeholder="How can we help you?"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="md:col-span-2 pt-4">
                                        <button type="submit" className="primary-btn w-full md:w-auto px-12 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 cursor-pointer">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUsPage;
