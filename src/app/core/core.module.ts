import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BsModalRef } from 'ngx-bootstrap/modal';

const routes: Routes = [
	{
		path: '', component: WelcomePageComponent,
  }
];


@NgModule({
  declarations: [
    NavBarComponent,
    HomePageComponent,
    WelcomePageComponent
  ],
  imports: [
		FormsModule,
		NgxMaskModule.forRoot(),
		BsDropdownModule.forRoot(),
		CollapseModule,
		TabsModule.forRoot(),
		MenubarModule,
		MenuModule,
    SharedModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
		RouterModule.forChild( routes ),
  ],  
  providers: [
    BsModalRef,
	],
  exports: [
    HomePageComponent
  ]
})
export class CoreModule { }
