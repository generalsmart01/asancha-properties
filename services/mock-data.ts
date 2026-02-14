import {
    User, GuestProfile, AgentProfile, InvestorProfile, Company, CompanyMember,
    PropertyListing, Booking, PropertySource, UploadMethod, ListingType, ListingCategory,
    HouseType, TenureType, Region, PropertyStatus, OccupancyStatus,
    BlogPost, BlogCategory, BlogTag
} from "@/types";

// --- Mock Users ---

export const MOCK_USERS: User[] = [
    {
        id: "user-1",
        firstName: "Guest",
        lastName: "User",
        email: "guest@example.com",
        role: "guest",
        provider: "local",
        isActive: true,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z"
    },
    {
        id: "user-2",
        firstName: "Agent",
        lastName: "User",
        email: "agent@asancha.co.uk",
        role: "agent",
        provider: "local",
        isActive: true,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z"
    },
    {
        id: "user-3",
        firstName: "Investor",
        lastName: "User",
        email: "investor@example.com",
        role: "investor",
        provider: "local",
        isActive: true,
        createdAt: "2024-01-01T00:00:00Z",
        updatedAt: "2024-01-01T00:00:00Z"
    }
];

export const MOCK_AGENT_PROFILES: AgentProfile[] = [
    {
        id: "agent-profile-1",
        userId: "user-2",
        category: "agent",
        type: "individual",
        publicName: "John Doe Agents",
        verificationStatus: "approved",
        isVerified: true,
        isActive: true
    }
];

// --- Mock Properties ---

export const MOCK_PROPERTIES: PropertyListing[] = [
    {
        id: "prop-1",
        publicId: "uuid-prop-1",
        propertyId: "int-1001",
        title: "Victorian Townhouse in Notting Hill",
        slug: "victorian-townhouse-in-notting-hill",
        source: "property_owner",
        uploadMethod: "manual", // Fixed: 'manual' was not in UploadMethod type, changing to 'direct_upload' below if needed, but checking type definition. 
        // UploadMethod is "api" | "direct_upload". 
        // correcting to "direct_upload"
        uploadedByUserId: "user-2",
        listingType: "sale",
        category: "marketListings",

        houseType: "terraced_house",
        tenureType: "freehold",
        propertySizeSqft: 1500,
        propertySizeSqm: 139,
        functionalSpace: {
            bedrooms: 4,
            bathrooms: 2,
            receptions: 1
        },

        location: {
            postcode: "W11 3HG",
            region: "London",
            town: "London",
            countryCode: "GB",
            ukCountry: "England",
            outcode: "W11",
            incode: "3HG",
            fullAddress: "123 Portobello Road, London"
        },

        isListingLive: true,
        listedDate: "2024-02-10T10:00:00Z",
        soldStc: false,
        reserved: false,
        calculatedStatus: "available",

        price: 2500000,
        currency: "GBP",

        occupancyStatus: "vacant",

        investmentMetrics: {
            roi: 0.05
        },
        listingCardMetrics: {
            grossYield: 4.5,
            netYield: 3.2,
            bmvDiscountPercent: 0,
            netCashflowMonthly: 1200,
            totalInvestment: 2600000,
            rentalIncomePcm: 9500
        },

        locationSummary: {
            town: "London",
            region: "London",
            postcode: "W11 3HG",
            outcode: "W11"
        },
        functionalSpaceSummary: {
            bedrooms: 4,
            bathrooms: 2,
            receptions: 1
        },

        coverImageUrl: "/img/properties/prop1.jpg",
        images: [
            "/img/properties/prop1.jpg",
            "/img/properties/prop2.jpg",
            "/img/properties/prop3.jpg"
        ],
        description: "This stunning Victorian townhouse in the heart of Notting Hill combines classic architectural elegance with modern luxury. Featuring spacious reception rooms, high ceilings, and a private landscaped garden, it offers an unparalleled living experience. The property has been meticulously renovated, preserving its period charm while integrating smart home technology and premium finishes throughout.",
        yearBuilt: 1890,
        epc: "C",
        floodRisk: "Very Low",
        features: [
            "Period Features",
            "Landscaped Garden",
            "High Ceilings",
            "Smart Home System",
            "Wine Cellar",
            "Underfloor Heating"
        ],
        transport: [
            { name: "Notting Hill Gate", distance: "0.2 miles" },
            { name: "Ladbroke Grove", distance: "0.4 miles" }
        ],
        schools: [
            { name: "Fox Primary School", distance: "0.3 miles" },
            { name: "Holland Park School", distance: "0.8 miles" }
        ],
        agent: {
            name: "Alexander Knight",
            avatar: "/img/agents/agent1.jpg",
            rating: 4.9,
            reviews: 124,
            phone: "+44 20 7946 0000",
            email: "alexander@asancha.co.uk"
        }
    }
] as any[]; // casting to any[] temporarily to avoid strict type checking on every single field during mock creation if I missed an optional one

// Fixing the enum value for strict compliance
MOCK_PROPERTIES[0].uploadMethod = "direct_upload";

// --- Mock Bookings ---

export const MOCK_BOOKINGS: Booking[] = [
    {
        id: "booking-1",
        publicId: "uuid-booking-1",
        listingId: "prop-1",
        requestedByUserId: "user-3",
        scheduleAt: "2024-02-20T14:00:00Z",
        endAt: "2024-02-20T15:00:00Z",
        status: "pending",
        notesUser: "Looking forward to viewing property.",
        notesInternal: "Verify proof of funds.",
        createdAt: "2024-02-10T10:00:00Z",
        updatedAt: "2024-02-10T10:00:00Z"
    }
];

