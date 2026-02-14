export interface DashboardStats {
    totalProperties: number;
    activeListings: number;
    totalUsers: number;
    monthlyRevenue: number;
    bmvAnalyses: number;
    recentActivity: ActivityItem[];
}

export interface ActivityItem {
    id: string;
    type:
    | "property_added"
    | "property_sold"
    | "user_registered"
    | "bmv_analysis"
    | "booking_created";
    description: string;
    timestamp: string;
    user?: string;
}
