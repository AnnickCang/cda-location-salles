import { Component, input } from '@angular/core';
import { Room } from '../../models/room';
@Component({
  imports: [],
  selector: 'app-room-card',
  styleUrl: './room-card.css',
  templateUrl: './room-card.html',
})
export class RoomCard {
  readonly room = input.required<Room>();
}
