import { Component,Input,OnInit} from '@angular/core';
import {PeliculaService} from '../movie-service/pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMovies implements OnInit{
  movie:string;
  movies:any;
  playNow:boolean;
  search:boolean;
  constructor(private service:PeliculaService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
         this.movie = params['movie'] || ""; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
           });
     if(this.movie===""){
       this.search=true;
       this.service.getMovies().subscribe(result=>this.movies=result);
     }
     else{
       this.playNow=true;
       this.service.getMoviesSearch(this.movie).subscribe(result=>this.movies=result);
     }
  }


}
