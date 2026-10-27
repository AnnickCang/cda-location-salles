import { Component, computed, input, inject } from '@angular/core';
//import { FormulaireReservation } from '../../components/formulaire-reservation/formulaire-reservation';
import { RoomStore } from '../../service/room-store';

@Component({
  imports: [], //FormulaireReservation
  selector: 'app-page-reservation',
  styleUrl: './page-reservation.css',
  templateUrl: './page-reservation.html',
})
export class PageReservation {
  //implements OnInit {
  readonly id = input.required<number>();
  readonly roomStore = inject(RoomStore);
  psalle = computed(() => this.roomStore.get(Number(this.id())));
  //ngOnInit(): void {
  //this.roomId();
  // this.psalle = computed(() => this.roomStore.get(Number(this.id())));
  // }
}
