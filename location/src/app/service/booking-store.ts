import { inject, Service } from '@angular/core';
import { Booking } from '../models/booking';
import { toSignal } from '@angular/core/rxjs-interop';
import { RoomApi } from '../core/room-api';
import { firstValueFrom } from 'rxjs';
import type { ValidationError } from '@angular/forms/signals';
@Service()
export class BookingStore {
  //Recuperation service API
  private readonly BookingApi = inject(RoomApi);

  //recupération de la liste bookings
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
  //Enregistrement reservation
  async add(booking: Omit<Booking, 'id'>): Promise<void> {
    const newbooking: Booking = { ...booking, id: this.getIdBooking() };
    console.log('add lancé');
    await firstValueFrom(this.BookingApi.postBooking(newbooking));
  }
  //private listBookings: Booking[];
  // Controle disponibilité créneau
  disponibility(roomId: number, date: string, start: string, end: string): ValidationError | null {
    if (!date || !start || !end) {
      return null;
    }
    const hasConflict = this.bookings().some(
      (booking) =>
        booking.roomId === roomId &&
        booking.date === date &&
        (start < booking.end || end > booking.start),
    );
    return hasConflict
      ? { kind: 'unavailable', message: "La salle n'est pas disponible sur ce créneau." }
      : null;
  }
}
