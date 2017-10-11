import{ Injectable} from '@angular/core';

import{Headers, Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }     from 'rxjs/Observable';

 @Injectable ()
 export class PeliculaService {
  constructor(private http:Http){}

  private GuestSession:string = "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=f2d25e38d020b6e75e8fede7638fd12e";
  private movieNowPlayingUrl:string = "https://api.themoviedb.org/3/movie/now_playing?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US&page=1";
  private oneMovie:string="https://api.themoviedb.org/3/movie/";
  private reviews:string="https://api.themoviedb.org/3/movie/"
  private search:string="https://api.themoviedb.org/3/search/movie?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US&query=";
  private rate:string ="https://api.themoviedb.org/3/movie/280/rating?api_key=f2d25e38d020b6e75e8fede7638fd12e&guest_session_id="
 getMovies(): Observable <any>{
  return this.http.get(this.movieNowPlayingUrl).map((res:Response) => res.json());
  }

  getMovie(id): Observable <any>{
    let Onemovie: string=this.oneMovie+id+"?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US&page=1";
    return this.http.get(Onemovie).map((res:Response) => res.json());
  }

  getMovieReviews(id): Observable <any>{
    let review: string=this.oneMovie+id+"/reviews?api_key=f2d25e38d020b6e75e8fede7638fd12e&language=en-US&page=1";
    return this.http.get(review).map((res:Response) => res.json());
  }

  getMoviesSearch(name:string): Observable<any>{
    let search:string=this.search+name+"&page=1&include_adult=false";
    return this.http.get(search).map((res:Response)=>res.json());
  }

  getGuestSession(): Observable<any>{
    return this.http.get(this.GuestSession).map((res:Response) => res.json());
  }

  rateMovie(sessionId,value){
    let body = {
  "value": value
};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.rate+sessionId,body, options)
               .map((res:Response)=>res.json());

  }

 }
