export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled" | "no_show";

export interface Booking {
    id: string;
    publicId: string;
    listingId: string;
    requestedByUserId: string;
    assignedToAgentProfileId?: string;
    scheduleAt: string; // ISO Date
    endAt: string; // ISO Date
    status: BookingStatus;
    notesUser: string;
    notesInternal: string;
    createdAt: string;
    updatedAt: string;
}
