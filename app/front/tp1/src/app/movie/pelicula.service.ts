import{ Injectable} from '@angular/core';
import{Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Pelicula} from './pelicula';

 @Injectable ()
 export class PeliculaService {
  constructor(private http:Http){}

  private moviePopularUrl:string = "https://api.themoviedb.org/3/movie/popular?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US&page=1"


  
 }
