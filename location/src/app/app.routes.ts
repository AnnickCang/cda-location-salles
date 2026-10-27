import { Routes } from '@angular/router';
import { FormulaireReservation } from './components/formulaire-reservation/formulaire-reservation';

export const routes: Routes = [
  //{ path: 'salles', title: 'Accueil |Liste des salles', component: PageSalle },
  // {   path: 'salles/:id',    title: "Détails de la salle",    component: DetailsSalle,  },
  {
    path: 'salles/:id/reserver',
    title: 'Réservation de salle',
    component: FormulaireReservation,
  },
  { path: '**', redirectTo: '' },
];
