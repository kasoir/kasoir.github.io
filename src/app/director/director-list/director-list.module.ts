import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorListComponent } from './director-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
  {
    path: '', component: DirectorListComponent, children: [
			{ path: '', redirectTo: 'director' },
		]
  }
];

@NgModule({
  declarations: [
    DirectorListComponent,
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
export class DirectorListModule { }
