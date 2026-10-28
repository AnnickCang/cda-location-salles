import { Component, inject, input } from '@angular/core';
//import { InfoSalle } from '../../components/info-salle/info-salle';
import { ListeResaSalle } from '../../components/liste-resa-salle/liste-resa-salle';
import { RoomApi } from '../../core/room-api';

@Component({
  imports: [ListeResaSalle],
  selector: 'app-detail-salle',
  styleUrl: './detail-salle.css',
  templateUrl: './detail-salle.html',
})
export class DetailSalle {
  protected readonly roomId = input.required<number>();
  /* protected readonly roomSelected: Room = {
    id: 1,
    name: 'Confluence',
    floor: 0,
    capacity: 12,
    equipment: ['videoprojecteur', 'visio', 'tableau-blanc'],
    accessible: true,
  };*/

  protected readonly roomApi = inject(RoomApi);
  //  protected readonly listeDesSalles = signal<Room[]>([]);

  /*listeDesSalles(): Observable<Room[]> {
    return this.roomApi.getInfosSalles();
  }*/
}
