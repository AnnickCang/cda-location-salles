import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailSalle } from './pages/detail-salle/detail-salle';

@Component({
  imports: [DetailSalle, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('location');
}
