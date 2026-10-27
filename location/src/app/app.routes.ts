import { Routes } from '@angular/router';
import { PageReservation } from './pages/page-reservation/page-reservation';
import { RoomList } from './pages/room-list/room-list';

export const routes: Routes = [
  { path: '/', title: 'Accueil | Liste des salles', component: RoomList },
  // {   path: 'salles/:id',    title: "Détails de la salle",    component: DetailsSalle,  },
  {
    path: 'salles/reserver/:id',
    title: 'Réservation de salle',
    component: PageReservation,
  },
  { path: '**', redirectTo: '' },
];
