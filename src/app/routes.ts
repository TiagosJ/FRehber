import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityDetail2Component } from './city/city-detail2/city-detail2.component';
import { CityComponent } from './city/city.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
  { path: 'city', component: CityComponent },
  { path: 'cityadd', component: CityAddComponent },
  { path: 'cityDetail/:cityId', component: CityDetailComponent },
  { path: 'cityDetail2/:cityId', component: CityDetail2Component },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path:  'map', component: MapComponent},
  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];
