import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: Movie;

  @Output() delete = new EventEmitter<number>();
  @Output() rate = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  isWatched = false; // <-- état local pour la carte

  onToggleWatched() {
    this.isWatched = !this.isWatched;  // bascule le style et le badge
    this.toggle.emit(this.movie.id);    // notifie le parent
  }
}
