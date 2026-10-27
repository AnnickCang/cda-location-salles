import { Component } from '@angular/core';
import { FormulaireReservation } from '../../components/formulaire-reservation/formulaire-reservation';

@Component({
  imports: [FormulaireReservation],
  selector: 'app-test',
  styleUrl: './test.css',
  templateUrl: './test.html',
})
export class Test {}
