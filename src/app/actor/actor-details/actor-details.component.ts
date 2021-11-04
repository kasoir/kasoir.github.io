import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Actor, getDefaultActor } from 'models/actor.model';
import { Movie } from 'models/movie.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { MoviesService } from 'src/app/movies/movies.service';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})
export class ActorDetailsComponent implements OnInit, OnDestroy {

  hideEvent: EventEmitter<any> = new EventEmitter();

  public data: any;
  public actor: Actor = getDefaultActor();
  public isAdmin: boolean = false;
  public done = false;
  public movies: Movie[] = [];
  public moviesNames: any[] = [];
  public checkedMovie: any;
  public canEdit: any;

  constructor(
    private actorService: ActorService,
    private messageService: MessageService,
    public bsModalRef: BsModalRef,
    private movieService: MoviesService,
  ) { }

  ngOnDestroy(): void {
    this.hideEvent.next();
  }

  async ngOnInit() {
    this.movies = await this.movieService.getBy();
    if (this.data) {
      this.actor = this.data;
    }

    this.movies?.forEach(m => {
      this.moviesNames.push({ name: m.name, code: m.id });
    })
    this.done = true;
  }

  create = async () => {
    const result = await this.actorService.createActor(this.actor);
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Added successfully...' });
      this.bsModalRef.hide();
    }
  }
  update = async () => {
    const result = await this.actorService.updateActor(this.actor);
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Updated successfully...' });
      this.bsModalRef.hide();
    }
  }

  selectMovie() {
    if (this.actor.movies.filter(m => m.id === this.checkedMovie).length === 0) {
      this.actor.movies.push(this.movies.filter(m => m.id === this.checkedMovie)[0]);
    }
  }

  movieDelete(index: number) {
    this.actor.movies.splice(index, 1);
  }

}
