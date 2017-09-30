import { Component,Input,OnInit} from '@angular/core';
import { Pelicula} from '../movie/pelicula';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {PeliculaService} from '../movie/pelicula.service';

@Component({
  selector: 'detail-pelicula',
  templateUrl: './detail-pelicula.component.html',
  styleUrls: ['./detail-pelicula.component.css']
})
export class DetailPelicula implements OnInit{
  pelicula: any;
  id: number;
  movieReviews: any;
  constructor(private route: ActivatedRoute, private service:PeliculaService) {}

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
          // In a real app: dispatch action to load the details here.
         });
         this.getMovie(this.id);
         this.getMovieReviews(this.id);
  }

   getMovie(id) {
     this.service.getMovie(id).subscribe(result => this.pelicula=result);
   }

   getMovieReviews(id){
     this.service.getMovieReviews(id).subscribe(result => this.movieReviews=result);
   }

}
