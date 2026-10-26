import { Service, signal } from '@angular/core';
import { Room } from '../models/room';
@Service()
export class RoomStore {
  private readonly roomsSignal = signal<Room[]>([
    {
      id: 1,
      name: 'Confluence',
      floor: 0,
      capacity: 12,
      equipment: ['videoprojecteur', 'visio', 'tableau-blanc'],
      accessible: true,
    },
    {
      id: 2,
      name: 'Fourvière',
      floor: 1,
      capacity: 6,
      equipment: ['ecran', 'visio'],
      accessible: true,
    },
    {
      id: 3,
      name: 'Croix-Rousse',
      floor: 1,
      capacity: 4,
      equipment: ['tableau-blanc'],
      accessible: false,
    },
    {
      id: 4,
      name: 'Bellecour',
      floor: 2,
      capacity: 30,
      equipment: ['videoprojecteur', 'sonorisation', 'visio'],
      accessible: true,
    },
    {
      id: 5,
      name: 'Part-Dieu',
      floor: 2,
      capacity: 8,
      equipment: ['ecran', 'tableau-blanc'],
      accessible: true,
    },
    { id: 6, name: 'Gerland', floor: 3, capacity: 2, equipment: ['ecran'], accessible: false },
  ]);
  readonly rooms = this.roomsSignal.asReadonly();
  get(id: number): Room | undefined {
    return this.rooms().find((room) => room.id === id);
  }
}
