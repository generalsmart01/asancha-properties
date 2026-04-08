"use client";

import {
  Heart,
  Calendar,
  Search,
  TrendingUp,
  MapPin,
  Clock,
  Building2,
  Users,
  DollarSign,
  FileText,
  BarChart3,
  Briefcase,
  Eye,
  Plus,
  Calculator,
  X,
  Settings,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";
import { getDashboardData } from "@/lib/mock-data";

// Mock data - replace with actual API calls
const mockData = getDashboardData();

// Client Dashboard Component
function ClientDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Welcome back!</h1>
        <p className="text-white/80 font-medium italic">
          Here&apos;s what&apos;s happening with your property search and
          investments.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-black text-muted-foreground uppercase tracking-widest">
              Saved Properties
            </CardTitle>
            <Heart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-foreground">{mockData.savedProperties}</div>
            <p className="text-[10px] font-bold text-green-600 uppercase mt-1">+2 from last week</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-black text-muted-foreground uppercase tracking-widest">
              Upcoming Bookings
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-foreground">
              {mockData.upcomingBookingsCount}
            </div>
            <p className="text-xs text-muted-foreground">Next: Jan 15, 2024</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">BMV Analyses</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-foreground">
              {mockData.bmvAnalysesCount}
            </div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-black text-muted-foreground uppercase tracking-widest">
              Recent Searches
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.recentSearches}</div>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Properties */}
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-foreground uppercase tracking-tight">Recent Properties</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary font-black uppercase tracking-widest text-[10px]" asChild>
                <Link href="/properties">View All <Plus size={12} className="ml-1" /></Link>
              </Button>
            </div>
            <CardDescription>
              Properties you&apos;ve recently viewed or saved
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockData.recentProperties.map((property) => (
              <div
                key={property.id}
                className="flex items-center space-x-4 p-4 border border-border/50 rounded-2xl hover:bg-muted/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-500">{property.location}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">
                      {property.bedrooms} bed
                    </span>
                    <span className="text-sm text-gray-500">
                      {property.bathrooms} bath
                    </span>
                    <span className="text-sm text-gray-500">
                      {property.sqft} sqft
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <div className="text-sm font-black text-primary">
                    {property.price}
                  </div>
                  <div className="flex items-center space-x-2">
                    {property.saved && (
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                    )}
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">
                      {property.viewed}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Bookings</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/bookings">View All</Link>
              </Button>
            </div>
            <CardDescription>Your scheduled property viewings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockData.upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center space-x-4 p-4 border rounded-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {booking.property}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Agent: {booking.agent}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {booking.date} at {booking.time}
                    </span>
                  </div>
                </div>
                <Badge
                  variant={
                    booking.status === "confirmed" ? "default" : "secondary"
                  }
                >
                  {booking.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* BMV Analysis Summary */}
      <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent BMV Analyses</CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/bmv">View All</Link>
            </Button>
          </div>
          <CardDescription>
            Your recent Below Market Value property analyses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockData.bmvAnalyses.map((analysis) => (
              <div key={analysis.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    {analysis.property}
                  </h3>
                  <Badge
                    variant={
                      analysis.bmvScore >= 80
                        ? "default"
                        : analysis.bmvScore >= 60
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    Score: {analysis.bmvScore}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Estimated Value:</span>
                    <div className="font-medium">{analysis.estimatedValue}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Market Price:</span>
                    <div className="font-medium">{analysis.marketPrice}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Potential Savings:</span>
                    <div className="font-medium text-green-600">
                      {analysis.savings}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Date:</span>
                    <div className="font-medium">{analysis.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="primary-btn h-20 flex flex-col space-y-2 rounded-2xl shadow-lg shadow-primary/20">
              <Link href="/properties">
                <Search className="w-6 h-6" />
                <span>Search Properties</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex flex-col space-y-2 rounded-2xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Link href="/tools/bmv-analyzer">
                <TrendingUp className="w-6 h-6" />
                <span>BMV Analysis</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex flex-col space-y-2 rounded-2xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Link href="/dashboard/saved">
                <Heart className="w-6 h-6" />
                <span>Saved Properties</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Agent Dashboard Component
function AgentDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Welcome back, Agent!</h1>
        <p className="text-white/80 font-medium italic">
          Manage your listings, bookings, and client relationships
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 this month</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Next: Today, 2:00 PM</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">+5 new this week</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£45,200</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Listings */}
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Listings</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/listings">View All</Link>
              </Button>
            </div>
            <CardDescription>Your recently added properties</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 1, title: "Modern 3BR Apartment", location: "Downtown", views: 245, status: "Active" },
              { id: 2, title: "Luxury Villa with Pool", location: "Suburbs", views: 189, status: "Active" },
              { id: 3, title: "Cozy 2BR Condo", location: "Midtown", views: 156, status: "Pending" },
            ].map((listing) => (
              <div
                key={listing.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-gray-500">{listing.location}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">
                      {listing.views} views
                    </span>
                    <Badge variant={listing.status === "Active" ? "default" : "secondary"}>
                      {listing.status}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Bookings</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/bookings">View All</Link>
              </Button>
            </div>
            <CardDescription>Scheduled property viewings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 1, property: "Modern 3BR Apartment", client: "John Doe", time: "Today, 2:00 PM", status: "Confirmed" },
              { id: 2, property: "Luxury Villa", client: "Jane Smith", time: "Tomorrow, 10:00 AM", status: "Pending" },
              { id: 3, property: "Cozy 2BR Condo", client: "Mike Johnson", time: "Jan 20, 3:00 PM", status: "Confirmed" },
            ].map((booking) => (
              <div
                key={booking.id}
                className="flex items-center space-x-4 p-4 border rounded-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {booking.property}
                  </h3>
                  <p className="text-sm text-gray-500">Client: {booking.client}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500">{booking.time}</span>
                  </div>
                </div>
                <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"}>
                  {booking.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="primary-btn h-20 flex flex-col space-y-2 rounded-2xl shadow-lg shadow-primary/20">
              <Link href="/dashboard/listings">
                <Plus className="w-6 h-6" />
                <span>Add New Listing</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex flex-col space-y-2 rounded-2xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Link href="/dashboard/clients">
                <Users className="w-6 h-6" />
                <span>Manage Clients</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex flex-col space-y-2 rounded-2xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Link href="/dashboard/analytics">
                <BarChart3 className="w-6 h-6" />
                <span>View Analytics</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Investor Dashboard Component
function InvestorDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Welcome back, Investor!</h1>
        <p className="text-white/80 font-medium italic">
          Track your investments, returns, and opportunities
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£2.4M</div>
            <p className="text-xs text-muted-foreground">+8.5% this month</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">3 new this quarter</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Returns</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£24,500</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">BMV Analyses</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Investment Opportunities */}
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Investment Opportunities</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/opportunities">View All</Link>
              </Button>
            </div>
            <CardDescription>High-potential BMV properties</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 1, property: "Downtown Apartment Complex", bmvScore: 92, potentialROI: "18%", value: "£850K" },
              { id: 2, property: "Suburban Development", bmvScore: 87, potentialROI: "15%", value: "£1.2M" },
              { id: 3, property: "Commercial Building", bmvScore: 85, potentialROI: "22%", value: "£2.1M" },
            ].map((opportunity) => (
              <div
                key={opportunity.id}
                className="p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    {opportunity.property}
                  </h3>
                  <Badge variant="default">BMV: {opportunity.bmvScore}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Potential ROI:</span>
                    <div className="font-medium text-green-600">{opportunity.potentialROI}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Property Value:</span>
                    <div className="font-medium">{opportunity.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Payouts */}
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Payouts</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard/payouts">View All</Link>
              </Button>
            </div>
            <CardDescription>Your investment returns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: 1, property: "Downtown Apartment", amount: "£8,500", date: "Jan 15, 2024", status: "Completed" },
              { id: 2, property: "Suburban House", amount: "£12,200", date: "Jan 10, 2024", status: "Completed" },
              { id: 3, property: "Commercial Space", amount: "£15,000", date: "Jan 5, 2024", status: "Pending" },
            ].map((payout) => (
              <div
                key={payout.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {payout.property}
                  </h3>
                  <p className="text-sm text-gray-500">{payout.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">
                    {payout.amount}
                  </div>
                  <Badge variant={payout.status === "Completed" ? "default" : "secondary"}>
                    {payout.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="primary-btn h-20 flex flex-col space-y-2 rounded-2xl shadow-lg shadow-primary/20">
              <Link href="/dashboard/opportunities">
                <TrendingUp className="w-6 h-6" />
                <span>Find Opportunities</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex flex-col space-y-2 rounded-2xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Link href="/dashboard/bmv">
                <Calculator className="w-6 h-6" />
                <span>BMV Analysis</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-20 flex flex-col space-y-2 rounded-2xl border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Link href="/dashboard/portfolio">
                <Briefcase className="w-6 h-6" />
                <span>My Portfolio</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


// Property Owner Dashboard Component
function PropertyOwnerDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Welcome back, Owner!</h1>
        <p className="text-white/80 font-medium italic">
          Manage your properties, view performance, and track tenant requests
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Properties</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">All active</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Rent (Monthly)</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£8,450</div>
            <p className="text-xs text-muted-foreground">Collected 100%</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">Stable</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Return</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8%</div>
            <p className="text-xs text-muted-foreground">Above market average</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for property owners</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="primary-btn h-20 flex flex-col space-y-2 rounded-2xl shadow-lg shadow-primary/20">
              <Link href="/dashboard/listings">
                <Building2 className="w-6 h-6" />
                <span>My Properties</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col space-y-2">
              <Link href="/dashboard/reports">
                <BarChart3 className="w-6 h-6" />
                <span>Financial Reports</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col space-y-2">
              <Link href="/dashboard/settings">
                <Settings className="w-6 h-6" />
                <span>Account Settings</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Property Sourcer Dashboard Component
function PropertySourcerDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Welcome back, Sourcer!</h1>
        <p className="text-white/80 font-medium italic">
          Find the best BMV deals and connect them with hungry investors
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deals Sourced</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Discount</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22.5%</div>
            <p className="text-xs text-muted-foreground">BMV</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investor Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Actively looking</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Potential Fees</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£36,000</div>
            <p className="text-xs text-muted-foreground">In pipeline</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Sourcing tools and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="primary-btn h-20 flex flex-col space-y-2 rounded-2xl shadow-lg shadow-primary/20">
              <Link href="/tools/bmv-analyzer">
                <Calculator className="w-6 h-6" />
                <span>New BMV Analysis</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col space-y-2">
              <Link href="/dashboard/opportunities">
                <TrendingUp className="w-6 h-6" />
                <span>Post Deal</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col space-y-2">
              <Link href="/dashboard/clients">
                <Users className="w-6 h-6" />
                <span>Investor Match</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Service Provider Dashboard Component
function ServiceProviderDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Welcome back, Service Provider!</h1>
        <p className="text-white/80 font-medium italic">
          Manage your service offerings, client requests, and track your earnings.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 require response</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+5 this month</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.9/5</div>
            <p className="text-xs text-muted-foreground">Based on 32 reviews</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">£4,200</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Shortcuts to manage your services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="primary-btn h-20 flex flex-col space-y-2 rounded-2xl shadow-lg shadow-primary/20">
              <Link href="/dashboard/requests">
                <Users className="w-6 h-6" />
                <span>Client Requests</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col space-y-2">
              <Link href="/dashboard/services">
                <Briefcase className="w-6 h-6" />
                <span>My Services</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col space-y-2">
              <Link href="/dashboard/profile">
                <Settings className="w-6 h-6" />
                <span>Edit Profile</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// API Partner Dashboard Component
function ApiPartnerDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tight">Welcome back, API Partner!</h1>
        <p className="text-white/80 font-medium italic">
          Monitor your API consumption, manage tokens, and view endpoint statuses.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Requests</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124.5k</div>
            <p className="text-xs text-muted-foreground">This month (300k limit)</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.98%</div>
            <p className="text-xs text-muted-foreground">Uptime robust</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tokens</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Environment: Production</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Webhooks</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">0 failing endpoints</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="rounded-3xl border-border/50 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <CardTitle>Developer Shortcuts</CardTitle>
          <CardDescription>Tools for managing your integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="primary-btn h-20 flex flex-col space-y-2 rounded-2xl shadow-lg shadow-primary/20">
              <Link href="/dashboard/api-keys">
                <Settings className="w-6 h-6" />
                <span>Manage API Keys</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col space-y-2">
              <Link href="/docs/api">
                <FileText className="w-6 h-6" />
                <span>Documentation</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex flex-col space-y-2">
              <Link href="/dashboard/webhooks">
                <Briefcase className="w-6 h-6" />
                <span>Manage Webhooks</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Main Dashboard Component
export default function Dashboard() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Please log in to view your dashboard</div>
      </div>
    );
  }

  // Render role-based dashboard
  switch (user.role) {
    case "agent":
      return <AgentDashboard />;
    case "vendor":
    case "landlord":
    case "developer":
      return <PropertyOwnerDashboard />;
    case "sourcer":
      return <PropertySourcerDashboard />;
    case "service_provider":
      return <ServiceProviderDashboard />;
    case "api_partner":
      return <ApiPartnerDashboard />;
    case "investor":
      return <InvestorDashboard />;
    case "buyer":
      return <ClientDashboard />;
    case "guest":
      return (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
          <div className="bg-primary/10 p-6 rounded-full">
            <X className="w-12 h-12 text-primary" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black uppercase tracking-tight">Access Restricted</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Guests do not have access to the personalized dashboard. Please sign in or create an account to view your investment insights and property tracking.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild className="primary-btn h-12 px-8 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/20">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 rounded-xl font-bold uppercase tracking-widest text-sm border-border/50">
              <Link href="/get-started">Join Now</Link>
            </Button>
          </div>
        </div>
      );
    default:
      return <ClientDashboard />;
  }
}
