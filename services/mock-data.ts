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
        uploadMethod: "direct_upload",
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

        coverImageUrl: "/properties/birmingham/apt1/image-0-1024x1024.webp",
        images: [
            "/properties/birmingham/apt1/image-0-1024x1024.webp",
            "/properties/birmingham/apt1/image-1-1024x1024.webp",
            "/properties/birmingham/apt1/image-2-1024x1024.webp",
            "/properties/birmingham/apt1/image-3-1024x1024.webp",
            "/properties/birmingham/apt1/image-4-1024x1024.webp"
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
    },
    {
        id: "prop-2",
        publicId: "uuid-prop-2",
        propertyId: "int-1002",
        title: "Modern Apartment in Birmingham City Centre",
        slug: "modern-apartment-in-birmingham-city-centre",
        source: "asancha",
        uploadMethod: "api",
        uploadedByUserId: "user-2",
        listingType: "sale",
        category: "marketListings",
        houseType: "apartment",
        tenureType: "leasehold",
        propertySizeSqft: 750,
        propertySizeSqm: 70,
        functionalSpace: { bedrooms: 2, bathrooms: 2, receptions: 1 },
        location: {
            postcode: "B1 1QU",
            region: "West Midlands",
            town: "Birmingham",
            countryCode: "GB",
            ukCountry: "England",
            outcode: "B1",
            incode: "1QU",
            fullAddress: "Highline Apartments, Birmingham"
        },
        isListingLive: true,
        listedDate: "2024-02-12T10:00:00Z",
        soldStc: false,
        reserved: false,
        calculatedStatus: "available",
        price: 325000,
        currency: "GBP",
        occupancyStatus: "vacant",
        investmentMetrics: { roi: 0.06 },
        listingCardMetrics: {
            grossYield: 6.2,
            netYield: 4.8,
            bmvDiscountPercent: 5,
            netCashflowMonthly: 450,
            totalInvestment: 340000,
            rentalIncomePcm: 1650
        },
        locationSummary: { town: "Birmingham", region: "West Midlands", postcode: "B1 1QU", outcode: "B1" },
        functionalSpaceSummary: { bedrooms: 2, bathrooms: 2, receptions: 1 },
        coverImageUrl: "/properties/birmingham/apt2/image-0-1024x1024.webp",
        images: [
            "/properties/birmingham/apt2/image-0-1024x1024.webp",
            "/properties/birmingham/apt2/image-1-1024x1024.webp",
            "/properties/birmingham/apt2/image-2-1024x1024.webp",
            "/properties/birmingham/apt2/image-3-1024x1024.webp",
            "/properties/birmingham/apt2/image-4-1024x1024.webp"
        ],
        description: "A contemporary two-bedroom apartment located in the prestigious Highline development. Boasting panoramic city views and high-end finishes throughout.",
        yearBuilt: 2021,
        epc: "B",
        features: ["City Views", "Concierge", "Gym Access", "Underground Parking"],
        transport: [{ name: "Birmingham New Street", distance: "0.3 miles" }],
        schools: [{ name: "Central Birmingham Primary", distance: "0.5 miles" }],
        agent: { name: "Alexander Knight", avatar: "/img/agents/agent1.jpg", rating: 4.9, reviews: 124 }
    },
    {
        id: "prop-3",
        publicId: "uuid-prop-3",
        propertyId: "int-1003",
        title: "High-Yield HMO Project in Coventry",
        slug: "high-yield-hmo-project-in-coventry",
        source: "property_sourcer",
        uploadMethod: "api",
        uploadedByUserId: "user-2",
        listingType: "refurbishment",
        category: "bmv",
        strategyBadge: "HMO",
        houseType: "terraced_house",
        tenureType: "freehold",
        propertySizeSqft: 1200,
        propertySizeSqm: 111,
        functionalSpace: { bedrooms: 5, bathrooms: 3, receptions: 2 },
        location: {
            postcode: "CV1 5FB",
            region: "West Midlands",
            town: "Coventry",
            countryCode: "GB",
            ukCountry: "England",
            outcode: "CV1",
            incode: "5FB",
            fullAddress: "St Georges Road, Coventry"
        },
        isListingLive: true,
        listedDate: "2024-02-14T09:00:00Z",
        soldStc: false,
        reserved: false,
        calculatedStatus: "available",
        price: 215000,
        currency: "GBP",
        occupancyStatus: "vacant",
        investmentMetrics: { roi: 0.12 },
        listingCardMetrics: {
            grossYield: 14.5,
            netYield: 11.2,
            bmvDiscountPercent: 15,
            netCashflowMonthly: 1850,
            totalInvestment: 275000,
            rentalIncomePcm: 3200
        },
        locationSummary: { town: "Coventry", region: "West Midlands", postcode: "CV1 5FB", outcode: "CV1" },
        functionalSpaceSummary: { bedrooms: 5, bathrooms: 3, receptions: 2 },
        coverImageUrl: "/properties/coventry/apt1/image-0.webp",
        images: [
            "/properties/coventry/apt1/image-0.webp",
            "/properties/coventry/apt1/image-1.webp",
            "/properties/coventry/apt1/image-2.webp",
            "/properties/coventry/apt1/image-3.webp",
            "/properties/coventry/apt1/image-4.webp"
        ],
        description: "Excellent HMO potential with 5 large bedrooms. Located near Coventry University, this property is perfect for student or professional lets.",
        yearBuilt: 1910,
        epc: "D",
        features: ["Large Bedrooms", "Newly Renovated Kitchen", "Close to University"],
        transport: [{ name: "Coventry Train Station", distance: "0.6 miles" }],
        schools: [{ name: "Blue Coat CE School", distance: "0.4 miles" }],
        agent: { name: "Alexander Knight", avatar: "/img/agents/agent1.jpg", rating: 4.9, reviews: 124 }
    },
    {
        id: "prop-4",
        publicId: "uuid-prop-4",
        propertyId: "int-1004",
        title: "Family Home with Land in Leicester",
        slug: "family-home-with-land-in-leicester",
        source: "agent",
        uploadMethod: "direct_upload",
        uploadedByUserId: "user-2",
        listingType: "sale",
        category: "marketListings",
        houseType: "detached_house",
        tenureType: "freehold",
        propertySizeSqft: 2200,
        propertySizeSqm: 204,
        functionalSpace: { bedrooms: 4, bathrooms: 3, receptions: 3 },
        location: {
            postcode: "LE2 3RG",
            region: "East Midlands",
            town: "Leicester",
            countryCode: "GB",
            ukCountry: "England",
            outcode: "LE2",
            incode: "3RG",
            fullAddress: "Knighton Road, Leicester"
        },
        isListingLive: true,
        listedDate: "2024-02-11T11:00:00Z",
        soldStc: false,
        reserved: false,
        calculatedStatus: "available",
        price: 585000,
        currency: "GBP",
        occupancyStatus: "tenanted",
        investmentMetrics: { roi: 0.04 },
        listingCardMetrics: {
            grossYield: 4.8,
            netYield: 3.5,
            bmvDiscountPercent: 2,
            netCashflowMonthly: 650,
            totalInvestment: 610000,
            rentalIncomePcm: 2350
        },
        locationSummary: { town: "Leicester", region: "East Midlands", postcode: "LE2 3RG", outcode: "LE2" },
        functionalSpaceSummary: { bedrooms: 4, bathrooms: 3, receptions: 3 },
        coverImageUrl: "/properties/leicester/apt1/image-0-1024x1024.webp",
        images: [
            "/properties/leicester/apt1/image-0-1024x1024.webp",
            "/properties/leicester/apt1/image-1-1024x1024.webp",
            "/properties/leicester/apt1/image-2-1024x1024.webp",
            "/properties/leicester/apt1/image-3-1024x1024.webp",
            "/properties/leicester/apt1/image-4-1024x1024.webp"
        ],
        description: "A spacious 4-bedroom detached house featuring a large garden and modern interiors. Situated in a quiet, sought-after residential area.",
        yearBuilt: 1985,
        epc: "C",
        features: ["Large Garden", "Double Garage", "En-suite Master"],
        transport: [{ name: "Leicester Station", distance: "1.2 miles" }],
        schools: [{ name: "Knighton Primary", distance: "0.3 miles" }],
        agent: { name: "Alexander Knight", avatar: "/img/agents/agent1.jpg", rating: 4.9, reviews: 124 }
    },
    {
        id: "prop-5",
        publicId: "uuid-prop-5",
        propertyId: "int-1005",
        title: "Off-Market Residential Block in Northampton",
        slug: "off-market-residential-block-in-northampton",
        source: "asancha",
        uploadMethod: "api",
        uploadedByUserId: "user-2",
        listingType: "sale",
        category: "offMarket",
        houseType: "apartment",
        tenureType: "freehold",
        propertySizeSqft: 4500,
        propertySizeSqm: 418,
        functionalSpace: { bedrooms: 12, bathrooms: 6, receptions: 6 },
        location: {
            postcode: "NN1 2BA",
            region: "East Midlands",
            town: "Northampton",
            countryCode: "GB",
            ukCountry: "England",
            outcode: "NN1",
            incode: "2BA",
            fullAddress: "Bridge Street, Northampton"
        },
        isListingLive: true,
        listedDate: "2024-02-15T08:00:00Z",
        soldStc: false,
        reserved: false,
        calculatedStatus: "available",
        price: 1350000,
        currency: "GBP",
        occupancyStatus: "tenanted",
        investmentMetrics: { roi: 0.09 },
        listingCardMetrics: {
            grossYield: 8.5,
            netYield: 6.9,
            bmvDiscountPercent: 12,
            netCashflowMonthly: 4200,
            totalInvestment: 1450000,
            rentalIncomePcm: 9500
        },
        locationSummary: { town: "Northampton", region: "East Midlands", postcode: "NN1 2BA", outcode: "NN1" },
        functionalSpaceSummary: { bedrooms: 12, bathrooms: 6, receptions: 6 },
        coverImageUrl: "/properties/northampton/apt1/image-0-1024x1024.webp",
        images: [
            "/properties/northampton/apt1/image-0-1024x1024.webp",
            "/properties/northampton/apt1/image-1-1024x1024.webp",
            "/properties/northampton/apt1/image-2-1024x1024.webp",
            "/properties/northampton/apt1/image-3-1024x1024.webp",
            "/properties/northampton/apt1/image-4-1024x1024.webp"
        ],
        description: "Rare opportunity to acquire a fully tenanted residential block of 6 apartments. Consistent rental history and low vacancy rates.",
        yearBuilt: 1990,
        epc: "D",
        features: ["Fully Tenanted", "City Centre", "High Rental Demand"],
        transport: [{ name: "Northampton Station", distance: "0.4 miles" }],
        agent: { name: "Alexander Knight", avatar: "/img/agents/agent1.jpg", rating: 4.9, reviews: 124 }
    }
] as any[];
// casting to any[] temporarily to avoid strict type checking on every single field during mock creation if I missed an optional one

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
