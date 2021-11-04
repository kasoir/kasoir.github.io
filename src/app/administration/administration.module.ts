import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MovieManagementComponent } from './movie-management/movie-management.component';
import { ActorManagementComponent } from './actor-management/actor-management.component';
import { DirectorManagementComponent } from './director-management/director-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { ReportComponent } from './report/report.component';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { ActorModule } from '../actor/actor.module';
import { NgxMaskModule } from 'ngx-mask';

const routes: Routes = [
	{ path: '', component: AdministrationComponent },
	{ path: 'movies', component: MovieManagementComponent, pathMatch: 'full' },
	{ path: 'actors', component: ActorManagementComponent },
	{ path: 'directors', component: DirectorManagementComponent },
	{ path: 'categories', component: CategoryManagementComponent },
  { path: 'reports', component: ReportComponent },
	{ path: 'users', component: UserComponent },
];

@NgModule({
  declarations: [
    AdministrationComponent,
    UserComponent,
    MovieManagementComponent,
    ActorManagementComponent,
    DirectorManagementComponent,
    CategoryManagementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    InputTextModule,
    SkeletonModule,
    TableModule,
    ToastModule,
    ActorModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    BsModalRef,
    MessageService,
	],
})
export class AdministrationModule { }
