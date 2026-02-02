import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MovieListComponent],
  template: `
    <app-header></app-header>
    <app-movie-list></app-movie-list>
  `
})
export class AppComponent {}
