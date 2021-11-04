import { Component, OnInit } from '@angular/core';
import { Movie } from 'models/movie.model';
import { MoviesService } from '../movies.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public movies: Movie[] = [];
  constructor(
    private movieService: MoviesService,
    private modalService: BsModalService,
  ) { }

  async ngOnInit() {
    this.movies = await this.movieService.getBy();
  }
  movieDetalis(movie: Movie) {
    const initialState = {
			data: movie,
		};
		this.modalService.show( MovieDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState } );
  }

}
