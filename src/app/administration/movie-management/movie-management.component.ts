import { Component, OnInit } from '@angular/core';
import { Movie } from 'models/movie.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MovieDetailsComponent } from 'src/app/movies/movie-details/movie-details.component';
import { MoviesService } from 'src/app/movies/movies.service';
import { MovieUploadComponent } from '../movie-upload/movie-upload.component';

@Component({
  selector: 'app-movie-management',
  templateUrl: './movie-management.component.html',
  styleUrls: ['./movie-management.component.scss']
})
export class MovieManagementComponent implements OnInit {

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
      isAdmin: true,
    };
    this.modalService.show(MovieDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState });
  }

  uploadMovie() {
    this.modalService.show(MovieUploadComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true });
  }

}
