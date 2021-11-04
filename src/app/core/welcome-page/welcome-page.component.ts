import { Component, OnInit } from '@angular/core';
import { Movie } from 'models/movie.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MovieDetailsComponent } from 'src/app/movies/movie-details/movie-details.component';
import { MoviesService } from 'src/app/movies/movies.service';
import { getnow } from 'utils/getnow';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  public movies: Movie[] = [];
  public responsiveOptions: any;

  constructor(
    private movieService: MoviesService,
    private modalService: BsModalService,
    ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  async ngOnInit() {
    const dateObject = new Date();
    const month = dateObject.getMonth() - 11;
    const year = dateObject.getFullYear();
    let compareDate = '';
    month < 0 ? compareDate = (year - 1).toString() + (12+month).toString() + '01' : compareDate = year.toString() + month.toString() + '01';
    this.movies = await this.movieService.getRecentlyMovies(compareDate);
  }

  openMovieDetails(movie: Movie) {
    const initialState = {
			data: movie,
		};
		this.modalService.show( MovieDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState } );
  }

}
