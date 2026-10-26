import { Component, input } from '@angular/core';
import { Room } from '../../models/room';

@Component({
  imports: [],
  selector: 'app-info-salle',
  styleUrl: './info-salle.css',
  templateUrl: './info-salle.html',
})
export class InfoSalle {
  readonly room = input.required<Room>();
}
