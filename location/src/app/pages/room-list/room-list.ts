import { Component, inject } from '@angular/core';
import { RoomStore } from '../../service/room-store';
import { RoomCard } from '../../components/room-card/room-card';

@Component({
  imports: [RoomCard],
  selector: 'app-room-list',
  styleUrl: './room-list.css',
  templateUrl: './room-list.html',
})
export class RoomList {
  protected readonly roomStore = inject(RoomStore);

  constructor() {
    this.roomStore.loadRooms();
  }
}
