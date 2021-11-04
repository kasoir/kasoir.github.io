import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { RouterModule, Routes } from '@angular/router';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
  {
    path: '', component: MoviesListComponent, children: [
			{ path: '', redirectTo: 'movies' },
		]
  }
];

@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    SkeletonModule,
    TableModule,
    ModalModule.forRoot(),
    RouterModule.forChild( routes ),
    ToastModule,
  ],	
  providers: [
    BsModalRef,
    MessageService,
	],
})
export class MoviesListModule { }
