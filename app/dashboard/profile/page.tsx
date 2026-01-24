"use client";

import { useRef, useState } from "react";
import { Calendar, Camera, Save, Edit, Globe, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Mock user data - replace with actual API calls
const mockUserData = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  avatar: "/avatars/john-doe.jpg",
  role: "Client",
  memberSince: "2023-06-15",
  lastLogin: "2024-01-12T10:30:00Z",
  preferences: {
    notifications: {
      email: true,
      sms: false,
      push: true,
      marketing: true,
      propertyAlerts: true,
      bookingReminders: true,
      bmvUpdates: true,
    },
    privacy: {
      profileVisibility: "public",
      showEmail: true,
      showPhone: false,
      showActivity: true,
    },
    search: {
      priceRange: { min: 200000, max: 800000 },
      propertyTypes: ["apartment", "house", "condo"],
      locations: ["Downtown", "Midtown", "Suburbs"],
      bedrooms: { min: 2, max: 4 },
      bathrooms: { min: 2, max: 3 },
    },
  },
  stats: {
    savedProperties: 12,
    completedBookings: 8,
    bmvAnalyses: 15,
    totalSearches: 45,
  },
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: mockUserData.name,
    email: mockUserData.email,
    phone: mockUserData.phone,
  });
  const [avatarUrl, setAvatarUrl] = useState(mockUserData.avatar);
  const [tempAvatarUrl, setTempAvatarUrl] = useState(mockUserData.avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const avatars = Array.from({ length: 10 }, (_, i) => `/avatars/avatar-${i + 1}.png`);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setTempAvatarUrl(url);
    }
  };

  const handleAvatarSelect = (url: string) => {
    setTempAvatarUrl(url);
  };

  const handleSave = () => {
    // TODO: Implement API call to update user profile
    // Removed console.log for production
    setAvatarUrl(tempAvatarUrl);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: mockUserData.name,
      email: mockUserData.email,
      phone: mockUserData.phone,
    });
    setTempAvatarUrl(avatarUrl);
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 pb-6 border-b border-border/50">
        <div>
          <h1 className="text-3xl font-black text-foreground uppercase tracking-tight">My Profile</h1>
          <p className="text-muted-foreground font-medium italic">
            Manage your personal information and account details
          </p>
        </div>

        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel} className="rounded-xl border-border/50 font-bold uppercase tracking-widest text-xs px-6 py-2">
                Cancel
              </Button>
              <Button onClick={handleSave} className="primary-btn rounded-xl font-bold uppercase tracking-widest text-xs px-6 py-2 shadow-lg shadow-primary/20">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} className="primary-btn rounded-xl font-bold uppercase tracking-widest text-xs px-6 py-2 shadow-lg shadow-primary/20">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Profile Content */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <Card className="lg:col-span-1 rounded-3xl border-border/50 shadow-xl overflow-hidden">
            <CardHeader>
              <CardTitle>Profile Overview</CardTitle>
              <CardDescription>
                Your basic account information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Avatar className="w-24 h-24 border-2 border-primary/20">
                    <AvatarImage
                      src={isEditing ? tempAvatarUrl : avatarUrl}
                      alt={formData.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                      {formData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <>
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      <Button
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 shadow-lg"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">
                    {mockUserData.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {mockUserData.email}
                  </p>
                  <Badge className="mt-2 bg-primary text-white font-bold uppercase tracking-widest text-[10px]">
                    {mockUserData.role}
                  </Badge>
                </div>
              </div>

              <Separator />

              {/* Account Stats */}
              <div className="space-y-3">
                <h4 className="font-medium">Account Activity</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Saved Properties:</span>
                    <div className="font-medium">
                      {mockUserData.stats.savedProperties}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Bookings:</span>
                    <div className="font-medium">
                      {mockUserData.stats.completedBookings}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">BMV Analyses:</span>
                    <div className="font-medium">
                      {mockUserData.stats.bmvAnalyses}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Searches:</span>
                    <div className="font-medium">
                      {mockUserData.stats.totalSearches}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Account Info */}
              <div className="space-y-3">
                <h4 className="font-medium">Account Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-500">Member since:</span>
                    <span className="ml-auto font-medium">
                      {formatDate(mockUserData.memberSince)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-500">Last login:</span>
                    <span className="ml-auto font-medium">
                      {formatDateTime(mockUserData.lastLogin)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="lg:col-span-2 rounded-3xl border-border/50 shadow-xl overflow-hidden">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      handleInputChange("name", e.target.value)
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      handleInputChange("email", e.target.value)
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      handleInputChange("phone", e.target.value)
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Input
                    value={mockUserData.role}
                    disabled
                    className="bg-gray-50"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="pt-6 space-y-4">
                  <Separator />
                  <div className="space-y-2">
                    <Label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Select an Avatar</Label>
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                      {avatars.map((url, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleAvatarSelect(url)}
                          className={cn(
                            "relative aspect-square rounded-xl overflow-hidden border-2 transition-all hover:scale-105",
                            tempAvatarUrl === url ? "border-primary ring-2 ring-primary/20" : "border-border/50 hover:border-primary/50"
                          )}
                        >
                          <img src={url} alt={`Avatar ${index + 1}`} className="w-full h-full object-cover" />
                          {tempAvatarUrl === url && (
                            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                              <Check className="w-4 h-4 text-primary" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
