"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Building2,
  MapPin,
  Bed,
  Bath,
  Move,
  Eye,
  Edit,
  Heart,
  UserCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { PropertyListing } from "@/types";

// Mock data - aligned with PropertyListing structure
const mockListings: PropertyListing[] = [
  {
    id: "1",
    publicId: "PROP-001",
    propertyId: "1001",
    title: "Modern 3BR Apartment in Downtown",
    slug: "modern-3br-apartment-downtown",
    source: "vendor",
    sourceName: "John Doe",
    uploadMethod: "direct_upload",
    uploadedByUserId: "user-1",
    listingType: "sale",
    category: "marketListings",
    description: "A beautiful modern apartment in the heart of the city.",
    houseType: "apartment",
    tenureType: "leasehold",
    propertySizeSqft: 1200,
    propertySizeSqm: 111,
    functionalSpace: {
      bedrooms: 3,
      bathrooms: 2,
      receptions: 1
    },
    location: {
      town: "Birmingham",
      postcode: "B1 1AA",
      fullAddress: "123 Main Street, Downtown",
      region: "West Midlands",
      countryCode: "GB",
      ukCountry: "England",
      outcode: "B1",
      incode: "1AA"
    },
    isListingLive: true,
    listedDate: "2024-01-10T10:00:00Z",
    soldStc: false,
    reserved: false,
    calculatedStatus: "available",
    price: 450000,
    currency: "GBP",
    occupancyStatus: "vacant",
    investmentMetrics: {},
    listingCardMetrics: {
      grossYield: 5.5,
      netYield: 4.2,
      bmvDiscountPercent: 0,
      netCashflowMonthly: 850,
      totalInvestment: 475000,
      rentalIncomePcm: 2200
    },
    locationSummary: {
      town: "Birmingham",
      region: "West Midlands",
      postcode: "B1 1AA",
      outcode: "B1"
    },
    functionalSpaceSummary: {
      bedrooms: 3,
      bathrooms: 2,
      receptions: 1
    },
    coverImageUrl: "/properties/birmingham/apt1/image-0-1024x1024.webp",
    images: ["/properties/birmingham/apt1/image-0-1024x1024.webp"],
    features: ["Concierge", "Parking", "Balcony"],
    agent: {
      name: "John Doe",
      rating: 5,
      reviews: 10
    }
  },
  {
    id: "2",
    publicId: "PROP-002",
    propertyId: "1002",
    title: "Luxury Villa with Pool",
    slug: "luxury-villa-pool",
    source: "vendor",
    sourceName: "Jane Smith",
    uploadMethod: "direct_upload",
    uploadedByUserId: "user-1",
    listingType: "sale",
    category: "marketListings",
    description: "Stunning luxury villa with a private pool.",
    houseType: "semi_detached",
    tenureType: "freehold",
    propertySizeSqft: 2500,
    propertySizeSqm: 232,
    functionalSpace: {
      bedrooms: 4,
      bathrooms: 3,
      receptions: 2
    },
    location: {
      town: "Coventry",
      postcode: "CV1 1AA",
      fullAddress: "456 Oak Avenue, Suburbs",
      region: "West Midlands",
      countryCode: "GB",
      ukCountry: "England",
      outcode: "CV1",
      incode: "1AA"
    },
    isListingLive: true,
    listedDate: "2024-01-08T10:00:00Z",
    soldStc: false,
    reserved: false,
    calculatedStatus: "available",
    price: 850000,
    currency: "GBP",
    occupancyStatus: "vacant",
    investmentMetrics: {},
    listingCardMetrics: {
      grossYield: 4.8,
      netYield: 3.5,
      bmvDiscountPercent: 5,
      netCashflowMonthly: 1200,
      totalInvestment: 900000,
      rentalIncomePcm: 3500
    },
    locationSummary: {
      town: "Coventry",
      region: "West Midlands",
      postcode: "CV1 1AA",
      outcode: "CV1"
    },
    functionalSpaceSummary: {
      bedrooms: 4,
      bathrooms: 3,
      receptions: 2
    },
    coverImageUrl: "/properties/coventry/apt1/image-0.webp",
    images: ["/properties/coventry/apt1/image-0.webp"],
    features: ["Pool", "Garden", "Garage"],
    agent: {
      name: "Jane Smith",
      rating: 4.8,
      reviews: 15
    }
  }
];

