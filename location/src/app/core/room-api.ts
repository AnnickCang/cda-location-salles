import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { Room } from '../models/room';
@Service()
export class RoomApi {
  private readonly http = inject(HttpClient);
  //Post Booking
  postBooking(data: Booking): Observable<void> {
    console.log('post');
    return this.http.post<void>('/api/bookings', data);
  }

  // Récupération des informations d'une salle
  getInfoSalle(id: number): Observable<Room[]> {
    return this.http.get<Room[]>(`/api/rooms/${id}`);
  }

  // Récupération des réservations
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>('/api/bookings');
  }

  // récupération des réservations d'une salle
  getBookingsOfRoom(id: number): Observable<Booking[]> {
    return this.http.get<Booking[]>(`/api/rooms/${id}?_embed=bookings`);
  }
}
