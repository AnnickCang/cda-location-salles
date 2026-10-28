import { Component, input } from '@angular/core';
import { Room } from '../../models/room';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'app-room-card',
  styleUrl: './room-card.css',
  templateUrl: './room-card.html',
})
export class RoomCard {
  readonly room = input.required<Room>();
}
