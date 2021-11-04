import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Director, getDefaultDirector } from '../../../../models/director.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { DirectorService } from '../director.service';

@Component({
  selector: 'app-director-details',
  templateUrl: './director-details.component.html',
  styleUrls: ['./director-details.component.scss']
})
export class DirectorDetailsComponent implements OnInit, OnDestroy {
  hideEvent: EventEmitter<any> = new EventEmitter();

  public isAdmin: any;
  public data: any;

  public done = false;
  public director: Director = getDefaultDirector();

  constructor(
    private messageService: MessageService,
    public bsModalRef: BsModalRef,
    private directorService: DirectorService,
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.director = this.data;
    }
    this.done = true;
  }
  ngOnDestroy(): void {
    this.hideEvent.next();
  }
  create = async () => {
    const result = await this.directorService.createDirector(this.director);
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Added successfully...' });
      this.bsModalRef.hide();
    }
  }
  update = async () => {
    const result = await this.directorService.updateDirector(this.director);
    if (result) {
      this.messageService.add({ summary: 'Success', sticky: false, life: 2000, detail: 'Added successfully...' });
      this.bsModalRef.hide();
    }
  }
}
