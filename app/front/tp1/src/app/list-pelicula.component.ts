import { Component } from '@angular/core';
import { Pelicula} from './pelicula';

@Component({
  selector: 'list-pelicula',
  templateUrl: './list-pelicula.component.html',
  styleUrls: ['./list-pelicula.component.css']
})
export class ListPelicula {
  peliculas: Pelicula[]=[new Pelicula(),new Pelicula(),new Pelicula(),new Pelicula()];
  constructor(){
    this.peliculas[0].title= "pelicula 1";
    this.peliculas[0].id=1;
    this.peliculas[1].title= "pelicula 2";
    this.peliculas[1].id=2;
    this.peliculas[2].title= "pelicula 3";
    this.peliculas[2].id=2;
    this.peliculas[3].title= "pelicula 4";
    this.peliculas[3].id=2;
  }
}
