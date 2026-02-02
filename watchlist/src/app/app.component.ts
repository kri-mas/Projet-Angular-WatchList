import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MovieListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <-- attention, c'est styleSUrls et non styleUrl
})
export class AppComponent {
  
  title = 'watchlist';
}









