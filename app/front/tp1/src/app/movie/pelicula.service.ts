import{ Injectable} from '@angular/core';
import{Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

import {Pelicula} from './pelicula';

 @Injectable ()
 export class PeliculaService {
  constructor(private http:Http){}

  private movieNowPlayingUrl:string = "https://api.themoviedb.org/3/movie/now_playing?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US&page=1"

 getMovies(): Observable <any>{
  return this.http.get(this.movieNowPlayingUrl).map(response => response.json());
  }
 }
