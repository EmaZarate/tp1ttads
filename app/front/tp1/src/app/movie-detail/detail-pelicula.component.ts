import { Component,Input,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {PeliculaService} from '../movie-service/pelicula.service';

@Component({
  selector: 'detail-pelicula',
  templateUrl: './detail-pelicula.component.html',
  styleUrls: ['./detail-pelicula.component.css']
})
export class DetailPelicula implements OnInit{
  pelicula: any;
  id: number;
  movieReviews: any;
  voter:boolean=false;
  session: any;
  rateok: any;
  constructor(private route: ActivatedRoute, private service:PeliculaService) {}

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
          // In a real app: dispatch action to load the details here.
         });
         this.getMovie(this.id);
         this.getMovieReviews(this.id);
         this.service.getGuestSession().subscribe(result => this.session=result);

  }

   getMovie(id) {
     this.service.getMovie(id).subscribe(result => this.pelicula=result);
   }

   getMovieReviews(id){
     this.service.getMovieReviews(id).subscribe(result => this.movieReviews=result);
   }
   Rate(vote){

     this.service.rateMovie(this.session.guest_session_id,vote).subscribe(result => {
       this.rateok=result
       if(this.rateok.status_code == 1){
       this.voter=true;
       alert("Gracias por Votar");
       }
      else{
      alert("Ingrese un valor entre 0.5 y 10!!");
       }
     } );


   }

}
