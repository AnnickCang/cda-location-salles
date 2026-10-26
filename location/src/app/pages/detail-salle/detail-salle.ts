import { Component, input } from '@angular/core';
import { Booking, Room } from '../../models/room';
import { InfoSalle } from '../../components/info-salle/info-salle';

@Component({
  imports: [InfoSalle],
  selector: 'app-detail-salle',
  styleUrl: './detail-salle.css',
  templateUrl: './detail-salle.html',
})
export class DetailSalle {
  protected readonly rommId = input.required<number>();
  protected readonly roomSelected: Room = {
    id: 1,
    name: 'Confluence',
    floor: 0,
    capacity: 12,
    equipment: ['videoprojecteur', 'visio', 'tableau-blanc'],
    accessible: true,
  };
}
