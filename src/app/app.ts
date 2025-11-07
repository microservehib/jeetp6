import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Profil } from './profil/profil';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Profil, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // fixed from styleUrl to styleUrls
})
export class App {
  protected readonly title = signal('tp-angular20');
}
