import { provideRouter, Routes } from '@angular/router';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { ApplicationConfig } from '@angular/core';
import { TesteCssComponent } from './pages/teste-css/teste-css.component';

export const routes: Routes = [
  {
    path: 'ofertas',
    component: CarListComponent,
  },
  { path: 'ofertas/car/:id', component: CarDetailComponent },
  { path: 'teste', component: TesteCssComponent },
  { path: '', redirectTo: 'ofertas', pathMatch: 'full' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