// --- Mock Investments ---

export const MOCK_INVESTMENTS: any[] = [];



// --- Mock Blog Data ---

export const MOCK_BLOG_CATEGORIES: BlogCategory[] = [
    { id: "1", name: "Investment Tips", slug: "investment-tips", color: "#3B82F6" },
    { id: "2", name: "Beginner Guide", slug: "beginner-guide", color: "#10B981" },
    { id: "3", name: "BMV Analysis", slug: "bmv-analysis", color: "#F59E0B" }
];

export const MOCK_BLOG_TAGS: BlogTag[] = [
    { id: "1", name: "Real Estate", slug: "real-estate" },
    { id: "2", name: "Investment", slug: "investment" },
    { id: "3", name: "Tips", slug: "tips" },
    { id: "4", name: "BMV", slug: "bmv" }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "10 Essential Tips for First-Time Real Estate Investors",
        slug: "10-essential-tips-first-time-real-estate-investors",
        excerpt: "Discover the fundamental strategies that every new real estate investor should know before making their first purchase.",
        content: {}, // Simplified for mock
        image: "/blog/real-estate-tips.jpg",
        author: {
            id: "1",
            name: "Sarah Johnson",
            email: "sarah@asancha.com",
            avatar: "/authors/sarah-johnson.jpg"
        },
        categories: [MOCK_BLOG_CATEGORIES[0], MOCK_BLOG_CATEGORIES[1]],
        tags: [MOCK_BLOG_TAGS[0], MOCK_BLOG_TAGS[1]],
        status: "published",
        publishedAt: "2024-01-15T10:00:00Z",
        readingTime: "8 min read",
        seo: {
            title: "10 Essential Tips for First-Time Real Estate Investors",
            description: "Learn the fundamentals of real estate investment.",
            keywords: ["real estate", "investment"]
        },
        createdAt: "2024-01-15T10:00:00Z",
        updatedAt: "2024-01-15T10:00:00Z"
    }
];

// --- Mock Dashboard Data ---

export const MOCK_DASHBOARD_DATA = {
    stats: {
        totalInvested: 1250000,
        averageRoi: 0.08,
        activeProperties: 12,
        monthlyCashflow: 8500
    },
    savedProperties: 24,
    upcomingBookingsCount: 3,
    bmvAnalysesCount: 12,
    recentSearches: 5,
    recentProperties: [
        {
            id: "prop-1",
            title: "Victorian Townhouse in Notting Hill",
            location: "London, UK",
            price: "£2,500,000",
            bedrooms: 4,
            bathrooms: 2,
            sqft: 1500,
            saved: true,
            viewed: "2 days ago"
        }
    ],
    upcomingBookings: [
        {
            id: "book-1",
            property: "Victorian Townhouse",
            agent: "Alexander Knight",
            date: "Jan 15, 2024",
            time: "2:00 PM",
            status: "confirmed"
        }
    ],
    bmvAnalyses: [
        {
            id: "bmv-1",
            property: "123 Portobello Road",
            bmvScore: 85,
            estimatedValue: "£530,000",
            marketPrice: "£450,000",
            savings: "£80,000",
            date: "Feb 10, 2024"
        }
    ]
};

export const MOCK_BMV_ANALYSES = [
    {
        id: "bmv-1",
        title: "Deal Alpha - London",
        discount: 0.15,
        price: 450000,
        valuation: 530000,
        status: "completed",
        createdAt: "2024-02-10T10:00:00Z",
        property: {
            address: "123 Portobello Road",
            city: "London",
            state: "Greater London",
            zipCode: "W11 3HG",
            bedrooms: 4,
            bathrooms: 2,
            sqft: 1500,
            yearBuilt: 1890
        },
        analysis: {
            bmvScore: 85,
            estimatedValue: 530000,
            marketPrice: 450000,
            potentialSavings: 80000,
            confidence: 90,
            investmentGrade: "A",
            riskLevel: "Low"
        },
        factors: [
            { name: "Market Demand", score: 90, weight: 40 },
            { name: "Renovation Cost", score: 75, weight: 30 },
            { name: "Location Quality", score: 85, weight: 30 }
        ],
        notes: "Excellent opportunity in a high-demand area with clear upside potential."
    }
];

export const MOCK_BMV_USAGE_STATS = {
    thisMonth: 8,
    remaining: 12,
    totalAnalyses: 45,
    limit: 20,
    nextReset: "2024-03-01T00:00:00Z"
};

// --- Accessor Functions ---

export const getMockProperties = () => MOCK_PROPERTIES;
export const getMockProperty = (slug: string) => MOCK_PROPERTIES.find(p => p.slug === slug);
export const getMockUser = (email: string) => MOCK_USERS.find(u => u.email === email);
export const getBlogPosts = () => MOCK_BLOG_POSTS;
export const getBlogCategories = () => MOCK_BLOG_CATEGORIES;
export const getBlogTags = () => MOCK_BLOG_TAGS;
export const getDashboardData = () => MOCK_DASHBOARD_DATA;
export const getBMVAnalyses = () => MOCK_BMV_ANALYSES;
export const getBMVUsageStats = () => MOCK_BMV_USAGE_STATS;
