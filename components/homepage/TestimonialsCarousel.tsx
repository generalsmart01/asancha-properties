"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        text: "Asancha Properties turned my property search into a seamless experience. Highly recommended!",
        author: "Sarah O.",
        role: "Client",
        image: "/bg-img/testimonial1.jpg",
    },
    {
        id: 2,
        text: "Excellent investment guidance with great ROI! They really know the UK market inside out.",
        author: "Daniel K.",
        role: "Investor",
        image: "/bg-img/testimonial 2.jpg",
    },
    {
        id: 3,
        text: "I needed a complete property renovation, and Asancha Properties delivered beyond my expectations. Fantastic work!",
        author: "James T.",
        role: "Landlord",
        image: "/bg-img/testimonia 3.jpg",
    },
    {
        id: 4,
        text: "Their interior design service gave my home a luxurious and modern feel. The transformation was incredible!",
        author: "Lisa M.",
        role: "Homeowner",
        image: "/bg-img/testimonial4.jpg",
    },
];

export default function TestimonialsCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            slidesToScroll: 1,
            skipSnaps: false
        },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    return (
        <section className="py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 capitalize tracking-tight">
                        What Our Clients Say
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="overflow-hidden px-4 py-12" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {testimonials.map((testimonial, index) => {
                                const isActive = index === selectedIndex;
                                return (
                                    <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 py-4">
                                        <div className={`bg-card p-8 md:p-10 rounded-3xl shadow-xl border transition-all duration-500 relative overflow-hidden group h-full flex flex-col items-center justify-center
                                            ${isActive
                                                ? "scale-110 z-20 border-primary shadow-primary/20 opacity-100"
                                                : "scale-90 opacity-40 blur-[1px] border-border/50"
                                            }`}>

                                            <div className={`absolute top-6 right-8 transition-colors duration-500 ${isActive ? "text-primary/10" : "text-muted-foreground/5"}`}>
                                                <Quote size={60} />
                                            </div>

                                            <div className="relative z-10 text-center flex flex-col h-full">
                                                <p className={`text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-8 transition-colors duration-500 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                                                    "{testimonial.text}"
                                                </p>

                                                <div className="mt-auto flex flex-col items-center gap-4">
                                                    <div className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-500 ${isActive ? "border-primary shadow-md" : "border-border shadow-none"}`}>
                                                        <Image
                                                            src={testimonial.image}
                                                            alt={testimonial.author}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className={`text-base font-bold transition-colors duration-500 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                                                            {testimonial.author}
                                                        </h4>
                                                        <p className={`text-xs font-medium uppercase tracking-wider transition-colors duration-500 ${isActive ? "text-primary" : "text-muted-foreground/60"}`}>
                                                            {testimonial.role}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-12 z-30 bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full text-foreground hover:bg-primary hover:text-white transition-all shadow-lg hidden md:flex items-center justify-center"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-12 z-30 bg-background/80 backdrop-blur-sm border border-border p-3 rounded-full text-foreground hover:bg-primary hover:text-white transition-all shadow-lg hidden md:flex items-center justify-center"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-10 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
