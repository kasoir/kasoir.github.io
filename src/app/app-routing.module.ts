import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'welcome-page', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'moviesPage', loadChildren: () => import('./movies/movies-list/movies-list.module').then(m => m.MoviesListModule) },
  { path: 'actorsPage', loadChildren: () => import('./actor/actor-list/actor-list.module').then(m => m.ActorListModule) },
  { path: 'directorsPage', loadChildren: () => import('./director/director-list/director-list.module').then(m => m.DirectorListModule) },
  { path: 'signIn', loadChildren: () => import('./sign/sign.module').then(m => m.SignModule) },
  { path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) },
	{ path: '', redirectTo: 'welcome-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
