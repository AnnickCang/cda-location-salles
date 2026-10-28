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
  readonly id = input.required<number>();
  readonly roomStore = inject(RoomStore);
  constructor() {
    this.roomStore.loadRooms();
  }
  //implements OnInit {
  psalle = computed(() => this.roomStore.get(Number(this.id())));
  //ngOnInit(): void {
  //this.roomId();
  // this.psalle = computed(() => this.roomStore.get(Number(this.id())));
  // }
}
/* Svg html pour test
@if (psalle() === undefined) {
  <p>Salle introuvable</p>
} @else {
  <app-formulaire-reservation [idSalle]="id()"></app-formulaire-reservation>
}
*/
