'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { disableHeaderWithFooter } from '@/utils/disableHeaderWithFooter';
import { usePathname } from 'next/navigation';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    // Early exits (no hooks below should be conditional)
    if (pathname.startsWith("/dashboard")) return null;

    const shouldHideHeader = disableHeaderWithFooter.some((path) => {
        const pattern = path.replace(/\[.*\]/g, "[^/]+");
        const regex = new RegExp(`^${pattern}$`);
        return regex.test(pathname);
    });
    if (shouldHideHeader) return null;

    return (
        <footer className="relative bg-secondary-foreground/90 dark:bg-black/90 pt-24 pb-0 text-white">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-[-1] bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: "url('/bg-img/cta.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}></div>
            <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-transparent to-background/90"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {/* Column 1: Logo & Contact */}
                    <div className="mb-12">
                        <div className="mb-4">
                            <Image src="/core-img/footer-logo.png" alt="Asancha Footer Logo" width={150} height={50} className="w-[150px]" />
                        </div>
                        <p className="mb-4 text-white/80 text-[14px]">
                            Asancha Properties is a leading property investment company based in the UK. We specialize in sourcing, investing, and managing properties to provide our clients with the best possible returns.
                        </p>

                        <div className="space-y-2 text-[14px]">
                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-primary" />
                                <Link href="tel:+447404799254" className="text-white/80 hover:text-primary transition-colors">
                                    +44 7404 799254
                                </Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={20} className="text-primary" />
                                <span className="text-white/80">info@asancha.co.uk</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary mt-1" />
                                <span className="text-white/80">
                                    28 Bedford Road, Rushden,<br />
                                    Northamptonshire, NN10 0NB
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Useful Links & Socials */}
                    <div className="mb-12">
                        <h6 className="mb-6 text-lg font-bold uppercase tracking-wider text-white">Useful Links</h6>
                        <nav>
                            <ul role='list' className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-[14px]">
                                <li role='list-item'><Link href="/" className="text-white/80 hover:text-primary transition-colors">Home</Link></li>
                                <li role='list-item'><Link href="/about-us" className="text-white/80 hover:text-primary transition-colors">About us</Link></li>
                                <li role='list-item'><Link href="/property-sourcing" className="text-white/80 hover:text-primary transition-colors">Property Sourcing</Link></li>
                                <li role='list-item'><Link href="/property-investment" className="text-white/80 hover:text-primary transition-colors">Property Investment</Link></li>
                                <li role='list-item'><Link href="/below-market-value-properties" className="text-white/80 hover:text-primary transition-colors">Below Market Value Properties</Link></li>
                                <li role='list-item'><Link href="/bmv-deal-analyzer" className="text-white/80 hover:text-primary transition-colors">BMV Deal Analyzer</Link></li>
                                <li role='list-item'><Link href="/property-management" className="text-white/80 hover:text-primary transition-colors">Property Management</Link></li>
                                <li role='list-item'><Link href="/property-refurbishment" className="text-white/80 hover:text-primary transition-colors">Property Refurbishment</Link></li>
                                <li role='list-item'><Link href="/interior-design" className="text-white/80 hover:text-primary transition-colors">Interior Design</Link></li>
                                <li role='list-item'><Link href="/contact" className="text-white/80 hover:text-primary transition-colors">Contact us</Link></li>
                            </ul>
                        </nav>

                        <div className="mt-8 flex gap-4">
                            <Link href="https://www.facebook.com/share/19qEeUzWVp/" target="_blank" aria-label="Visit our Facebook page" className="bg-card p-2 rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-all">
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/asancha_properties" target="_blank" aria-label="Visit our Instagram page" className="bg-card p-2 rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-all">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" aria-label="Visit our LinkedIn page" className="bg-card p-2 rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-all">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" aria-label="Visit our Twitter page" className="bg-card p-2 rounded-full shadow-sm text-primary hover:bg-primary hover:text-white transition-all">
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div className="mb-12">
                        <h6 className="mb-6 text-lg font-bold uppercase tracking-wider text-white">Newsletter</h6>
                        <p className="mb-6 text-white/80 text-[14px]">
                            Subscribe to receive exclusive property listings, expert insights, and market updates.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-border"
                                required
                                aria-label="Email address for newsletter subscription"
                            />
                            <button type="submit" className="primary-btn w-full justify-center">Submit</button>
                        </form>
                    </div>
                </div>

                {/* Partners Logos */}
                <div className="mt-12 mb-16 flex flex-wrap items-center justify-center gap-8 opacity-80  transition-all hover:opacity-100">
                    <Link href="https://www.rightmove.co.uk" target="_blank">
                        <Image src="/icons/rightmove.jpg" alt="right move" width={150} height={50} className="h-12 w-auto object-contain" />
                    </Link>
                    <Link href="https://www.theprs.co.uk" target="_blank">
                        <Image src="/icons/PRS-logo.png" alt="PRS" width={150} height={50} className="h-12 w-auto object-contain" />
                    </Link>
                    <Link href="https://ico.org.uk/for-organisations/" target="_blank">
                        <Image src="/icons/ico-header-logo.svg" alt="ICO" width={150} height={50} className="h-10 w-auto object-contain" />
                    </Link>
                    <Link href="#">
                        <Image src="/icons/dps.jpg" alt="DPS" width={150} height={50} className="h-12 w-auto object-contain" />
                    </Link>
                    <Link href="https://www.onthemarket.com" target="_blank">
                        <Image src="/icons/on-the-market.jpg" alt="On the Market" width={150} height={50} className="h-12 w-auto object-contain" />
                    </Link>
                    <Link href="https://www.zoopla.co.uk" target="_blank">
                        <Image src="/icons/zoopla.png" alt="Zoopla" width={150} height={50} className="h-10 w-auto object-contain" />
                    </Link>
                    <Link href="https://www.tpos.co.uk" target="_blank">
                        <Image src="/icons/the-property-ombudsman-sale.jpg" alt="TPOS Sale" width={150} height={50} className="h-12 w-auto object-contain" />
                    </Link>
                    <Link href="https://www.tpos.co.uk" target="_blank">
                        <Image src="/icons/the-property-ombudsman-lettings.jpg" alt="TPOS Lettings" width={150} height={50} className="h-12 w-auto object-contain" />
                    </Link>

                    <div className="flex flex-col items-center">
                        <Image src="/icons/HMRC.png" alt="HMRC" width={150} height={50} className="h-10 w-auto object-contain mb-1" />
                        <span className="text-[10px] text-white/80">RN: 16080670</span>
                    </div>

                    <Link href="#">
                        <Image src="/icons/chiswell.png" alt="Chiswell Insurance" width={150} height={50} className="h-12 w-auto object-contain" />
                    </Link>
                    <Link href="#">
                        <Image src="/icons/asancha-company-number.png" alt="Company Number" width={150} height={50} className="h-8 w-auto object-contain" />
                    </Link>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-border bg-foreground dark:bg-black py-3 text-center">
                <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground md:flex-row md:justify-between">
                    <p>Copyright &copy; {currentYear} All rights reserved</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
