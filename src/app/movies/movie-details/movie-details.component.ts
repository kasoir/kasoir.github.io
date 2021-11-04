import { Component, OnInit } from '@angular/core';
import { Movie } from 'models/movie.model';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MoviesService } from '../movies.service';
import { MessageService } from 'primeng/api';
import { MovieDownloadComponent } from '../movie-download/movie-download.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public data: any;
  public isAdmin: boolean = false;
  public done = false;
  canRate = true;
  currentRate = 0;
  constructor(
    public bsModalRef: BsModalRef,
    private movieService: MoviesService,
    private messageService: MessageService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.done = true;
    }
  }

  submitRating = async () => {
    this.canRate = false;
    const result = await this.movieService.updateMovie(this.data);
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Rate added successfully...' });
      this.bsModalRef.hide();
    }
  }
  update = async () => {
    const result = await this.movieService.updateMovie(this.data);
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Updated successfully...' });
      this.bsModalRef.hide();
    }
  }

  downloadMovie = async (form: NgForm) => {
    const initialState = {
			movie: this.data
		};
		this.modalService.show( MovieDownloadComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState } );
    this.bsModalRef.hide();
  }
}
