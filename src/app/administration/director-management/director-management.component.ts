import { Component, OnInit } from '@angular/core';
import { Director } from '../../../../models/director.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DirectorDetailsComponent } from 'src/app/director/director-details/director-details.component';
import { DirectorService } from 'src/app/director/director.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-director-management',
  templateUrl: './director-management.component.html',
  styleUrls: ['./director-management.component.scss']
})
export class DirectorManagementComponent implements OnInit {

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
      isAdmin: true,
      data: director,
    };
    this.bsModalRef = this.modalService.show(DirectorDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState });
    this.bsModalRef.content.hideEvent.pipe( takeUntil( this.ngUnsubscribe ) ).subscribe( (_res: any) => {
			this.prepareData();
		} );
  }

  addDirector = async () => {
    const initialState = {
      isAdmin: true,
    };
    this.bsModalRef = this.modalService.show(DirectorDetailsComponent, { class: 'modal-xl', backdrop: 'static', keyboard: true, initialState });
    this.bsModalRef.content.hideEvent.pipe( takeUntil( this.ngUnsubscribe ) ).subscribe( (_res: any) => {
			this.prepareData();
		} );
  }
}
