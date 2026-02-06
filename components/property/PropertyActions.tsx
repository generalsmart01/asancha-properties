"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface PropertyActionsProps {
    property: {
        title: string;
        address: string;
        images: string[];
        price: number;
    };
}

const PropertyActions = ({ property }: PropertyActionsProps) => {
    const [offerPrice, setOfferPrice] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    return (
        <div className="grid grid-cols-1 gap-3">
            {/* Make an Offer Modal */}
            <Dialog>
                <DialogTrigger asChild>
                    <button className="w-full bg-primary text-white h-14 rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300">
                        Make an Offer
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Make an offer, what have you got to lose?</DialogTitle>
                        <DialogDescription>
                            Close(X) to close the modal
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-4 py-4">
                        <div className="relative h-20 w-24 rounded-lg overflow-hidden shrink-0">
                            <Image
                                src={property.images[0]}
                                alt={property.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-foreground">{property.title}</h4>
                            <p className="text-xs text-muted-foreground">{property.address}</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="offer-price">Your Offer</Label>
                            <Input
                                id="offer-price"
                                placeholder="Please enter your offer here"
                                value={offerPrice}
                                onChange={(e) => setOfferPrice(e.target.value)}
                            />
                        </div>
                        <Button className="w-full font-bold uppercase tracking-widest">Submit</Button>
                    </div>
                </DialogContent>
            </Dialog>

            <div className="grid grid-cols-2 gap-3">
                {/* Reserve Modal */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="w-full bg-secondary text-secondary-foreground h-12 rounded-xl font-bold uppercase tracking-wider text-xs border border-border hover:bg-secondary/80 transition-all">
                            Reserve
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Payment Confirmation</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <p className="text-sm font-medium text-foreground">You wish to reserve this property</p>
                            <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                                <div className="relative h-16 w-20 rounded-md overflow-hidden shrink-0">
                                    <Image
                                        src={property.images[0]}
                                        alt={property.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-foreground line-clamp-2">{property.address}</p>
                                </div>
                            </div>
                            <div className="text-xs text-muted-foreground bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-100 dark:border-blue-900 leading-relaxed">
                                <span className="font-bold text-blue-700 dark:text-blue-400">Sourcing Fee:</span> The standard sourcing fee for each deal is 2.4% of the purchase price (incl. UK VAT) with a minimum of £3,600 (incl. UK VAT). Reserving this deal simply requires a fully refundable upfront reservation fee, with the balance paid later in stages if you proceed with the purchase.
                            </div>
                            <div className="flex items-center space-x-2 pt-2">
                                <Checkbox
                                    id="terms"
                                    checked={acceptedTerms}
                                    onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                                />
                                <Label htmlFor="terms" className="text-xs cursor-pointer">Accept Terms & Conditions</Label>
                            </div>
                            <Button className="w-full font-bold uppercase tracking-widest" disabled={!acceptedTerms}>
                                Pay Now (£100)
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>

                <button className="w-full bg-secondary text-secondary-foreground h-12 rounded-xl font-bold uppercase tracking-wider text-xs border border-border hover:bg-secondary/80 transition-all">
                    Apply for Finance
                </button>
            </div>
        </div>
    );
};

export default PropertyActions;
