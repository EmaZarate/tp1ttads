import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPelicula }   from './detail-pelicula.component';
import { ListPelicula }      from './list-pelicula.component';


const routes: Routes = [
   { path: '', redirectTo: 'list-peliculas', pathMatch: 'full' },
  { path: 'detail', component: DetailPelicula },
  { path: 'list-peliculas', component: ListPelicula }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
