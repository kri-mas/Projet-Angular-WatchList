import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  movieService = inject(MovieService);

  onSuggest() {
    this.movieService.addRandomMovie();
  }

}
