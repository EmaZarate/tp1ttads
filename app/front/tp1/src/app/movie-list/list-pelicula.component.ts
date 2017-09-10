import { Component } from '@angular/core';
import { Pelicula} from '../movie/pelicula';

@Component({
  selector: 'list-pelicula',
  templateUrl: './list-pelicula.component.html',
  styleUrls: ['./list-pelicula.component.css']
})
export class ListPelicula {
  peliculas: Pelicula[]=[new Pelicula(),new Pelicula(),new Pelicula(),new Pelicula()];
  constructor(){
    this.peliculas[0].title= "Minions";
    this.peliculas[0].id=211672;
    this.peliculas[0].img="https://image.tmdb.org/t/p/w300_and_h450_bestv2/q0R4crx2SehcEEQEkYObktdeFy.jpg";
    this.peliculas[1].title= "Guardians of the Galaxy";
    this.peliculas[1].id=118340;
    this.peliculas[1].img="https://image.tmdb.org/t/p/w300_and_h450_bestv2/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg";
    this.peliculas[2].title= "Interstellar";
    this.peliculas[2].id=157336;
    this.peliculas[2].img="https://image.tmdb.org/t/p/w300_and_h450_bestv2/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg";
    this.peliculas[3].title= "Jurassic World";
    this.peliculas[3].id=135397;
    this.peliculas[3].img="https://image.tmdb.org/t/p/w300_and_h450_bestv2/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg";
  }
}
