import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailPelicula }   from './movie-detail/detail-pelicula.component';
import {ListMovies}         from'./list-movies/list-movies.component';


const routes: Routes = [
  { path: '', redirectTo: 'list-movies', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailPelicula },
  { path: 'list-movies/:movie', component : ListMovies},
  { path: 'list-movies', component : ListMovies},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
