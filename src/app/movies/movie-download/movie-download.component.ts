import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { getnowDate } from 'utils/getnow';
import { MoviesService } from '../movies.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-movie-download',
  templateUrl: './movie-download.component.html',
  styleUrls: ['./movie-download.component.scss']
})
export class MovieDownloadComponent implements OnInit {

  card: any = {
    name: '',
    email: '',
    number: '',
    code: '',
    validity: '',
  };
  movie: any;
  isVisa = false;
  isMasterCard = false;
  wrongNumber = false;
  wrongDate = false;
  constructor(
    private movieService: MoviesService,
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }

  validateNumber() {
    if (this.card.number !== '' && (this.card.number[0] !== '4' && this.card.number[0] !== '5')) {
      this.wrongNumber = true;
    } else {
      this.wrongNumber = false;
    }
  }

  validateDate() {
    if(this.card.validity!==''){
      const eDate = `20`+this.card.validity[2]+this.card.validity[3]+'-'+this.card.validity[0]+this.card.validity[1]+'-'+'01';
      const vDate = getnowDate();
      if(eDate>vDate){
        this.wrongDate = false;
      } else {
        this.wrongDate = true;
      }
    }
  }
  downloadMovie(form: NgForm) {
    this.movieService.getMovie(this.movie.id).then(async (res) => {
      const blob = res;
      console.log(blob);
      const file = new File([blob], this.movie.name + '.mp4');
      console.log(file);
      saveAs(file);
      this.bsModalRef.hide();
    });
  }
}
