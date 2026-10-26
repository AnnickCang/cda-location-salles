import { Service, signal } from '@angular/core';
import { Booking } from '../models/booking';
@Service()
export class BookingStore {
  private readonly BookingSignal = signal<Booking[]>([
    {
      id: 1,
      roomId: 1,
      title: "Point hebdomadaire de l'équipe pédagogique",
      organizer: 'Nadia Benali',
      date: '{{J+1}}',
      start: '09:00',
      end: '10:00',
      attendees: 8,
    },
    {
      id: 2,
      roomId: 1,
      title: 'Jury de certification',
      organizer: 'Paul Girard',
      date: '{{J+1}}',
      start: '13:30',
      end: '17:00',
      attendees: 5,
    },
    {
      id: 3,
      roomId: 2,
      title: 'Entretien de recrutement',
      organizer: 'Léa Moreau',
      date: '{{J+1}}',
      start: '10:00',
      end: '11:00',
      attendees: 3,
    },
    {
      id: 4,
      roomId: 4,
      title: "Conférence : l'accessibilité numérique",
      organizer: 'Hugo Lambert',
      date: '{{J+2}}',
      start: '14:00',
      end: '16:00',
      attendees: 28,
    },
    {
      id: 5,
      roomId: 3,
      title: 'Atelier de conception',
      organizer: 'Camille Faure',
      date: '{{J+2}}',
      start: '09:30',
      end: '12:00',
      attendees: 4,
    },
    {
      id: 6,
      roomId: 5,
      title: 'Revue de sprint',
      organizer: 'Nadia Benali',
      date: '{{J+3}}',
      start: '16:00',
      end: '17:00',
      attendees: 7,
    },
    {
      id: 7,
      roomId: 1,
      title: 'Comité de direction',
      organizer: 'Paul Girard',
      date: '{{J+5}}',
      start: '08:30',
      end: '10:30',
      attendees: 10,
    },
    {
      id: 8,
      roomId: 6,
      title: 'Appel client',
      organizer: 'Léa Moreau',
      date: '{{J+5}}',
      start: '11:00',
      end: '11:30',
      attendees: 2,
    },
    {
      id: 9,
      roomId: 2,
      title: 'Formation des tuteurs',
      organizer: 'Hugo Lambert',
      date: '{{J-3}}',
      start: '09:00',
      end: '12:00',
      attendees: 6,
    },
  ]);
  readonly bookings = this.BookingSignal.asReadonly();

  // Prochain identifiant libre
  private nextId = 10;
  //attribution id
  add(booking: Omit<Booking, 'id'>): void {
    const newbooking: Booking = { ...booking, id: this.nextId++ };
    this.BookingSignal.update((list) => [...list, newbooking]);
  }
}
