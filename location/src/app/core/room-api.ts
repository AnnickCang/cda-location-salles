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
    return this.http.post<void>('/api/bookings', data);
  }

  // GET rooms
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('/api/rooms');
  }
}