export default function ListingsPage() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 pb-10 border-b border-border/50">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="h-10 w-1 bg-primary rounded-full"></div>
            <h1 className="text-4xl font-black text-foreground uppercase tracking-tight">
              <span className="text-outline text-foreground dark:text-white">My</span> Listings
            </h1>
          </div>
          <p className="text-muted-foreground font-medium italic pl-5">
            Manage your property portfolio and performance
          </p>
        </div>
        <Button asChild className="primary-btn rounded-xl font-black uppercase tracking-widest text-[11px] px-8 py-6 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
          <Link href="/dashboard/listings/new">
            <Plus className="w-5 h-5 mr-2" />
            Post New Property
          </Link>
        </Button>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockListings.map((listing, idx) => (
          <div key={idx} className="group animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="bg-card rounded-4xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
              {/* Image Section */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={listing.coverImageUrl || "/img/placeholder-property.jpg"}
                  alt={listing.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 items-start z-10">
                  <span className="bg-primary/90 text-white text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg backdrop-blur-sm">
                    {listing.listingType}
                  </span>
                  {listing.listingCardMetrics.grossYield && (
                    <span className="bg-emerald-500/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-lg border border-emerald-400/30 backdrop-blur-sm">
                      Yield: {listing.listingCardMetrics.grossYield}%
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900 capitalize font-bold px-3 py-1 rounded-full shadow-lg border-none">
                    {listing.calculatedStatus?.replace("_", " ")}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 grow flex flex-col">
                {/* Category Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-primary/20">
                    {listing.category?.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-border">
                    {listing.houseType?.replace('_', ' ')}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1 uppercase tracking-tight">
                  {listing.title}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground text-sm font-bold mb-4 italic">
                  <MapPin size={14} className="text-primary" />
                  {listing.location?.town}, {listing.location?.postcode}
                </div>

                {/* Performance Metrics */}
                <div className="space-y-3 mb-6 p-4 rounded-2xl bg-muted/30 border border-border/50">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-muted-foreground">Asking Price</span>
                    <span className="text-foreground">{formatPrice(listing.price || 0)}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-muted-foreground">Rental Income</span>
                    <span className="text-emerald-600">{formatPrice(listing.listingCardMetrics.rentalIncomePcm || 0)} pcm</span>
                  </div>
                </div>

                {/* Specs Row */}
                <div className="flex justify-between items-center pt-4 border-t border-border mt-auto">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1.5">
                      <Bed size={16} className="text-primary" />
                      <span className="text-sm font-black text-foreground">{listing.functionalSpace?.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath size={16} className="text-primary" />
                      <span className="text-sm font-black text-foreground">{listing.functionalSpace?.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Move size={16} className="text-primary" />
                      <span className="text-sm font-black text-foreground">{listing.propertySizeSqft}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" asChild className="h-9 w-9 rounded-xl bg-muted/50 border-none hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm">
                      <Link href={`/dashboard/listings/edit/${listing.id}`} title="Edit Listing">
                        <Edit size={16} />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="h-9 w-9 rounded-xl bg-muted/50 border-none hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm">
                      <Link href={`/property-listings/${listing.slug}`} title="View public page">
                        <Eye size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mockListings.length === 0 && (
        <Card className="rounded-4xl border-border/50 shadow-2xl overflow-hidden bg-muted/10 border-dashed">
          <CardContent className="p-20 text-center">
            <div className="h-20 w-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3 uppercase tracking-tight">
              No Listings Found
            </h3>
            <p className="text-muted-foreground mb-10 max-w-sm mx-auto font-medium italic">
              Your property portfolio is currently empty. Start growing your investments today.
            </p>
            <Button asChild className="primary-btn px-10 py-6 rounded-xl font-black uppercase tracking-widest text-xs">
              <Link href="/dashboard/listings/new">
                <Plus className="w-5 h-5 mr-2" />
                Post Your First Property
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
