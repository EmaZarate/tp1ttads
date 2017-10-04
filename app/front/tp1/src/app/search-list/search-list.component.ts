import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../movie-service/pelicula.service';
import { Observable }        from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'seach-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchList  implements OnInit{
  peliculas:any;
  movie:string

  constructor(private peliculaService:PeliculaService,private router: ActivatedRoute){}

ngOnInit(){
  this.router.params.subscribe(params => {
       this.movie = params['movie']; // (+) converts string 'id' to a number
          // In a real app: dispatch action to load the details here.
         });
  this.peliculaService.getMoviesSearch(this.movie).subscribe(result => this.peliculas=result);
}
}
