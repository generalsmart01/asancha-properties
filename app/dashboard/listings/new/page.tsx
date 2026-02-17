"use client";

import { useRouter } from "next/navigation";
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

export default function NewListingPage() {
  const router = useRouter();

  const handleFormSubmit = (data: any) => {
    // TODO: Implement API call to create property listing
    console.log("Creating property with data:", data);
    router.push("/dashboard/listings");
  };

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
          <h1 className="text-3xl font-bold text-gray-900">Post New Property</h1>
          <p className="text-gray-600">
            Fill in the details to create a new property listing
          </p>
        </div>
      </div>

      {/* Form */}
      <Card className="border-none">
        <CardHeader>
          <CardTitle>Property Information</CardTitle>
          <CardDescription>
            Provide all the necessary details about your property
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PropertyForm
            onSubmit={handleFormSubmit}
            submitButtonText="Create Listing"
          />
        </CardContent>
      </Card>
    </div>
  );
}
