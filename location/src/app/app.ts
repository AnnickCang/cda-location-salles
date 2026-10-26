import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomList } from './pages/room-list/room-list';

@Component({
  imports: [RouterOutlet, RoomList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('location');
}
