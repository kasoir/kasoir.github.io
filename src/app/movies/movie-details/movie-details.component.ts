import { Component, OnInit } from '@angular/core';
import { Movie } from 'models/movie.model';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MoviesService } from '../movies.service';
import { MessageService } from 'primeng/api';
import { saveAs } from 'file-saver';

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
    private messageService: MessageService
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
    this.movieService.getMovie(this.data.id).then(async (res) => {
      const blob = res;
      console.log(blob);
      const file = new File([blob], this.data.name + '.mp4');
      console.log(file);
      saveAs(file);
    });
  }
}
