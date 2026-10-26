import { Component, inject, input } from '@angular/core';
import { InfoSalle } from '../../components/info-salle/info-salle';
import { ListeResaSalle } from '../../components/liste-resa-salle/liste-resa-salle';
import { RoomApi } from '../../core/room-api';
import { CommonModule } from '@angular/common';

@Component({
  imports: [InfoSalle, ListeResaSalle, CommonModule],
  selector: 'app-detail-salle',
  styleUrl: './detail-salle.css',
  templateUrl: './detail-salle.html',
})
export class DetailSalle {
  protected readonly roomApi = inject(RoomApi);
  readonly roomId = input<number>(1);

  protected readonly selectedRoom$ = this.roomApi.getInfoSalle(this.roomId());
}
