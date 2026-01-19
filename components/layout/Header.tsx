"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Menu, X, ChevronDown,
    Search, TrendingUp, Home, Tag, PaintBucket, Palette, Calculator
} from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            // Prevent scrolling when menu is open on mobile
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    const toggleDropdown = (name: string) => {
        if (openDropdown === name) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(name);
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
        document.body.style.overflow = "unset";
    };

    return (
        <header className="relative w-full z-50">
            {/* Top Header */}
            <div className="hidden sm:block bg-primary text-white py-2 text-sm z-50 relative">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-4">
                        <a href="mailto:info@asancha.co.uk" className="hover:text-white/80 transition-colors flex items-center gap-2">
                            <Mail size={14} /> info@asancha.co.uk
                        </a>
                        <a href="tel:+447404799254" className="hover:text-white/80 transition-colors flex items-center gap-2 sm:hidden" aria-label="Call +44 7404 799254">
                            <Phone size={14} /> +44 7404 799254
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 mr-4">
                            <Phone size={14} />
                            <a href="tel:+447404799254" className="hover:text-white/80 transition-colors" aria-label="Call +44 7404 799254">+44 7404 799254</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="https://www.facebook.com/share/19qEeUzWVp/" target="_blank" aria-label="Visit our Facebook page" className="hover:text-white/80 transition-colors"><Facebook size={16} /></a>
                            <a href="https://www.instagram.com/asancha_properties" target="_blank" aria-label="Visit our Instagram page" className="hover:text-white/80 transition-colors"><Instagram size={16} /></a>
                            <a href="#" aria-label="Visit our LinkedIn page" className="hover:text-white/80 transition-colors"><Linkedin size={16} /></a>
                            {/* <a href="#" aria-label="Twitter" className="hover:text-white/80 transition-colors"><Twitter size={16} /></a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={`w-full bg-background text-foreground border-b border-border transition-all duration-300 ${isSticky ? "fixed top-0 shadow-md animate-in slide-in-from-top-5" : "relative"
                }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" onClick={closeMenu} className="relative w-32 h-12 flex-shrink-0">
                            <Image src="/core-img/logo.png" alt="Asancha Properties" fill className="object-contain" priority />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">Home</Link>
                            <Link href="/about-us" className="text-foreground hover:text-primary font-medium transition-colors">About Us</Link>

                            {/* Services Mega Menu */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors py-8" aria-expanded="false" aria-haspopup="true">
                                    Services <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                                    <div className="p-4 grid grid-cols-2 gap-2">
                                        <Link href="/property-sourcing" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group/item transition-colors">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors mt-1">
                                                <Search size={20} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">Property Sourcing</div>
                                                <p className="text-sm text-muted-foreground line-clamp-2">Find the best deals tailored to your needs.</p>
                                            </div>
                                        </Link>
                                        <Link href="/property-investment" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group/item transition-colors">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors mt-1">
                                                <TrendingUp size={20} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">Property Investments</div>
                                                <p className="text-sm text-muted-foreground line-clamp-2">Grow your portfolio with high-yield opportunities.</p>
                                            </div>
                                        </Link>
                                        <Link href="/property-management" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group/item transition-colors">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors mt-1">
                                                <Home size={20} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">Property Management</div>
                                                <p className="text-sm text-muted-foreground line-clamp-2">Hassle-free management for your properties.</p>
                                            </div>
                                        </Link>
                                        <Link href="/below-market-value-properties" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group/item transition-colors">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors mt-1">
                                                <Tag size={20} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">BMV Properties</div>
                                                <p className="text-sm text-muted-foreground line-clamp-2">Exclusive Below Market Value deals.</p>
                                            </div>
                                        </Link>
                                        <Link href="/property-refurbishment" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group/item transition-colors">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors mt-1">
                                                <PaintBucket size={20} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">Property Refurbishment</div>
                                                <p className="text-sm text-muted-foreground line-clamp-2">Add value through expert refurbishment.</p>
                                            </div>
                                        </Link>
                                        <Link href="/interior-design" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group/item transition-colors">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors mt-1">
                                                <Palette size={20} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">Interior Designs</div>
                                                <p className="text-sm text-muted-foreground line-clamp-2">Transform spaces with stunning designs.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/property-listings" className="text-foreground hover:text-primary font-medium transition-colors">Properties</Link>

                            {/* Tools Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors py-8" aria-expanded="false" aria-haspopup="true">
                                    Tools <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                                </button>
                                <div className="absolute top-full left-0 w-80 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                                    <div className="p-2">
                                        <Link href="/bmv-deal-analyzer" className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted group/item transition-colors">
                                            <div className="p-2 rounded-md bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors mt-1">
                                                <Calculator size={20} />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground group-hover/item:text-primary transition-colors">BMV Deal Analyzer</div>
                                                <p className="text-sm text-muted-foreground line-clamp-2">Analyze potential deals instantly.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/contact" className="text-foreground hover:text-primary font-medium transition-colors">Contact Us</Link>
                        </nav>

                        {/* CTA Buttons - Desktop */}
                        <div className="hidden lg:flex items-center gap-4">
                            <ModeToggle />
                            <Link href="/property-listings" className="primary-btn text-sm px-4 py-2">Available Properties</Link>
                            {/* <Link href="/free-consultation" className="ghost-btn text-sm px-4 py-2">Free Consultation</Link> */}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md"
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`} style={{ top: isSticky ? "0" : "0" }}>
                <div className="container mx-auto px-4 py-6 flex flex-col h-full overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <Link href="/" onClick={closeMenu} className="relative w-32 h-12">
                            <Image src="/core-img/logo.png" alt="Asancha Properties" fill className="object-contain" />
                        </Link>
                        <div className="flex items-center gap-4">
                            <ModeToggle />
                            <button onClick={toggleMenu} className="p-2 text-foreground hover:bg-muted rounded-md">
                                <X size={24} />
                            </button>
                        </div>
                    </div>

                    <nav className="flex flex-col gap-2">
                        <Link href="/" onClick={closeMenu} className="px-4 py-3 text-lg font-medium border-b border-border/50 hover:text-primary">Home</Link>
                        <Link href="/about-us" onClick={closeMenu} className="px-4 py-3 text-lg font-medium border-b border-border/50 hover:text-primary">About Us</Link>

                        {/* Mobile Services Accordion */}
                        <div className="border-b border-border/50">
                            <button
                                onClick={() => toggleDropdown("services")}
                                className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium hover:text-primary"
                                aria-expanded={openDropdown === "services"}
                                aria-controls="mobile-services-menu"
                            >
                                Services <ChevronDown size={20} className={`transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`flex flex-col bg-muted/30 overflow-hidden transition-all duration-300 ${openDropdown === "services" ? "max-h-[500px]" : "max-h-0"}`}>
                                <Link href="/property-sourcing" onClick={closeMenu} className="px-6 py-3 text-base text-muted-foreground hover:text-primary hover:bg-muted/50 flex items-center gap-3 transition-colors">
                                    <Search size={18} /> Property Sourcing
                                </Link>
                                <Link href="/property-investment" onClick={closeMenu} className="px-6 py-3 text-base text-muted-foreground hover:text-primary hover:bg-muted/50 flex items-center gap-3 transition-colors">
                                    <TrendingUp size={18} /> Property Investments
                                </Link>
                                <Link href="/property-management" onClick={closeMenu} className="px-6 py-3 text-base text-muted-foreground hover:text-primary hover:bg-muted/50 flex items-center gap-3 transition-colors">
                                    <Home size={18} /> Property Management
                                </Link>
                                <Link href="/below-market-value-properties" onClick={closeMenu} className="px-6 py-3 text-base text-muted-foreground hover:text-primary hover:bg-muted/50 flex items-center gap-3 transition-colors">
                                    <Tag size={18} /> Below Market Value Properties
                                </Link>
                                <Link href="/property-refurbishment" onClick={closeMenu} className="px-6 py-3 text-base text-muted-foreground hover:text-primary hover:bg-muted/50 flex items-center gap-3 transition-colors">
                                    <PaintBucket size={18} /> Property Refurbishment
                                </Link>
                                <Link href="/interior-design" onClick={closeMenu} className="px-6 py-3 text-base text-muted-foreground hover:text-primary hover:bg-muted/50 flex items-center gap-3 transition-colors">
                                    <Palette size={18} /> Interior Designs
                                </Link>
                            </div>
                        </div>

                        <Link href="/property-listings" onClick={closeMenu} className="px-4 py-3 text-lg font-medium border-b border-border/50 hover:text-primary">Properties</Link>

                        {/* Mobile Tools Accordion */}
                        <div className="border-b border-border/50">
                            <button
                                onClick={() => toggleDropdown("tools")}
                                className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium hover:text-primary"
                                aria-expanded={openDropdown === "tools"}
                                aria-controls="mobile-tools-menu"
                            >
                                Tools <ChevronDown size={20} className={`transition-transform duration-200 ${openDropdown === "tools" ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`flex flex-col bg-muted/30 overflow-hidden transition-all duration-300 ${openDropdown === "tools" ? "max-h-[200px]" : "max-h-0"}`}>
                                <Link href="/bmv-deal-analyzer" onClick={closeMenu} className="px-6 py-3 text-base text-muted-foreground hover:text-primary hover:bg-muted/50 flex items-center gap-3 transition-colors">
                                    <Calculator size={18} /> BMV Deal Analyzer
                                </Link>
                            </div>
                        </div>

                        <Link href="/contact" onClick={closeMenu} className="px-4 py-3 text-lg font-medium border-b border-border/50 hover:text-primary">Contact Us</Link>
                    </nav>

                    <div className="mt-8 flex flex-col gap-4 px-4">
                        <Link href="/property-listings" onClick={closeMenu} className="primary-btn text-center justify-center">Available Properties</Link>
                        <Link href="/free-consultation" onClick={closeMenu} className="ghost-btn text-center justify-center">Free Consultation</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
