import { Component, inject, input, signal } from '@angular/core';
import { FormField, FormRoot, form, minLength, required } from '@angular/forms/signals';
import { BookingStore } from '../../service/booking-store';
import { Router } from '@angular/router';

//definition contenu formulaire
export interface DraftBooking {
  title: string;
  organizer: string;
  date: string;
  start: string;
  end: string;
  attendees: number;
}

const EMPTY_DRAFT: DraftBooking = {
  title: '',
  organizer: '',
  date: '',
  start: '',
  end: '',
  attendees: 0,
};

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-formulaire-reservation',
  styleUrl: './formulaire-reservation.css',
  templateUrl: './formulaire-reservation.html',
})
export class FormulaireReservation {
  //information salle selectionné

  readonly idSalle = input.required<number>();

  readonly roomBooking = inject(BookingStore);
  protected readonly submitAttempted = signal(false);

  private readonly draft = signal<DraftBooking>({ ...EMPTY_DRAFT });

  protected readonly bookingForm = form(
    //chargement données

    this.draft,
    // Le schéma : les règles de validation de chaque champ.
    (path) => {
      required(path.title, { message: 'Le titre est obligatoire.' });
      minLength(path.title, 5, { message: 'Le titre doit contenir au moins 5 lettres.' });
      required(path.organizer, { message: "L'organisateur est obligatoire." });
      required(path.date, { message: 'La date est obligatoire.' });
      //champs est une date
      required(path.start, { message: "L'heure de début est obligatoire." });
      required(path.end, { message: "L'heure de fin est obligatoire." });
      required(path.attendees, { message: 'Le nombre de participant est obligatoire.' });
      //ajouter start>end
    },
    {
      submission: {
        action: async () => this.save(),
        onInvalid: async () => this.submitAttempted.set(true),
      },
    },
  );
  protected resetForm(): void {
    this.bookingForm().reset({ ...EMPTY_DRAFT });
  }
  private readonly router = inject(Router);
  private async save(): Promise<void> {
    console.log('save activé');
    await this.roomBooking.add({ ...this.draft(), roomId: this.idSalle() });
    this.resetForm();
    console.log('fin save');
    await this.router.navigate([`salles/${this.idSalle()}`]); 
  }
}
