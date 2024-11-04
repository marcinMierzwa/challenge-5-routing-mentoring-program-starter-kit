import { Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { NotFound } from './not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListComponent,
    title: 'Home',
  },
  {
    path: '**',
    component: NotFound
  },
];
