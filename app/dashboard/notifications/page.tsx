"use client";

import { useState } from "react";
import {
    Bell,
    CheckCircle,
    Clock,
    AlertCircle,
    MessageSquare,
    Search,
    Filter,
    Trash2,
    Check,
    MailOpen,
    Archive
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Mock data
type NotificationType = "info" | "success" | "warning" | "alert";
type NotificationStatus = "read" | "unread" | "archived";

interface Notification {
    id: number;
    title: string;
    message: string;
    type: NotificationType;
    status: NotificationStatus;
    date: string;
    link?: string;
}

const mockNotifications: Notification[] = [
    {
        id: 1,
        title: "New Booking Request",
        message: "John Doe has requested a viewing for 'Modern Apartment' on Jan 24th at 2:00 PM. Please review the request and confirm availability. This client is looking for a long-term lease starting next month.",
        type: "info",
        status: "unread",
        date: "2024-01-20T14:30:00",
        link: "/dashboard/bookings/1",
    },
    {
        id: 2,
        title: "Payment Received",
        message: "We have successfully received a payment of £500.00 from Alice Smith for 'Luxury Villa' booking #ref-9823. The transaction has been processed and the receipt has been emailed to the client.",
        type: "success",
        status: "unread",
        date: "2024-01-20T13:15:00",
        link: "/dashboard/payments",
    },
    {
        id: 3,
        title: "Document Verified",
        message: "Your identity verification documents have been reviewed and approved by our compliance team. You now have full access to all verified features on the platform. Thank you for your cooperation.",
        type: "success",
        status: "read",
        date: "2024-01-19T09:00:00",
    },
    {
        id: 4,
        title: "Property Alert",
        message: "A new property matching your saved 'London Penthouse' criteria was just listed: 3-Bedroom Penthouse in Canary Wharf with river views. Check it out before it's gone!",
        type: "alert",
        status: "unread",
        date: "2024-01-18T18:45:00",
        link: "/dashboard/opportunities/4",
    },
    {
        id: 5,
        title: "System Update",
        message: "The dashboard will be undergoing scheduled maintenance on Jan 25th from 1:00 AM to 3:00 AM UTC. Services may be intermittently unavailable during this time. We apologize for any inconvenience.",
        type: "warning",
        status: "read",
        date: "2024-01-15T11:00:00",
    },
    {
        id: 6,
        title: "Message from Support",
        message: "We've responded to your inquiry regarding invoice #INV-2023-001. Please check your support inbox for the full details and next steps regarding the refund process.",
        type: "info",
        status: "archived",
        date: "2024-01-10T16:20:00",
    },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const filteredNotifications = notifications.filter((notification) => {
        const matchesSearch =
            notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notification.message.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTab =
            activeTab === "all" ? notification.status !== "archived" :
                activeTab === "unread" ? notification.status === "unread" :
                    activeTab === "archived" ? notification.status === "archived" : true;

        return matchesSearch && matchesTab;
    });

    const unreadCount = notifications.filter(n => n.status === "unread").length;

    const markAsRead = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, status: "read" } : n));
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(n => n.status === "unread" ? { ...n, status: "read" } : n));
    };

    const archiveNotification = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, status: "archived" } : n));
    };

    const deleteNotification = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const ExampleIcon = ({ type }: { type: NotificationType }) => {
        switch (type) {
            case "success": return <CheckCircle className="w-5 h-5 text-green-500" />;
            case "warning": return <AlertCircle className="w-5 h-5 text-yellow-500" />;
            case "alert": return <Bell className="w-5 h-5 text-blue-500" />;
            case "info": default: return <MessageSquare className="w-5 h-5 text-gray-500" />;
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

        if (diffInSeconds < 60) return "Just now";
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return date.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
    };

    const openNotificationDetails = (notification: Notification) => {
        setSelectedNotification(notification);
        setIsDialogOpen(true);
        if (notification.status === "unread") {
            markAsRead(notification.id);
        }
    };

    return (
        <div className="space-y-6">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <div className="flex items-center gap-2 mb-2">
                            {selectedNotification && (
                                <div className={cn(
                                    "p-2 rounded-full",
                                    selectedNotification.type === "info" ? "bg-gray-100" :
                                        selectedNotification.type === "success" ? "bg-green-100" :
                                            selectedNotification.type === "warning" ? "bg-yellow-100" : "bg-blue-100"
                                )}>
                                    <ExampleIcon type={selectedNotification.type} />
                                </div>
                            )}
                            <DialogTitle>{selectedNotification?.title}</DialogTitle>
                        </div>
                        <DialogDescription className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            {selectedNotification && formatDate(selectedNotification.date)}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <p className="text-sm leading-relaxed text-foreground">
                                {selectedNotification?.message}
                            </p>
                        </div>

                        {selectedNotification?.link && (
                            <Button className="w-full" asChild>
                                <a href={selectedNotification.link}>
                                    Go to {selectedNotification.link.split('/')[2]}
                                </a>
                            </Button>
                        )}
                    </div>

                    <DialogFooter>
                        <div className="flex w-full justify-between gap-2">
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                Close
                            </Button>
                            {selectedNotification?.status !== "archived" && (
                                <Button
                                    variant="ghost"
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                    onClick={() => {
                                        if (selectedNotification) archiveNotification(selectedNotification.id);
                                        setIsDialogOpen(false);
                                    }}
                                >
                                    <Archive className="w-4 h-4 mr-2" />
                                    Archive
                                </Button>
                            )}
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 pb-6 border-b border-border/50">
                <div>
                    <h1 className="text-3xl font-black text-foreground uppercase tracking-tight flex items-center">
                        Notifications
                        {unreadCount > 0 && (
                            <Badge variant="destructive" className="ml-3 rounded-full h-6 w-6 flex items-center justify-center p-0 text-xs">
                                {unreadCount}
                            </Badge>
                        )}
                    </h1>
                    <p className="text-muted-foreground font-medium italic">
                        Stay updated with your latest activity and alerts
                    </p>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" onClick={markAllAsRead} className="rounded-xl border-border/50 text-xs font-bold uppercase tracking-widest" disabled={unreadCount === 0}>
                        <MailOpen className="w-4 h-4 mr-2" />
                        Mark all read
                    </Button>
                </div>
            </div>

            {/* Controls */}
            <Card className="rounded-3xl border-border/50 shadow-xl">
                <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                            <TabsList className="bg-muted/50 rounded-2xl p-1 h-12 w-full md:w-auto grid grid-cols-3 md:flex">
                                <TabsTrigger value="all" className="rounded-xl font-bold text-xs uppercase tracking-widest px-6">All</TabsTrigger>
                                <TabsTrigger value="unread" className="rounded-xl font-bold text-xs uppercase tracking-widest px-6">Unread</TabsTrigger>
                                <TabsTrigger value="archived" className="rounded-xl font-bold text-xs uppercase tracking-widest px-6">Archived</TabsTrigger>
                            </TabsList>
                        </Tabs>

                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search notifications..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Notifications List */}
            <div className="space-y-3">
                {filteredNotifications.length === 0 ? (
                    <Card className="rounded-3xl border-border/50 shadow-xl py-12 text-center">
                        <CardContent>
                            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900">No notifications found</h3>
                            <p className="text-gray-500 mt-1">
                                {searchTerm ? "Try adjusting your search terms" : "You're all caught up!"}
                            </p>
                        </CardContent>
                    </Card>
                ) : (
                    filteredNotifications.map((notification) => (
                        <Card
                            key={notification.id}
                            className={cn(
                                "rounded-2xl border-border/50 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer",
                                notification.status === "unread" ? "bg-card border-l-4 border-l-primary" : "bg-muted/30 opacity-90"
                            )}
                            onClick={() => openNotificationDetails(notification)}
                        >
                            <CardContent className="p-4 md:p-5 flex flex-col md:flex-row gap-4 items-start md:items-center">
                                <div className={cn(
                                    "p-2 rounded-full flex-shrink-0",
                                    notification.status === "unread" ? "bg-primary/10" : "bg-gray-100"
                                )}>
                                    <ExampleIcon type={notification.type} />
                                </div>

                                <div className="flex-1 space-y-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                        <h4 className={cn("font-semibold text-sm", notification.status === "read" && "text-muted-foreground")}>
                                            {notification.title}
                                        </h4>
                                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider flex items-center">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {formatDate(notification.date)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2">{notification.message}</p>
                                </div>

                                <div className="flex items-center gap-2 self-end md:self-center ml-auto">
                                    <Button
                                        variant="ghost"
                                        className="h-8 text-xs text-primary font-semibold hover:bg-primary/10"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openNotificationDetails(notification);
                                        }}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
};