import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { AlertifyService } from './services/alertify.service';
import { NgxEditorModule } from 'ngx-editor';
import { PhotoComponent } from './photo/photo.component';
import { FileUploadModule } from 'ng2-file-upload';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { CityDetail2Component } from './city/city-detail2/city-detail2.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [				
    AppComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent,
    PhotoComponent,
    RegisterComponent,
    AboutComponent,
    CityDetail2Component,
    MapComponent
   ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    NgxEditorModule,
    FileUploadModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
