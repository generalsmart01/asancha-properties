"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Search, MapPin, Bed, Bath, Move, Home, Building2, Gem, ListFilter, Eye, X, Loader, AlertCircle, User, UserCircle, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';
import { PropertyListing } from '@/types';

const PropertyListingPage = () => {
    const [properties, setProperties] = useState<PropertyListing[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [cityFilter, setCityFilter] = useState('All Cities');
    const [typeFilter, setTypeFilter] = useState('All Categories');
    const [statusFilter, setStatusFilter] = useState('All Listings');
    const [listingTypeFilter, setListingTypeFilter] = useState('All Types');
    const [listingCategoryFilter, setListingCategoryFilter] = useState('All Categories');
    const [bedsFilter, setBedsFilter] = useState('Bedrooms');
    const [bathsFilter, setBathsFilter] = useState('Bathrooms');
    const [sortBy, setSortBy] = useState('Newest');
    const [wishlist, setWishlist] = useState<string[]>([]);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 3;

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/properties');
                if (!response.ok) throw new Error('Failed to fetch properties');
                const data = await response.json();
                setProperties(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProperties();

        // Load wishlist from localStorage
        const savedWishlist = localStorage.getItem('property_wishlist');
        if (savedWishlist) {
            try {
                setWishlist(JSON.parse(savedWishlist));
            } catch (e) {
                console.error('Failed to parse wishlist', e);
            }
        }
    }, []);

    useEffect(() => {
        // Save wishlist to localStorage
        localStorage.setItem('property_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleWishlist = (id: string) => {
        setWishlist(prev =>
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    const handleShare = async (property: PropertyListing) => {
        const shareData = {
            title: property.title,
            text: `Check out this property: ${property.title} in ${property.location.town}`,
            url: `${window.location.origin}/property-listings/${property.slug}`,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error('Error sharing', err);
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(shareData.url);
                alert('Link copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy', err);
            }
        }
    };

    const featuredProperties = useMemo(() => properties.slice(0, 3), [properties]);


    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            maximumFractionDigits: 0,
        }).format(price);
    };

    const filteredProperties = useMemo(() => {
        let filtered = [...properties];

        // Search Filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.location.town.toLowerCase().includes(query) ||
                p.location.fullAddress?.toLowerCase().includes(query)
            );
        }

        // City Filter
        if (cityFilter !== 'All Cities') {
            filtered = filtered.filter(p => p.location.town === cityFilter);
        }

        // Type Filter
        if (typeFilter !== 'All Categories') {
            const mappedType = typeFilter.toLowerCase().replace(' ', '_');
            filtered = filtered.filter(p => p.houseType === mappedType);
        }

        // Status Filter
        if (statusFilter !== 'All Listings') {
            if (statusFilter === 'For Sale') filtered = filtered.filter(p => p.listingType === 'sale');
            else if (statusFilter === 'For Rent') filtered = filtered.filter(p => p.listingType === 'rent');
            else if (statusFilter === 'Investment') filtered = filtered.filter(p => p.category === 'bmv');
        }

        // Listing Type Filter
        if (listingTypeFilter !== 'All Types') {
            const type = listingTypeFilter.toLowerCase();
            filtered = filtered.filter(p => p.listingType === type);
        }

        // Listing Category Filter
        if (listingCategoryFilter !== 'All Categories') {
            const category = listingCategoryFilter === 'Off-Market' ? 'offMarket' :
                listingCategoryFilter === 'BMV' ? 'bmv' :
                    listingCategoryFilter === 'Market' ? 'marketListings' : 'manual';
            filtered = filtered.filter(p => p.category === category);
        }

        // Beds Filter
        if (bedsFilter !== 'Bedrooms') {
            const minBeds = parseInt(bedsFilter);
            if (bedsFilter === '5+') {
                filtered = filtered.filter(p => p.functionalSpace.bedrooms >= 5);
            } else {
                filtered = filtered.filter(p => p.functionalSpace.bedrooms === minBeds);
            }
        }

        // Baths Filter
        if (bathsFilter !== 'Bathrooms') {
            const minBaths = parseInt(bathsFilter);
            if (bathsFilter === '5+') {
                filtered = filtered.filter(p => p.functionalSpace.bathrooms >= 5);
            } else {
                filtered = filtered.filter(p => p.functionalSpace.bathrooms === minBaths);
            }
        }

        // Sorting
        if (sortBy === 'Price: Low to High') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'Newest') {
            filtered.sort((a, b) => new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime());
        }

        return filtered;
    }, [properties, searchQuery, cityFilter, typeFilter, statusFilter, listingTypeFilter, listingCategoryFilter, bedsFilter, bathsFilter, sortBy]);


    // Reset to first page when any filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, cityFilter, typeFilter, statusFilter, listingTypeFilter, listingCategoryFilter, bedsFilter, bathsFilter, sortBy]);

    const handleClearFilters = () => {
        setSearchQuery('');
        setCityFilter('All Cities');
        setTypeFilter('All Categories');
        setStatusFilter('All Listings');
        setListingTypeFilter('All Types');
        setListingCategoryFilter('All Categories');
        setBedsFilter('Bedrooms');
        setBathsFilter('Bathrooms');
        setSortBy('Newest');
        setCurrentPage(1);
    };

    const paginatedProperties = useMemo(() => {
        const startIndex = (currentPage - 1) * propertiesPerPage;
        return filteredProperties.slice(startIndex, startIndex + propertiesPerPage);
    }, [filteredProperties, currentPage]);

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

    return (
        <main className="grow">
            {/* ##### Advance Search Area Start ##### */}
            <section className="py-12 bg-muted/30 border-y border-border/50 relative overflow-hidden" id="south-search-area">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-card p-8 rounded-4xl shadow-2xl border border-border/50">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col items-start justify-start mb-2">
                                    <div className="flex flex-row items-center gap-4 mb-4">
                                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Search size={24} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-foreground">
                                            <span className="capitalize text-outline text-foreground dark:text-white text-left">Find Your Ideal Investment</span>
                                        </h2>
                                    </div>
                                    <span className="h-1 w-20 bg-primary rounded-full mb-6 ml-16"></span>
                                </div>
                                <button
                                    onClick={handleClearFilters}
                                    className="text-sm font-semibold text-muted-foreground bg-primary/10 px-4 py-2 rounded-full hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
                                >
                                    <X size={16} />
                                    Clear All
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-6">
                                    {/* Keyword Search */}
                                    <div className="space-y-2 lg:col-span-1">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Location / Keyword</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <input
                                                type="text"
                                                className="w-full md:min-w-[30vw] bg-muted/50 border-none rounded-[10px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300"
                                                placeholder="e.g. London, Semi-detached"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* City Select */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">City</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-[10px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
                                                value={cityFilter}
                                                onChange={(e) => setCityFilter(e.target.value)}
                                            >
                                                <option>All Cities</option>
                                                <option>Birmingham</option>
                                                <option>Coventry</option>
                                                <option>Northamptonshire</option>
                                                <option>Leicester</option>
                                                <option>Peterborough</option>
                                                <option>Northampton</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Category Select */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Type</label>
                                        <div className="relative">
                                            <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-[10px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
                                                value={typeFilter}
                                                onChange={(e) => setTypeFilter(e.target.value)}
                                            >
                                                <option>All Categories</option>
                                                <option>Apartment</option>
                                                <option>House</option>
                                                <option>Terraced</option>
                                                <option>Flat</option>
                                                <option>Detached</option>
                                                <option>Semi-detached</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Listing Type Select */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Listing Type</label>
                                        <div className="relative">
                                            <ListFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-[10px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
                                                value={listingTypeFilter}
                                                onChange={(e) => setListingTypeFilter(e.target.value)}
                                            >
                                                <option>All Types</option>
                                                <option>Sale</option>
                                                <option>Rent</option>
                                                <option>Refurbishment</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Listing Category Select */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Category</label>
                                        <div className="relative">
                                            <Gem className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-[10px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
                                                value={listingCategoryFilter}
                                                onChange={(e) => setListingCategoryFilter(e.target.value)}
                                            >
                                                <option>All Categories</option>
                                                <option>Off-Market</option>
                                                <option>BMV</option>
                                                <option>Market</option>
                                                <option>Manual</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Bedrooms */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Bedrooms</label>
                                        <div className="relative">
                                            <Bed className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-[10px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
                                                value={bedsFilter}
                                                onChange={(e) => setBedsFilter(e.target.value)}
                                            >
                                                <option>Bedrooms</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5+</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Bathrooms */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Bathrooms</label>
                                        <div className="relative">
                                            <Bath className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-[10px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
                                                value={bathsFilter}
                                                onChange={(e) => setBathsFilter(e.target.value)}
                                            >
                                                <option>Bathrooms</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5+</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Sort By */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Sort By</label>
                                        <div className="relative">
                                            <ListFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-[10px] py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
                                                value={sortBy}
                                                onChange={(e) => setSortBy(e.target.value)}
                                            >
                                                <option>Newest</option>
                                                <option>Price: Low to High</option>
                                                <option>Price: High to Low</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10 h-14">
                                        <span className="text-sm font-bold text-foreground">{filteredProperties.length} Properties Found</span>
                                        <Loader className="text-primary animate-spin" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ##### Listing Content Wrapper Area Start ##### */}
            <section className="py-12 bg-background" id="property-listings">
                <div className="container mx-auto px-4">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader className="text-primary animate-spin mb-4" size={48} />
                            <p className="text-muted-foreground font-medium">Loading properties...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 bg-destructive/5 rounded-4xl border border-dashed border-destructive/20">
                            <AlertCircle className="text-destructive mx-auto mb-6" size={48} />
                            <h3 className="text-2xl font-bold text-foreground mb-4">Error Loading Properties</h3>
                            <p className="text-muted-foreground mb-8">{error}</p>
                            <button onClick={() => window.location.reload()} className="primary-btn inline-flex items-center gap-2 px-8">
                                Try Again
                            </button>
                        </div>
                    ) : filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {paginatedProperties.map((property, idx) => (
                                <div key={property.id} className="group animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: `${(idx % 3) * 100}ms` }}>
                                    <div className="bg-card rounded-4xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                                        <div className="relative h-60 w-full overflow-hidden">
                                            <Image
                                                src={property.coverImageUrl}
                                                alt={property.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 flex flex-col gap-2 items-start p-1 z-10">
                                                <span className="bg-primary/90 text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                                    {property.listingType}
                                                </span>
                                                {property.listingCardMetrics.grossYield && (
                                                    <span className="bg-emerald-500/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-lg border border-emerald-400/30 backdrop-blur-sm">
                                                        Gross Yield: {property.listingCardMetrics.grossYield}%
                                                    </span>
                                                )}
                                                {property.listingCardMetrics.netYield && (
                                                    <span className="bg-emerald-600/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-lg border border-emerald-500/30 backdrop-blur-sm">
                                                        Net Yield: {property.listingCardMetrics.netYield}%
                                                    </span>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => toggleWishlist(property.id)}
                                                className={`absolute top-4 right-4 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border backdrop-blur-md z-10 ${wishlist.includes(property.id)
                                                    ? 'bg-blue-500 text-white border-blue-400 scale-110'
                                                    : 'bg-background/60 text-foreground border-border/50 hover:bg-background/80 hover:scale-105'
                                                    }`}
                                                title={wishlist.includes(property.id) ? "Remove from wishlist" : "Add to wishlist"}
                                            >
                                                <Heart size={20} className={wishlist.includes(property.id) ? 'fill-current' : ''} />
                                            </button>
                                        </div>
                                        <div className="p-6 grow flex flex-col">
                                            {/* Strategy Badge Area */}
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {property.strategyBadge && (
                                                    <span className="bg-primary/10 text-primary text-[12px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-primary/20">
                                                        {property.strategyBadge}
                                                    </span>
                                                )}
                                                <span className="bg-amber-500/10 text-amber-600 text-[12px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-amber-500/20">
                                                    {property.category === 'offMarket' ? 'Off-Market' :
                                                        property.category === 'marketListings' ? 'Market' :
                                                            property.category === 'bmv' ? 'BMV' : 'Manual'}
                                                </span>
                                                <span className="bg-muted text-muted-foreground text-[12px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-border">
                                                    {property.houseType.replace('_', ' ')}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">{property.title}</h3>
                                            <div className="flex flex-wrap items-center justify-between gap-y-1 mb-4">
                                                <div className="flex items-center gap-2 text-muted-foreground text-sm font-bold">
                                                    <MapPin size={12} className="text-primary" />
                                                    {property.location.town}, {property.location.postcode}
                                                </div>
                                                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                                    <span className="text-xs"><UserCircle size={18} /></span>
                                                    <span className="font-bold text-foreground uppercase tracking-tight">
                                                        {property.sourceName || property.source.replace('_', ' ')}
                                                    </span>
                                                </span>
                                            </div>

                                            {/* Financial Grid */}
                                            <div className="space-y-4 mb-4 text-xs">
                                                <div className='flex items-center justify-between text-[14px]'>
                                                    <span className="text-muted-foreground block uppercase tracking-wider font-bold">Asking Price</span>
                                                    <span className="font-bold text-foreground">{formatPrice(property.price)}</span>
                                                </div>
                                                {property.valuationAmount && (
                                                    <div className='flex items-center justify-between text-[14px]'>
                                                        <span className="text-muted-foreground block uppercase tracking-wider font-bold">{property.valuationSource || 'Market'} Val.</span>
                                                        <span className="font-bold text-foreground">{formatPrice(property.valuationAmount)}</span>
                                                    </div>
                                                )}
                                                {property.listingCardMetrics.totalInvestment && (
                                                    <div className='flex items-center justify-between text-[14px]'>
                                                        <span className="text-muted-foreground block uppercase tracking-wider font-bold">Total Inv.</span>
                                                        <span className="font-bold text-foreground">{formatPrice(property.listingCardMetrics.totalInvestment)}</span>
                                                    </div>
                                                )}
                                                {property.listingCardMetrics.rentalIncomePcm && (
                                                    <div className='flex items-center justify-between text-[14px]'>
                                                        <span className="text-muted-foreground block uppercase tracking-wider font-bold">Rent (pcm)</span>
                                                        <span className="font-bold text-foreground">{formatPrice(property.listingCardMetrics.rentalIncomePcm)}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                                                {/* Bed/Bath/Sqft - Condensed */}
                                                <div className="flex gap-3">
                                                    <div className="flex items-center gap-1">
                                                        <Bed size={16} className="text-primary" />
                                                        <span className="text-[14px] font-bold text-foreground">{property.functionalSpace.bedrooms}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Bath size={16} className="text-primary" />
                                                        <span className="text-[14px] font-bold text-foreground">{property.functionalSpace.bathrooms}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Move size={16} className="text-primary" />
                                                        <span className="text-[14px] font-bold text-foreground">{property.propertySizeSqft}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleShare(property)}
                                                        className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-muted hover:text-primary transition-all duration-300 cursor-pointer"
                                                        title="Share Property"
                                                    >
                                                        <Share2 size={18} />
                                                    </button>
                                                    <Link
                                                        href={`/property-listings/${property.slug}`}
                                                        className="bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary-hover text-[14px] font-black uppercase tracking-widest flex items-center gap-1 group/link transition-all"
                                                    >
                                                        Details
                                                        <Eye size={12} className="group-hover/link:scale-110 transition-transform" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-muted/20 rounded-4xl border border-dashed border-border">
                            <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="text-muted-foreground" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">No Properties Found</h3>
                            <p className="text-muted-foreground mb-8">Try adjusting your filters or search query to find what you&apos;re looking for.</p>
                            <button
                                onClick={handleClearFilters}
                                className="primary-btn inline-flex items-center gap-2 px-8"
                            >
                                <X size={18} />
                                Clear All Filters
                            </button>
                        </div>
                    )}


                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8">
                            <nav aria-label="Page navigation">
                                <ul className="flex flex-wrap gap-2 items-center">
                                    <li>
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className="h-10 px-4 flex items-center justify-center rounded-lg bg-card border border-border text-foreground font-bold hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                                        >
                                            Previous
                                        </button>
                                    </li>

                                    {[...Array(totalPages)].map((_, i) => {
                                        const pageNumber = i + 1;
                                        return (
                                            <li key={pageNumber}>
                                                <button
                                                    onClick={() => setCurrentPage(pageNumber)}
                                                    className={`h-10 w-10 flex items-center justify-center rounded-lg font-bold transition-all duration-300 cursor-pointer ${currentPage === pageNumber
                                                            ? 'bg-primary text-white shadow-lg scale-110 shadow-primary/20'
                                                            : 'bg-card border border-border text-foreground hover:bg-muted'
                                                        }`}
                                                >
                                                    {pageNumber}
                                                </button>
                                            </li>
                                        );
                                    })}

                                    <li>
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className="h-10 px-4 flex items-center justify-center rounded-lg bg-card border border-border text-foreground font-bold hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default PropertyListingPage;