import { Component,Input,OnInit} from '@angular/core';
import {PeliculaService} from '../movie-service/pelicula.service';

@Component({
  selector: 'list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMovies implements OnInit{
  @Input() movie:string;
  movies:any;
  playNow:boolean;
  search:boolean;
  constructor(private service:PeliculaService) {}

  ngOnInit() {
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
