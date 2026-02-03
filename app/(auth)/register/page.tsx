"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AuthLayout from "../App-layout";
import { Eye, EyeOff } from "lucide-react";
import { UserRole } from "@/types";
import { cn } from "@/lib/utils";

function RegisterForm() {
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("client");

  useEffect(() => {
    const roleParam = searchParams.get("role");
    if (roleParam && ["client", "agent", "investor"].includes(roleParam)) {
      setRole(roleParam as UserRole);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering as:", role);
    // Implementation placeholder
  };

  const roles: { id: UserRole; label: string; description: string }[] = [
    { id: "client", label: "Client", description: "Buying or renting" },
    { id: "agent", label: "Agent", description: "Listing properties" },
    { id: "investor", label: "Investor", description: "Analyzing deals" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>

      {/* Role Selector */}
      <div className="grid grid-cols-3 gap-2 bg-muted p-1 rounded-lg">
        {roles.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRole(r.id)}
            className={cn(
              "rounded-md px-2 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              role === r.id
                ? "bg-background text-foreground shadow-sm hover:bg-background/90"
                : "hover:bg-background/50 text-muted-foreground"
            )}
          >
            <span className="block">{r.label}</span>
            <span className="text-[10px] hidden sm:block font-normal opacity-70">{r.description}</span>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative mt-1">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 focus:ring-primary focus:border-primary"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary transition-colors cursor-pointer"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Eye className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-background text-lg font-medium py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
        >
          Register as {roles.find(r => r.id === role)?.label}
        </button>
      </form>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Suspense fallback={<div className="text-center p-4">Loading form...</div>}>
        <RegisterForm />
      </Suspense>
    </AuthLayout>
  );
}
