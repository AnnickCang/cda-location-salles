import { inject, Service } from '@angular/core';
import { Booking } from '../models/booking';
import { toSignal } from '@angular/core/rxjs-interop';
import { RoomApi } from '../core/room-api';
import { firstValueFrom } from 'rxjs';
@Service()
export class BookingStore {
  //readonly bookings = this.BookingSignal.asReadonly();
  private readonly BookingApi = inject(RoomApi);

  // Vide au départ, remplie quand la réponse arrive.
  //protected readonly Bookings = signal<Booking[]>([]);

  //constructor() {
  // subscribe : la requête part maintenant. Le callback reçoit la réponse.
  //this.BookingApi.getBookings().subscribe((booking) => this.Bookings.set(booking));
  //}
  readonly bookings = toSignal(this.BookingApi.getBookings(), { initialValue: [] });
  // Prochain identifiant libre
  getIdBooking(): number {
    let newId = 0;

    for (const el of this.bookings()) {
      if (el.id > newId) {
        newId = el.id;
      }
    }
    console.log('newId=' + newId);
    return newId + 1;
  }
  //attribution id
  async add(booking: Omit<Booking, 'id'>): Promise<void> {
    const newbooking: Booking = { ...booking, id: this.getIdBooking() };
    console.log('add lancé');
    await firstValueFrom(this.BookingApi.postBooking(newbooking));
  }
  //
  disponibility(roomId: number, date: string, start: string, end: string): boolean {
    console.log(roomId, date, start, end);
    return true;
  }
}
