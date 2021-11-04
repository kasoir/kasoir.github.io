import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MovieDownloadComponent } from './movie-download/movie-download.component';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieDownloadComponent,
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
    NgxMaskModule,
  ],
	providers: [
		MessageService,
	],
})
export class MoviesModule { }
