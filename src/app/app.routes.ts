import { Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { NotFoundComponent } from './not-found.component';
import { DetailComponent } from './detail.component';
import { EditComponent } from './edit.component';

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
    path: 'detail/:id',
    component: DetailComponent,
    title: 'Detail'
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    title: 'Edit'
  }, 
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found'
  },
];
