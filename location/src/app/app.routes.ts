import { Routes } from '@angular/router';
import { PageReservation } from './pages/page-reservation/page-reservation';

export const routes: Routes = [
  //{ path: 'salles', title: 'Accueil |Liste des salles', component: PageSalle },
  // {   path: 'salles/:id',    title: "Détails de la salle",    component: DetailsSalle,  },
  {
    path: 'salles/reserver/:id',
    title: 'Réservation de salle',
    component: PageReservation,
  },
  { path: '**', redirectTo: '' },
];
