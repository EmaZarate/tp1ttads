import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {PeliculaService} from '../movie-service/pelicula.service';


@Component({
  selector: 'barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit{
  private movies:Observable<any>;
  private searchTerms = new Subject<string>();

constructor(private service:PeliculaService,private router:Router){}

search(term:string):void{
  this.searchTerms.next(term);
}

ngOnInit():void{
  this.movies = this.searchTerms .distinctUntilChanged()   // ignore if next search term is same as previous
 .switchMap(term => term   // switch to new observable each time the term changes
      // return the http search observable
      ? this.service.getMoviesSearch(term)
      // or the observable of empty heroes if there was no search term
      : Observable.of<any[]>([]))
    .catch(error => {
      // TODO: add real error handling
      console.log(error);
      return Observable.of<any[]>([]);
    });
}
gotoDetail(id): void {
   let link = ['/detail', id];
   this.router.navigate(link);
 }

 goSearchList(movie){
   this.router.navigate(['/list-movies', movie]);
 }



}
