"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import PropertyForm from "@/components/dashboard/PropertyForm";
import { MOCK_PROPERTIES } from "@/services/mock-data";

export default function EditListingPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;
    const [property, setProperty] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        const foundProperty = MOCK_PROPERTIES.find((p) => p.id === id);
        if (foundProperty) {
            setProperty(foundProperty);
        }
        setLoading(false);
    }, [id]);

    const handleFormSubmit = (data: any) => {
        // TODO: Implement API call to update property listing
        console.log("Updating property with data:", data);
        router.push("/dashboard/listings");
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/listings">
                        <Button variant="ghost" size="sm" className="cursor-pointer">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Listings
                        </Button>
                    </Link>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <h2 className="text-xl font-bold text-gray-900">Property Not Found</h2>
                        <p className="text-gray-600 mt-2">
                            We couldn't find the property you're looking for.
                        </p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/dashboard/listings">
                    <Button variant="ghost" size="sm" className="cursor-pointer">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Listings
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Edit Property</h1>
                    <p className="text-gray-600">
                        Modify the details of {property.title}
                    </p>
                </div>
            </div>

            {/* Form */}
            <Card>
                <CardHeader>
                    <CardTitle>Property Information</CardTitle>
                    <CardDescription>
                        Update the necessary details for your property listing
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <PropertyForm
                        initialData={property}
                        onSubmit={handleFormSubmit}
                        submitButtonText="Save Changes"
                    />
                </CardContent>
            </Card>
        </div>
    );
}
