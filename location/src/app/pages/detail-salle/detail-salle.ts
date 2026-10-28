import { Component, inject, input, computed, numberAttribute } from '@angular/core';
import { RoomStore } from '../../service/room-store';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-detail-salle',
  styleUrl: './detail-salle.css',
  templateUrl: './detail-salle.html',
})
export class DetailSalle {
  protected readonly id = input.required<number, string>({
    transform: numberAttribute,
  });

  protected readonly roomStore = inject(RoomStore);

  protected readonly room = computed(() => this.roomStore.get(Number(this.id())));

  constructor() {
    this.roomStore.loadRooms();
  }

  protected readonly equipmentLabels: Record<string, string> = {
    'tableau-blanc': 'Tableau blanc',
    videoprojecteur: 'Vidéoprojecteur',
    visio: 'Visioconférence',
    ecran: 'Écran',
    sonorisation: 'Sonorisation',
  };
}
