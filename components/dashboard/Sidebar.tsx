"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Heart,
  Calendar,
  PoundSterling,
  Calculator,
  X,
  ChevronLeft,
  Building2,
  Users,
  FileText,
  BarChart3,
  Briefcase,
  TrendingUp,
  ListMinus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserRole } from "@/types";

interface SidebarProps {
  mobileMenuOpen: boolean;
  onClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  userRole: UserRole;
}

// Role-based navigation items
const getNavigationByRole = (role: UserRole) => {
  const baseNav = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
  ];

  switch (role) {
    case "client":
      return [
        ...baseNav,
        { name: "Saved Properties", href: "/dashboard/saved", icon: Heart },
        { name: "My Bookings", href: "/dashboard/bookings", icon: Calendar },
        { name: "My Payments", href: "/dashboard/payments", icon: PoundSterling },
        { name: "BMV Analysis", href: "/dashboard/bmv", icon: Calculator },
      ];

    case "agent":
      return [
        ...baseNav,
        { name: "My Listings", href: "/dashboard/listings", icon: Building2 },
        { name: "Bookings", href: "/dashboard/bookings", icon: Calendar },
        { name: "Clients", href: "/dashboard/clients", icon: Users },
        { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
        { name: "Reports", href: "/dashboard/reports", icon: FileText },
      ];

    case "investor":
      return [
        ...baseNav,
        { name: "Investment Portfolio", href: "/dashboard/portfolio", icon: Briefcase },
        { name: "BMV Analysis", href: "/dashboard/bmv", icon: Calculator },
        { name: "Investment Opportunities", href: "/dashboard/opportunities", icon: TrendingUp },
        { name: "Returns & Payouts", href: "/dashboard/payouts", icon: PoundSterling },
        { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
      ];

    default:
      return baseNav;
  }
};

export function Sidebar({ mobileMenuOpen, onClose, collapsed, onToggleCollapse, userRole }: SidebarProps) {
  const pathname = usePathname();
  const navigation = getNavigationByRole(userRole);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-border/50 transform transition-all duration-300 ease-in-out shadow-2xl shadow-slate-200/50 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${collapsed ? "w-20" : "w-64"
        }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className={`flex items-center justify-between h-16 border-b ${collapsed ? "px-4" : "px-6"
          }`}>
          {!collapsed ? (
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={80} height={80} />
            </Link>
          ) : (
            <Link href="/" className="flex items-center justify-center w-8 h-8">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </Link>
          )}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center ${collapsed ? "justify-center px-2" : "space-x-3 px-3"
                      } py-2.5 rounded-xl text-sm font-bold transition-all group relative ${isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    onClick={onClose}
                    title={collapsed ? item.name : undefined}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    {!collapsed && <span>{item.name}</span>}
                    {collapsed && (
                      <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                        {item.name}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

