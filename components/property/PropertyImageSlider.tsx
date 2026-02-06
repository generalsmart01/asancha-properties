"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Assuming you have a utility for classnames

interface PropertyImageSliderProps {
    images: string[];
    title: string;
    children?: React.ReactNode;
}

const PropertyImageSlider = ({ images, title, children }: PropertyImageSliderProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true });
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
    });

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();
        emblaMainApi.on('select', onSelect);
        emblaMainApi.on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollPrev();
    }, [emblaMainApi]);

    const scrollNext = useCallback(() => {
        if (emblaMainApi) emblaMainApi.scrollNext();
    }, [emblaMainApi]);

    return (
        <div className="space-y-4">
            {/* Main Slider */}
            <div className="relative group">
                <div className="overflow-hidden rounded-4xl shadow-xl aspect-video" ref={emblaMainRef}>
                    <div className="flex touch-pan-y h-full">
                        {images.map((img, idx) => (
                            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={idx}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`${title} - Image ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={idx === 0}
                                    />
                                    {/* Gradient overlay for text visibility */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overlays (Children) */}
                {children}

                {/* Navigation Buttons */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                    onClick={scrollPrev}
                >
                    <ChevronLeft size={24} />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                    onClick={scrollNext}
                >
                    <ChevronRight size={24} />
                </Button>
            </div>

            {/* Thumbnails */}
            <div className="relative group/thumbs">
                <div className="overflow-hidden" ref={emblaThumbsRef}>
                    <div className="flex gap-3">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "flex-[0_0_20%] md:flex-[0_0_15%] min-w-0 relative aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2",
                                    idx === selectedIndex ? "border-primary opacity-100 ring-2 ring-primary/20" : "border-transparent opacity-60 hover:opacity-100"
                                )}
                                onClick={() => onThumbClick(idx)}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Thumb Nav Buttons */}
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 flex items-center justify-center opacity-0 group-hover/thumbs:opacity-100 transition-opacity disabled:opacity-0"
                    onClick={() => emblaThumbsApi?.scrollPrev()}
                    disabled={!emblaThumbsApi?.canScrollPrev()}
                >
                    <ChevronLeft size={16} />
                </button>
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 flex items-center justify-center opacity-0 group-hover/thumbs:opacity-100 transition-opacity disabled:opacity-0"
                    onClick={() => emblaThumbsApi?.scrollNext()}
                    disabled={!emblaThumbsApi?.canScrollNext()}
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default PropertyImageSlider;
