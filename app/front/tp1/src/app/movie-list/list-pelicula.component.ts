import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../movie/pelicula';
import {PeliculaService} from '../movie/pelicula.service';
<<<<<<< HEAD
import { Observable }        from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
=======
>>>>>>> d90c1fcf49fc0c33ed13ef70791c9ccda402506e

@Component({
  selector: 'list-pelicula',
  templateUrl: './list-pelicula.component.html',
  styleUrls: ['./list-pelicula.component.css']
})
export class ListPelicula  implements OnInit{
<<<<<<< HEAD
  peliculas: any[];

  subscription: Subscription;
  constructor(private peliculaService:PeliculaService){

  }
  ngOnInit(): void {
    this.peliculaService.getMovies().subscribe(results => this.peliculas = results);
=======
  peliculas: Pelicula[]=[];
  constructor(private peliculaService:PeliculaService){

    /*his.peliculas[0].title= "Minions";
    this.peliculas[0].id=211672;
    this.peliculas[0].poster_path="https://image.tmdb.org/t/p/w300_and_h450_bestv2/q0R4crx2SehcEEQEkYObktdeFy.jpg";
    this.peliculas[1].title= "Guardians of the Galaxy";
    this.peliculas[1].id=118340;
    this.peliculas[1].poster_path="https://image.tmdb.org/t/p/w300_and_h450_bestv2/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg";
    this.peliculas[2].title= "Interstellar";
    this.peliculas[2].id=157336;
    this.peliculas[2].poster_path="https://image.tmdb.org/t/p/w300_and_h450_bestv2/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg";
    this.peliculas[3].title= "Jurassic World";
    this.peliculas[3].id=135397;
    this.peliculas[3].poster_path="https://image.tmdb.org/t/p/w300_and_h450_bestv2/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg";
    */
  }
  ngOnInit(): void {
    this.peliculaService.getMovies().then(results => this.peliculas = results);
>>>>>>> d90c1fcf49fc0c33ed13ef70791c9ccda402506e
  }
}
