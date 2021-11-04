import { Component, OnInit } from '@angular/core';
import { Actor } from 'models/actor.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { objectify } from 'utils/objectify';
import { ActorDetailsComponent } from '../actor-details/actor-details.component';
import { ActorService } from '../actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {


	ngUnsubscribe: Subject<any> = new Subject<any>();
  public actors: Actor[] = [];
  public actors1: Actor[] = [];
  public actorsList: any[] = [];
  public done = false;

  constructor(
    private modalService: BsModalService,
    private bsModalRef: BsModalRef,
    private actorService: ActorService,
  ) { }

  async ngOnInit() {
    await this.prepareData();
  }

  prepareData = async () =>{
    this.actors = []
    this.actorsList = []
    this.actors = await this.actorService.getBy();
    this.actors1 = await this.actorService.getBy();
    for (const actor of this.actors) {
      this.actorsList.push(objectify(actor))
    }
    for (const [index, actor] of this.actorsList.entries()) {
      actor.movies = (actor.movies || []).map((e: { name: any; }) => e.name).join('\n');
    }
    this.actors = this.actorsList;
    this.done = true;
  }

  actorDetalis(actor: Actor) {
    const initialState = {
      isAdmin: false,
      data: this.actors1.filter(a=>a.id === actor.id)[0],
      canEdit: false,
    };
    this.bsModalRef = this.modalService.show(ActorDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState });
    this.bsModalRef.content.hideEvent.pipe( takeUntil( this.ngUnsubscribe ) ).subscribe( (_res: any) => {
			this.prepareData();
		} );
  }
}
