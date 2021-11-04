import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorListComponent } from './actor-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
  {
    path: '', component: ActorListComponent, children: [
      { path: '', redirectTo: 'actor' },
    ]
  }
];

@NgModule({
  declarations: [
    ActorListComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    SkeletonModule,
    TableModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes),
    ToastModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    BsModalRef,
    MessageService,
	],
})
export class ActorListModule { }
