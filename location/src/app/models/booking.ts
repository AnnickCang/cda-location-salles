export interface Booking {
  id: number;
  roomId: number;
  title: string;
  organizer: string;
  startDate: Date;
  endDate: Date;
  attendees: number;
}
