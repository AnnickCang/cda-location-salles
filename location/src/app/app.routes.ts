import { Routes } from '@angular/router';
import { FormulaireReservation } from './pages/formulaire-reservation/formulaire-reservation';
import { Test } from './pages/test/test';

export const routes: Routes = [
  //{ path: 'salles', title: 'Accueil |Liste des salles', component: PageSalle },
  // {   path: 'salles/:id',    title: "Détails de la salle",    component: DetailsSalle,  },
  {
    path: 'salles/:id/reserver',
    title: 'Réservation de salle',
    component: FormulaireReservation,
  },
  {
    path: 'test',
    title: 'Page de test',
    component: Test,
  },
];
