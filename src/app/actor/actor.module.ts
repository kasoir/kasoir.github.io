import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    ActorDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    SkeletonModule,
    TableModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgbModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    DropdownModule,
    NgxMaskModule.forRoot(),
  ],
	providers: [
		MessageService,
	],
})
export class ActorModule { }
