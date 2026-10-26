import { Service, inject, signal } from '@angular/core';
import { RoomApi } from '../core/room-api';
import { Room } from '../models/room';

@Service()
export class RoomStore {
  private readonly api = inject(RoomApi);

  private readonly _rooms = signal<Room[]>([]);
  readonly rooms = this._rooms.asReadonly();

  private readonly _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  private readonly _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  // fonction chargement de l'API

  loadRooms(): void {
    this._loading.set(true);
    this._error.set(null);

    this.api.getRooms().subscribe({
      next: (rooms) => {
        this._rooms.set(rooms);
      },
    });
  }
}
