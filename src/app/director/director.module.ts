import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    DirectorDetailsComponent
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
  ],
	providers: [
		MessageService,
	],
})
export class DirectorModule { }
