import { Component, computed, input, inject } from '@angular/core';
import { FormulaireReservation } from '../../components/formulaire-reservation/formulaire-reservation';
import { RoomStore } from '../../service/room-store';

@Component({
  imports: [FormulaireReservation],
  selector: 'app-page-reservation',
  styleUrl: './page-reservation.css',
  templateUrl: './page-reservation.html',
})
export class PageReservation {
  readonly roomId = input.required<number>();
  readonly roomStore = inject(RoomStore);
  readonly lsalle = computed(() => this.roomStore.get(Number(this.roomId())));
}
