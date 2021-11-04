import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MoviesModule } from './movies/movies.module';
import { SignModule } from './sign/sign.module';
import { AdministrationModule } from './administration/administration.module';
import { DirectorModule } from './director/director.module';
import { ReportComponent } from './administration/report/report.component';
import { MovieUploadComponent } from './administration/movie-upload/movie-upload.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CategoryModule } from './category/category.module';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    MovieUploadComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HammerModule,
    LayoutModule,
    CoreModule,
    NgxMaskModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({ timeOut: 3000, positionClass: 'toast-bottom-right', preventDuplicates: true, newestOnTop: false, progressBar: true }),
    ToastModule,
    DialogModule,
    ButtonModule,
    MoviesModule,
    SignModule,
    AdministrationModule,
    DirectorModule,
    TableModule,
    DropdownModule,
    CategoryModule,
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
