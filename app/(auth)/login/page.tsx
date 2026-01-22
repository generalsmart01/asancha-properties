"use client";

import Link from "next/link";
import AuthLayout from "../App-layout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/components/providers/UserProvider";
import { DUMMY_USERS } from "@/constants/users";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const { setUser, setRole } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const foundUser = DUMMY_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const [firstName, lastName] = foundUser.name.split(" ");
      setUser({
        id: foundUser.id,
        email: foundUser.email,
        firstName: firstName || "User",
        lastName: lastName || "",
        role: foundUser.role,
        avatar: foundUser.avatar,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        phone: "",
      });
      setRole(foundUser.role);

      // Redirect based on role
      if (foundUser.role === 'client' || foundUser.role === 'guest') {
        router.push('/dashboard');
      } else {
        router.push('/admin/dashboard');
      }
    } else {
      setError("Invalid credentials. check constants/users.ts");
      setLoading(false);
    }
  };

  const fillCredentials = (user: typeof DUMMY_USERS[0]) => {
    setEmail(user.email);
    setPassword(user.password);
  };

  return (
    <AuthLayout>
      <h1 className="sr-only">Login to asancha</h1>
      <p className="text-sm text-gray-600 mb-6">
        Sign in to explore verified properties, manage bookings, and access
        exclusive investment plans.
      </p>

      {error && (
        <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
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
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-primary focus:ring-primary focus:border-primary"
            />
            Remember me
          </label>
          <Link
            href="/forgot-password"
            className="text-primary hover:underline font-bold"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-background text-lg font-medium py-3 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-8 border-t pt-6">
        <p className="text-sm text-gray-500 mb-3 text-center">Quick Login (Dev Only)</p>
        <div className="grid grid-cols-2 gap-2">
          {DUMMY_USERS.map(u => (
            <button
              key={u.id}
              type="button"
              onClick={() => fillCredentials(u)}
              className="text-xs p-2 border rounded hover:bg-gray-50 text-left truncate"
            >
              <span className="font-semibold block">{u.role}</span>
              {u.email}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Secure login—your data is protected with bank-level encryption.
      </p>
    </AuthLayout>
  );
}
