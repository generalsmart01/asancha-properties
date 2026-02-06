"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, MapPin, Bed, Bath, Move, Home, Building2, Gem, ListFilter, Eye, X, Loader } from 'lucide-react';
import data from '@/data/mock-data.json';
import Link from 'next/link';

const PropertyListingPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cityFilter, setCityFilter] = useState('All Cities');
    const [typeFilter, setTypeFilter] = useState('All Categories');
    const [statusFilter, setStatusFilter] = useState('All Listings');
    const [bedsFilter, setBedsFilter] = useState('Bedrooms');
    const [bathsFilter, setBathsFilter] = useState('Bathrooms');
    const [sortBy, setSortBy] = useState('Newest');

    const featuredProperties = data.properties.slice(0, 3);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            maximumFractionDigits: 0,
        }).format(price);
    };

    const filteredProperties = useMemo(() => {
        let filtered = [...data.properties];

        // Search Filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(query) ||
                p.location.toLowerCase().includes(query) ||
                p.address.toLowerCase().includes(query)
            );
        }

        // City Filter
        if (cityFilter !== 'All Cities') {
            filtered = filtered.filter(p => p.location.includes(cityFilter));
        }

        // Type Filter
        if (typeFilter !== 'All Categories') {
            filtered = filtered.filter(p => p.propertyType === typeFilter);
        }

        // Status Filter
        if (statusFilter !== 'All Listings') {
            filtered = filtered.filter(p => p.status.toLowerCase().includes(statusFilter.toLowerCase().replace('All Listings', '')));
        }

        // Beds Filter
        if (bedsFilter !== 'Bedrooms') {
            const minBeds = parseInt(bedsFilter);
            if (bedsFilter === '5+') {
                filtered = filtered.filter(p => p.bedrooms >= 5);
            } else {
                filtered = filtered.filter(p => p.bedrooms === minBeds);
            }
        }

        // Baths Filter
        if (bathsFilter !== 'Bathrooms') {
            const minBaths = parseInt(bathsFilter);
            if (bathsFilter === '5+') {
                filtered = filtered.filter(p => p.bathrooms >= 5);
            } else {
                filtered = filtered.filter(p => p.bathrooms === minBaths);
            }
        }

        // Sorting
        if (sortBy === 'Price: Low to High') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'Newest') {
            filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        }

        return filtered;
    }, [searchQuery, cityFilter, typeFilter, statusFilter, bedsFilter, bathsFilter, sortBy]);

    const handleClearFilters = () => {
        setSearchQuery('');
        setCityFilter('All Cities');
        setTypeFilter('All Categories');
        setStatusFilter('All Listings');
        setBedsFilter('Bedrooms');
        setBathsFilter('Bathrooms');
        setSortBy('Newest');
    };

    return (
        <main className="grow">
            {/* ##### Featured Properties Area Start ##### */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center mb-16 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                            <span className="capitalize text-outline text-foreground dark:text-white">Featured Property Investments</span>
                        </h1>
                        <span className="h-1 w-24 bg-primary rounded-full"></span>
                        <p className="mt-8 text-muted-foreground text-lg italic max-w-2xl">Discover our curated selection of high-yield and exclusive opportunities.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProperties.map((property, idx) => (
                            <div key={property.id} className="group animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: `${(idx + 1) * 200}ms` }}>
                                <div className="bg-card rounded-4xl overflow-hidden shadow-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={property.images[0]}
                                            alt={property.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Featured</span>
                                        </div>
                                        <div className="absolute bottom-4 right-4">
                                            <span className="bg-background/80 backdrop-blur-md text-foreground text-sm font-bold px-4 py-2 rounded-xl shadow-lg border border-border/50">
                                                {formatPrice(property.price)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-grow">
                                        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                                            <Gem size={14} />
                                            High ROI Opportunity
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1">{property.title}</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                                            <MapPin size={14} className="text-primary" />
                                            {property.location}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed italic line-clamp-2 text-sm">{property.description}</p>
                                    </div>
                                    <div className="px-8 pb-8">
                                        <div className="h-px w-full bg-border mb-6"></div>
                                        <div className="grid grid-cols-3 gap-4 mb-6">
                                            <div className="flex flex-col items-center gap-1">
                                                <Bed size={18} className="text-primary" />
                                                <span className="text-xs font-bold text-foreground">{property.bedrooms} Bed</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-1 border-x border-border">
                                                <Bath size={18} className="text-primary" />
                                                <span className="text-xs font-bold text-foreground">{property.bathrooms} Bath</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <Move size={18} className="text-primary" />
                                                <span className="text-xs font-bold text-foreground">{property.sqft} sqft</span>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/property-listings/${property.slug}`}
                                            className="w-full primary-btn py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                        >
                                            View Details
                                            <Eye size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ##### Advance Search Area Start ##### */}
            <section className="py-24 bg-muted/30 border-y border-border/50 relative overflow-hidden" id="south-search-area">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-card p-8 md:p-12 rounded-4xl shadow-2xl border border-border/50">
                            <div className="flex items-center justify-between mb-10">
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
                                    className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <X size={16} />
                                    Clear All
                                </button>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Keyword Search */}
                                    <div className="space-y-2 lg:col-span-1">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Location / Keyword</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <input
                                                type="text"
                                                className="w-full bg-muted/50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300"
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
                                                className="w-full bg-muted/50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
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
                                                className="w-full bg-muted/50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
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

                                    {/* Status Select */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Status</label>
                                        <div className="relative">
                                            <ListFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
                                                value={statusFilter}
                                                onChange={(e) => setStatusFilter(e.target.value)}
                                            >
                                                <option>All Listings</option>
                                                <option>For Sale</option>
                                                <option>For Rent</option>
                                                <option>Investment</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                                    {/* Bedrooms */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-muted-foreground ml-1">Bedrooms</label>
                                        <div className="relative">
                                            <Bed className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                            <select
                                                className="w-full bg-muted/50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
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
                                                className="w-full bg-muted/50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
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
                                                className="w-full bg-muted/50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/50 text-foreground transition-all duration-300 appearance-none"
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
            <section className="py-24 bg-background" id="property-listings">
                <div className="container mx-auto px-4">
                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {filteredProperties.map((property, idx) => (
                                <div key={property.id} className="group animate-in fade-in slide-in-from-bottom-5 duration-700" style={{ animationDelay: `${(idx % 3) * 100}ms` }}>
                                    <div className="bg-card rounded-4xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                                        <div className="relative h-60 w-full overflow-hidden">
                                            <Image
                                                src={property.images[0]}
                                                alt={property.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute bottom-4 right-4">
                                                <span className="bg-background/80 backdrop-blur-md text-foreground text-sm font-bold px-4 py-2 rounded-xl shadow-lg border border-border/50">
                                                    {formatPrice(property.price)}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                                    {property.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col">
                                            {/* Review: Badge/Status Area */}
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {property.badges?.map((badge, i) => (
                                                    <span key={i} className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider border border-primary/20">
                                                        {badge}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">{property.address}</h3>
                                            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-4">
                                                <MapPin size={12} className="text-primary" />
                                                {property.location}
                                            </div>

                                            {/* Financial Grid */}
                                            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-xs">
                                                <div>
                                                    <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Asking Price</span>
                                                    <span className="font-bold text-foreground">{formatPrice(property.price)}</span>
                                                </div>
                                                {property.zooplaValuation && (
                                                    <div>
                                                        <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Zoopla Val.</span>
                                                        <span className="font-bold text-foreground">{formatPrice(property.zooplaValuation)}</span>
                                                    </div>
                                                )}
                                                {property.totalInvestment && (
                                                    <div>
                                                        <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Total Inv.</span>
                                                        <span className="font-bold text-foreground">{formatPrice(property.totalInvestment)}</span>
                                                    </div>
                                                )}
                                                {property.rentalIncome && (
                                                    <div>
                                                        <span className="text-muted-foreground block text-[10px] uppercase tracking-wider">Rent (pcm)</span>
                                                        <span className="font-bold text-foreground">{formatPrice(property.rentalIncome)}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                                                {/* Bed/Bath/Sqft - Condensed */}
                                                <div className="flex gap-3">
                                                    <div className="flex items-center gap-1">
                                                        <Bed size={14} className="text-primary" />
                                                        <span className="text-[10px] font-bold text-foreground">{property.bedrooms}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Bath size={14} className="text-primary" />
                                                        <span className="text-[10px] font-bold text-foreground">{property.bathrooms}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Move size={14} className="text-primary" />
                                                        <span className="text-[10px] font-bold text-foreground">{property.sqft}</span>
                                                    </div>
                                                </div>

                                                <Link
                                                    href={`/property-listings/${property.slug}`}
                                                    className="bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary-hover text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group/link transition-all"
                                                >
                                                    Details
                                                    <Eye size={12} className="group-hover/link:scale-110 transition-transform" />
                                                </Link>
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

                    <div className="flex justify-center">
                        <nav aria-label="Page navigation">
                            <ul className="flex gap-2">
                                <li className="active"><span className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold cursor-pointer transition-colors hover:bg-primary-hover">1</span></li>
                                {/* Pagination would be dynamic in a real app */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PropertyListingPage;