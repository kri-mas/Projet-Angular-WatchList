import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from '../app/components/movie-list/movie-list.component';  // <-- importer le composant
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent],  // <-- ajouter ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <-- attention, c'est styleSUrls et non styleUrl
})
export class AppComponent {
  }

