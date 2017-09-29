import{ Injectable} from '@angular/core';
<<<<<<< HEAD
import{Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';
=======
import{Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
>>>>>>> d90c1fcf49fc0c33ed13ef70791c9ccda402506e

import {Pelicula} from './pelicula';

 @Injectable ()
 export class PeliculaService {
  constructor(private http:Http){}

<<<<<<< HEAD
  private movieNowPlayingUrl:string = "https://api.themoviedb.org/3/movie/now_playing?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US&page=1";
  private oneMovie:string="https://api.themoviedb.org/3/movie/";
 getMovies(): Observable <any>{
  return this.http.get(this.movieNowPlayingUrl).map((res:Response) => res.json());
  }

  getMovie(id): Observable <any>{
    let Onemovie: string=this.oneMovie+id+"?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US";
    return this.http.get(Onemovie).map((res:Response) => res.json());
=======
  private movieNowPlayingUrl:string = "https://api.themoviedb.org/3/movie/now_playing?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US&page=1"

 getMovies(): Promise <Pelicula[]>{
  return this.http.get(this.movieNowPlayingUrl).toPromise().then(response => response.json().results as Pelicula[]);
>>>>>>> d90c1fcf49fc0c33ed13ef70791c9ccda402506e
  }
 }
