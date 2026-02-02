import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movies: Movie[] = [];


  // BANQUE DE 25 FILMS (Liens TMDB Officiels)
  private movieBank: Movie[] = [
    // --- ACTION / SCI-FI ---
    { id: 1, title: 'Inception', year: 2010, rating: 5, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg' },
    { id: 2, title: 'The Dark Knight', year: 2008, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { id: 3, title: 'Interstellar', year: 2014, rating: 4, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/gEU2QniL6E77NI6lCU6MxlNBvIx.jpg' },
    { id: 4, title: 'Avatar: The Way of Water', year: 2022, rating: 4, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
    { id: 5, title: 'The Matrix', year: 1999, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
    { id: 6, title: 'Avengers: Endgame', year: 2019, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
    { id: 7, title: 'Spider-Man: No Way Home', year: 2021, rating: 4, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4GY0d.jpg' },
    { id: 8, title: 'Top Gun: Maverick', year: 2022, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg' },
    { id: 9, title: 'Dune', year: 2021, rating: 4, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { id: 10, title: 'Black Panther', year: 2018, rating: 4, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg' },
   
    // --- DRAMA / THRILLER ---
    { id: 11, title: 'Joker', year: 2019, rating: 5, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { id: 12, title: 'Pulp Fiction', year: 1994, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg' },
    { id: 13, title: 'Fight Club', year: 1999, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg' },
    { id: 14, title: 'The Godfather', year: 1972, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
    { id: 15, title: 'The Shawshank Redemption', year: 1994, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
    { id: 16, title: 'Parasite', year: 2019, rating: 5, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { id: 17, title: 'Forrest Gump', year: 1994, rating: 4, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg' },


    // --- ANIMATION ---
    { id: 18, title: 'Spider-Man: Into the Spider-Verse', year: 2018, rating: 5, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg' },
    { id: 19, title: 'Coco', year: 2017, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg' },
    { id: 20, title: 'The Lion King', year: 1994, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
    { id: 21, title: 'Spirited Away', year: 2001, rating: 5, isWatched: false, image: 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUKGudW53yola.jpg' },
    { id: 22, title: 'Toy Story', year: 1995, rating: 4, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg' },
    { id: 23, title: 'Wall-E', year: 2008, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/hExQp2CstkGkN3W4721A0Fm1M8E.jpg' },
   
    // --- CLASSICS ---
    { id: 24, title: 'Titanic', year: 1997, rating: 4, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
    { id: 25, title: 'Back to the Future', year: 1985, rating: 5, isWatched: true, image: 'https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAQL9QB476a.jpg' }
  ];


  constructor() { }


  addRandomMovie() {
    let id = Math.floor(Math.random() * 24) + 1;
    let foundMovie = this.movieBank.find(obj => obj.id === id);

  while (foundMovie && this.movies.includes(foundMovie)) {
    id = Math.floor(Math.random() * 24) + 1;
    foundMovie = this.movieBank.find(obj => obj.id === id);
  }

  if (foundMovie) {
    this.movies.push(foundMovie);
  }
    }


  deleteMovie(id: number) {
    this.movies = this.movies.filter(m => m.id != id )
  }


  updateRating(id: number, delta: number) {
    let m =  this.movies.find(m => m.id == id )!;
    let num = m.rating + delta;

    if (num >= 1 && num <= 5) {
    m.rating = num;
  }
      }


  toggleWatched(id: number) {
    let m =  this.movies.find(m => m.id == id )!;
m.isWatched=! m.isWatched;
     }
}