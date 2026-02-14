"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PropertyUtilityActionsProps {
    propertyId: string;
    title: string;
    slug: string;
}

const PropertyUtilityActions = ({ propertyId, title, slug }: PropertyUtilityActionsProps) => {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const savedProperties = JSON.parse(localStorage.getItem('asancha_wishlist') || '[]');
        setIsSaved(savedProperties.includes(propertyId));
    }, [propertyId]);

    const toggleWishlist = () => {
        const savedProperties = JSON.parse(localStorage.getItem('asancha_wishlist') || '[]');
        let newWishlist;

        if (isSaved) {
            newWishlist = savedProperties.filter((id: string) => id !== propertyId);
        } else {
            newWishlist = [...savedProperties, propertyId];
        }

        localStorage.setItem('asancha_wishlist', JSON.stringify(newWishlist));
        setIsSaved(!isSaved);
    };

    const handleShare = async () => {
        const url = `${window.location.origin}/property-listings/${slug}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Check out this property: ${title}`,
                    text: `Found this interesting property on Asancha Properties: ${title}`,
                    url: url,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    return (
        <div className="absolute top-8 right-8 flex gap-3 pointer-events-auto z-20">
            <button
                onClick={toggleWishlist}
                className={`h-12 w-12 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 cursor-pointer ${isSaved ? 'bg-primary text-white border-primary' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                title={isSaved ? "Remove from wishlist" : "Save to wishlist"}
            >
                <Heart size={20} className={isSaved ? "fill-current" : ""} />
            </button>
            <button
                onClick={handleShare}
                className="h-12 w-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                title="Share property"
            >
                <Share2 size={20} />
            </button>
        </div>
    );
};

export default PropertyUtilityActions;
