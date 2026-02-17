"use client";

import { useState } from "react";
import {
    PoundSterling,
    Upload,
    X,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Home,
    Banknote,
    Activity,
    Image as ImageIcon,
    Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import QuillEditor from "@/components/ui/QuillEditor";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { HouseType, ListingType, ListingCategory, Region, PropertyStatus, TenureType, PropertySource, UploadMethod, StrategyBadge, ValuationSource, OccupancyStatus } from "@/types";
import { cn } from "@/lib/utils";

interface PropertyFormProps {
    initialData?: any;
    onSubmit: (data: any) => void;
    submitButtonText: string;
}

const STEPS = [
    { id: 1, title: "Basic Info", icon: Home },
    { id: 2, title: "Location", icon: MapPin },
    { id: 3, title: "Specs", icon: Activity },
    { id: 4, title: "Financials", icon: Banknote },
    { id: 5, title: "Status", icon: Activity },
    { id: 6, title: "Media & More", icon: ImageIcon },
];

export default function PropertyForm({ initialData, onSubmit, submitButtonText }: PropertyFormProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState(initialData || {
        title: "",
        slug: "",
        source: "property_owner" as PropertySource,
        sourceName: "",
        uploadMethod: "direct_upload" as UploadMethod,
        uploadedByUserId: "",
        listingType: "sale" as ListingType,
        category: "marketListings" as ListingCategory,
        strategyBadge: "buy_to_let" as StrategyBadge,
        description: "",
        houseType: "apartment" as HouseType,
        tenureType: "freehold" as TenureType,
        propertySizeSqft: "",
        propertySizeSqm: "",
        functionalSpace: {
            bedrooms: "",
            bathrooms: "",
            receptions: "1",
            rooms: "",
        },
        leaseLength: "",
        serviceCharge: "",
        groundRent: "",
        location: {
            fullAddress: "",
            town: "",
            postcode: "",
            region: "West Midlands" as Region,
            countryCode: "GB",
            ukCountry: "England",
            longitude: "",
            latitude: "",
            outcode: "",
            incode: "",
            doorNumber: "",
            houseNumber: "",
        },
        isListingLive: true,
        listedDate: new Date().toISOString(),
        soldStc: false,
        reserved: false,
        reservationPrice: "",
        status: "available" as PropertyStatus,
        price: "",
        currency: "GBP",
        valuationSource: "manual" as ValuationSource,
        valuationAmount: "",
        occupancyStatus: "vacant" as OccupancyStatus,
        currentRent: "",
        averageRent: "",
        annualRent: "",
        features: [] as string[],
        coverImageUrl: "",
        images: [] as string[],
        yearBuilt: "",
        epc: "",
        floodRisk: "",
        transport: [] as { name: string; distance: string }[],
        schools: [] as { name: string; distance: string }[],
    });

    const [newFeature, setNewFeature] = useState("");
    const [newTransport, setNewTransport] = useState({ name: "", distance: "" });
    const [newSchool, setNewSchool] = useState({ name: "", distance: "" });

    const handleNext = () => {
        if (currentStep < STEPS.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleInputChange = (path: string, value: any) => {
        setFormData((prev: any) => {
            const keys = path.split(".");
            if (keys.length === 1) {
                return { ...prev, [path]: value };
            }

            const newFormData = { ...prev };
            let current = newFormData;
            for (let i = 0; i < keys.length - 1; i++) {
                current[keys[i]] = { ...current[keys[i]] };
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;
            return newFormData;
        });
    };

    const handleAddFeature = () => {
        if (newFeature.trim()) {
            setFormData((prev: any) => ({
                ...prev,
                features: [...prev.features, newFeature.trim()],
            }));
            setNewFeature("");
        }
    };

    const handleRemoveFeature = (index: number) => {
        setFormData((prev: any) => ({
            ...prev,
            features: prev.features.filter((_: string, i: number) => i !== index),
        }));
    };

    const handleAddTransport = () => {
        if (newTransport.name.trim() && newTransport.distance.trim()) {
            setFormData((prev: any) => ({
                ...prev,
                transport: [...prev.transport, { ...newTransport }],
            }));
            setNewTransport({ name: "", distance: "" });
        }
    };

    const handleAddSchool = () => {
        if (newSchool.name.trim() && newSchool.distance.trim()) {
            setFormData((prev: any) => ({
                ...prev,
                schools: [...prev.schools, { ...newSchool }],
            }));
            setNewSchool({ name: "", distance: "" });
        }
    };

    const handleSubmitInternal = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="space-y-8">
            {/* Step Indicator */}
            <div className="flex items-center justify-between w-full max-w-4xl mx-auto px-4">
                {STEPS.map((step, idx) => {
                    const StepIcon = step.icon;
                    const isActive = currentStep === step.id;
                    const isCompleted = currentStep > step.id;

                    return (
                        <div key={step.id} className="flex items-center flex-1 last:flex-none">
                            <div className="flex flex-col items-center relative gap-2">
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                                        isActive
                                            ? "border-primary bg-primary text-white"
                                            : isCompleted
                                                ? "border-primary bg-primary/10 text-primary"
                                                : "border-gray-200 bg-white text-gray-400"
                                    )}
                                >
                                    <StepIcon className="w-5 h-5" />
                                </div>
                                <span
                                    className={cn(
                                        "text-xs font-medium absolute -bottom-6 w-max",
                                        isActive ? "text-primary" : "text-gray-500"
                                    )}
                                >
                                    {step.title}
                                </span>
                            </div>
                            {idx < STEPS.length - 1 && (
                                <div
                                    className={cn(
                                        "h-0.5 flex-1 mx-4 transition-colors",
                                        isCompleted ? "bg-primary" : "bg-gray-200"
                                    )}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <form onSubmit={handleSubmitInternal} className="space-y-6 pt-6">
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Property Title *</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => handleInputChange("title", e.target.value)}
                                placeholder="e.g., Luxury 2BR Penthouse"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="slug">URL Slug</Label>
                            <Input
                                id="slug"
                                value={formData.slug}
                                onChange={(e) => handleInputChange("slug", e.target.value)}
                                placeholder="luxury-2br-penthouse"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="listingType">Listing Type *</Label>
                            <Select
                                value={formData.listingType}
                                onValueChange={(val: string) => handleInputChange("listingType", val)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sale">For Sale</SelectItem>
                                    <SelectItem value="rent">For Rent</SelectItem>
                                    <SelectItem value="refurbishment">Refurbishment</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Category *</Label>
                            <Select
                                value={formData.category}
                                onValueChange={(val: string) => handleInputChange("category", val)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="marketListings">Market Listing</SelectItem>
                                    <SelectItem value="offMarket">Off Market</SelectItem>
                                    <SelectItem value="bmv">BMV</SelectItem>
                                    <SelectItem value="manual">Manual Entry</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="strategyBadge">Investment Strategy</Label>
                            <Select
                                value={formData.strategyBadge}
                                onValueChange={(val: string) => handleInputChange("strategyBadge", val)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="buy_to_let">Buy to Let</SelectItem>
                                    <SelectItem value="HMO">HMO</SelectItem>
                                    <SelectItem value="BRRR">BRRR</SelectItem>
                                    <SelectItem value="flip">Flip</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="price">Asking Price *</Label>
                            <div className="relative">
                                <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    id="price"
                                    type="number"
                                    className="pl-9"
                                    value={formData.price}
                                    onChange={(e) => handleInputChange("price", e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Location */}
                {currentStep === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-full space-y-2">
                            <Label htmlFor="fullAddress">Full Address *</Label>
                            <Input
                                id="fullAddress"
                                value={formData.location.fullAddress}
                                onChange={(e) => handleInputChange("location.fullAddress", e.target.value)}
                                placeholder="123 Park Lane, London, W1K 7AA"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="town">Town/City *</Label>
                            <Input
                                id="town"
                                value={formData.location.town}
                                onChange={(e) => handleInputChange("location.town", e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="postcode">Postcode *</Label>
                            <Input
                                id="postcode"
                                value={formData.location.postcode}
                                onChange={(e) => handleInputChange("location.postcode", e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="region">Region *</Label>
                            <Select
                                value={formData.location.region}
                                onValueChange={(val: string) => handleInputChange("location.region", val)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="London">London</SelectItem>
                                    <SelectItem value="West Midlands">West Midlands</SelectItem>
                                    <SelectItem value="East Midlands">East Midlands</SelectItem>
                                    <SelectItem value="South East">South East</SelectItem>
                                    <SelectItem value="North West">North West</SelectItem>
                                    {/* Add more as needed */}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="ukCountry">UK Country</Label>
                            <Input
                                id="ukCountry"
                                value={formData.location.ukCountry}
                                onChange={(e) => handleInputChange("location.ukCountry", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="latitude">Latitude</Label>
                            <Input
                                id="latitude"
                                type="number"
                                step="any"
                                value={formData.location.latitude}
                                onChange={(e) => handleInputChange("location.latitude", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="longitude">Longitude</Label>
                            <Input
                                id="longitude"
                                type="number"
                                step="any"
                                value={formData.location.longitude}
                                onChange={(e) => handleInputChange("location.longitude", e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {/* Step 3: Specifications */}
                {currentStep === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="houseType">Property Type *</Label>
                            <Select
                                value={formData.houseType}
                                onValueChange={(val: string) => handleInputChange("houseType", val)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="apartment">Apartment</SelectItem>
                                    <SelectItem value="detached_house">Detached House</SelectItem>
                                    <SelectItem value="semi_detached">Semi-Detached</SelectItem>
                                    <SelectItem value="terraced_house">Terraced House</SelectItem>
                                    <SelectItem value="bungalow">Bungalow</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="tenureType">Tenure</Label>
                            <Select
                                value={formData.tenureType}
                                onValueChange={(val: string) => handleInputChange("tenureType", val)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="freehold">Freehold</SelectItem>
                                    <SelectItem value="leasehold">Leasehold</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bedrooms">Bedrooms</Label>
                            <Input
                                id="bedrooms"
                                type="number"
                                value={formData.functionalSpace.bedrooms}
                                onChange={(e) => handleInputChange("functionalSpace.bedrooms", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bathrooms">Bathrooms</Label>
                            <Input
                                id="bathrooms"
                                type="number"
                                value={formData.functionalSpace.bathrooms}
                                onChange={(e) => handleInputChange("functionalSpace.bathrooms", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="receptions">Receptions</Label>
                            <Input
                                id="receptions"
                                type="number"
                                value={formData.functionalSpace.receptions}
                                onChange={(e) => handleInputChange("functionalSpace.receptions", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sizeSqft">Size (Sq Ft)</Label>
                            <Input
                                id="sizeSqft"
                                type="number"
                                value={formData.propertySizeSqft}
                                onChange={(e) => handleInputChange("propertySizeSqft", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="yearBuilt">Year Built</Label>
                            <Input
                                id="yearBuilt"
                                type="number"
                                value={formData.yearBuilt}
                                onChange={(e) => handleInputChange("yearBuilt", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="epc">EPC Rating</Label>
                            <Input
                                id="epc"
                                value={formData.epc}
                                onChange={(e) => handleInputChange("epc", e.target.value)}
                                placeholder="e.g., C"
                            />
                        </div>
                    </div>
                )}

                {/* Step 4: Financials */}
                {currentStep === 4 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="leaseLength">Lease Length (Years)</Label>
                            <Input
                                id="leaseLength"
                                type="number"
                                value={formData.leaseLength}
                                onChange={(e) => handleInputChange("leaseLength", e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="serviceCharge">Annual Service Charge</Label>
                            <div className="relative">
                                <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    id="serviceCharge"
                                    type="number"
                                    className="pl-9"
                                    value={formData.serviceCharge}
                                    onChange={(e) => handleInputChange("serviceCharge", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="occupancyStatus">Occupancy Status</Label>
                            <Select
                                value={formData.occupancyStatus}
                                onValueChange={(val: string) => handleInputChange("occupancyStatus", val)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="vacant">Vacant</SelectItem>
                                    <SelectItem value="tenanted">Tenanted</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="currentRent">Current Monthly Rent</Label>
                            <div className="relative">
                                <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                    id="currentRent"
                                    type="number"
                                    className="pl-9"
                                    value={formData.currentRent}
                                    onChange={(e) => handleInputChange("currentRent", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 5: Status & Investment */}
                {currentStep === 5 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50/50">
                                <div>
                                    <Label className="text-base">Listing Is Live</Label>
                                    <p className="text-sm text-gray-500">Enable to show publicly</p>
                                </div>
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-primary"
                                    checked={formData.isListingLive}
                                    onChange={(e) => handleInputChange("isListingLive", e.target.checked)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="status">Property Status</Label>
                                <Select
                                    value={formData.status}
                                    onValueChange={(val: string) => handleInputChange("status", val)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="available">Available</SelectItem>
                                        <SelectItem value="under_offer">Under Offer</SelectItem>
                                        <SelectItem value="reserved">Reserved</SelectItem>
                                        <SelectItem value="inactive">Inactive</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div>
                                    <Label>Sold STC</Label>
                                </div>
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-primary"
                                    checked={formData.soldStc}
                                    onChange={(e) => handleInputChange("soldStc", e.target.checked)}
                                />
                            </div>
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div>
                                    <Label>Reserved</Label>
                                </div>
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-primary"
                                    checked={formData.reserved}
                                    onChange={(e) => handleInputChange("reserved", e.target.checked)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reservationPrice">Reservation Price</Label>
                                <div className="relative">
                                    <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        id="reservationPrice"
                                        type="number"
                                        className="pl-9"
                                        value={formData.reservationPrice}
                                        onChange={(e) => handleInputChange("reservationPrice", e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 6: Media & Features */}
                {currentStep === 6 && (
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <Label>Property Description</Label>
                            <QuillEditor
                                value={formData.description}
                                onChange={(val: string) => handleInputChange("description", val)}
                                placeholder="Describe the property's unique selling points..."
                            />
                        </div>

                        <div className="space-y-4">
                            <Label>Features & Amenities</Label>
                            <div className="flex gap-2">
                                <Input
                                    value={newFeature}
                                    onChange={(e) => setNewFeature(e.target.value)}
                                    placeholder="e.g., Gym, Pool, Parking"
                                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddFeature())}
                                />
                                <Button type="button" size="icon" onClick={handleAddFeature}>
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.features.map((feature: string, idx: number) => (
                                    <Badge key={idx} variant="secondary" className="pl-3 pr-2 py-1 flex items-center gap-2">
                                        {feature}
                                        <button type="button" onClick={() => handleRemoveFeature(idx)}>
                                            <X className="w-3 h-3 hover:text-red-500" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label>Nearby Transport</Label>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Name (e.g., King's Cross)"
                                    value={newTransport.name}
                                    onChange={(e) => setNewTransport({ ...newTransport, name: e.target.value })}
                                />
                                <Input
                                    placeholder="Distance (e.g., 0.2 miles)"
                                    value={newTransport.distance}
                                    onChange={(e) => setNewTransport({ ...newTransport, distance: e.target.value })}
                                />
                                <Button type="button" size="icon" onClick={handleAddTransport}>
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.transport.map((item: any, idx: number) => (
                                    <Badge key={idx} variant="outline" className="py-1">
                                        {item.name} ({item.distance})
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label>Nearby Schools</Label>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="School Name"
                                    value={newSchool.name}
                                    onChange={(e) => setNewSchool({ ...newSchool, name: e.target.value })}
                                />
                                <Input
                                    placeholder="Distance"
                                    value={newSchool.distance}
                                    onChange={(e) => setNewSchool({ ...newSchool, distance: e.target.value })}
                                />
                                <Button type="button" size="icon" onClick={handleAddSchool}>
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.schools.map((item: any, idx: number) => (
                                    <Badge key={idx} variant="outline" className="py-1">
                                        {item.name} ({item.distance})
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Property Images</Label>
                            <div className="border-2 border-dashed rounded-xl p-12 text-center hover:border-primary/50 transition-colors bg-gray-50/30">
                                <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                                <p className="text-sm font-medium">Click to upload or drag images here</p>
                                <p className="text-xs text-gray-500 mt-2">Up to 10 images, max 10MB each</p>
                                <Button type="button" variant="outline" className="mt-6">Select Files</Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation Controls */}
                <div className="flex items-center justify-between pt-8 border-t">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                    </Button>

                    <div className="flex gap-3">
                        {currentStep < STEPS.length ? (
                            <Button type="button" onClick={handleNext}>
                                Next Step
                                <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        ) : (
                            <Button type="submit" size="lg" className="px-8 shadow-lg shadow-primary/20">
                                {submitButtonText}
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
