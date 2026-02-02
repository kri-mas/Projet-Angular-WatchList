import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, MovieService],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
// movieService = inject(MovieService);
// @Input() movie!: Movie;
// @Output() delete = new EventEmitter<number>();
// @Output() rate = new EventEmitter<number>(); // <-- doit émettre number
// @Output() toggle = new EventEmitter<number>();

//   // Méthode appelée depuis le template du composant enfant
//   onRate(newRating: number) {
//     this.rate.emit(newRating);
//   }

//   onDelete() {
//     this.delete.emit(this.movie.id);
//   }

//   onToggle() {
//     this.toggle.emit(this.movie.id);
//   }
  movieService = inject(MovieService);

}
