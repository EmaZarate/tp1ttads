import { Component, OnInit } from '@angular/core';
import {PeliculaService} from '../movie-service/pelicula.service';
import { Observable }        from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'list-pelicula',
  templateUrl: './list-pelicula.component.html',
  styleUrls: ['./list-pelicula.component.css']
})
export class ListPelicula  implements OnInit{

  peliculas: any;

  subscription: Subscription;
  constructor(private peliculaService:PeliculaService){

  }
  ngOnInit(): void {
    this.peliculaService.getMovies().subscribe(results => this.peliculas = results);
    
  }
}
