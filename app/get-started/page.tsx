import Link from "next/link";
import { User, Briefcase, TrendingUp, ChevronRight, Building2, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Get Started | Asancha Properties",
    description: "Choose your account type to get started with Asancha Properties.",
};

export default function GetStartedPage() {
    const roles = [
        {
            id: "client",
            title: "I am a Client",
            description: "Looking to buy, rent, or find my dream home.",
            icon: Home,
            features: ["Save favorite properties", "Schedule viewings", "Track applications"],
            color: "bg-blue-50 text-blue-600",
        },
        {
            id: "agent",
            title: "I am an Agent",
            description: "Want to list properties and manage client leads.",
            icon: Briefcase,
            features: ["List properties", "Manage viewings", "Track performance"],
            color: "bg-purple-50 text-purple-600",
        },
        {
            id: "investor",
            title: "I am an Investor",
            description: "Seeking below market value deals and investment analysis.",
            icon: TrendingUp,
            features: ["Access BMV deals", "Investment ROI calculators", "Market analytics"],
            color: "bg-green-50 text-green-600",
        },
    ];

    return (
        <div className="min-h-screen bg-muted/30">
            <div className="container mx-auto py-16 px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                        Choose your journey
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Select the account type that best describes you to unlock tools tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {roles.map((role) => (
                        <Card key={role.id} className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                            <CardHeader className="text-center pb-2">
                                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${role.color} transition-transform group-hover:scale-110 duration-300`}>
                                    <role.icon className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-2xl font-bold">{role.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{role.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="py-6">
                                <ul className="space-y-3">
                                    {role.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <div className="mr-3 p-1 rounded-full bg-primary/10 text-primary">
                                                <ChevronRight className="w-3 h-3" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full text-lg h-12 group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                                    <Link href={`/register?role=${role.id}`}>
                                        Join as {role.id.charAt(0).toUpperCase() + role.id.slice(1)}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-primary hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
