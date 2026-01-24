"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, UserRole } from "@/types";
import safeConsole from "@/lib/console";

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Dummy user credentials for each role
// Passwords are stored in environment variables for security
export const DUMMY_USERS = [
  {
    id: "3",
    name: "Agent Smith",
    firstName: "Agent",
    lastName: "Smith",
    email: "agent@noornest.com",
    password: process.env.NEXT_PUBLIC_DUMMY_AGENT_PASSWORD || "agent123",
    role: "agent" as UserRole,
    avatar: "/avatars/agent.jpg",
  },
  {
    id: "4",
    name: "Investor Johnson",
    firstName: "Investor",
    lastName: "Johnson",
    email: "investor@noornest.com",
    password: process.env.NEXT_PUBLIC_DUMMY_INVESTOR_PASSWORD || "investor123",
    role: "investor" as UserRole,
    avatar: "/avatars/investor.jpg",
  },
  {
    id: "5",
    name: "Client Williams",
    firstName: "Client",
    lastName: "Williams",
    email: "client@noornest.com",
    password: process.env.NEXT_PUBLIC_DUMMY_CLIENT_PASSWORD || "client123",
    role: "client" as UserRole,
    avatar: "/avatars/client.jpg",
  },
];

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        safeConsole.error("Error parsing stored user:", error);
        localStorage.removeItem("currentUser");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; message?: string }> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = DUMMY_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      const userToSet: User = {
        ...userWithoutPassword,
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setUser(userToSet);
      localStorage.setItem("currentUser", JSON.stringify(userToSet));
      return { success: true };
    }

    return { success: false, message: "Invalid email or password" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider value={{ user, isLoading, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

