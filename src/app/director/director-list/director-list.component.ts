import { Component, OnInit } from '@angular/core';
import { Director } from 'models/director.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DirectorDetailsComponent } from '../director-details/director-details.component';
import { DirectorService } from '../director.service';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrls: ['./director-list.component.scss']
})
export class DirectorListComponent implements OnInit {


	ngUnsubscribe: Subject<any> = new Subject<any>();

  public directors: Director[] = [];
  constructor(
    private modalService: BsModalService,
    private directorService: DirectorService,
    private bsModalRef: BsModalRef,
  ) { }

  async ngOnInit() {
    await this.prepareData();
  }

  prepareData = async () => {
    this.directors = await this.directorService.getBy();
  }

  directorDetalis = async (director: Director) => {
    const initialState = {
      isAdmin: false,
      data: director,
    };
    this.bsModalRef = this.modalService.show(DirectorDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState });
    this.bsModalRef.content.hideEvent.pipe( takeUntil( this.ngUnsubscribe ) ).subscribe( (_res: any) => {
			this.prepareData();
		} );
  }

}
