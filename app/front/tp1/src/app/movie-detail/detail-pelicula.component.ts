import { Component,Input,OnInit} from '@angular/core';
import { Pelicula} from '../movie/pelicula';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'detail-pelicula',
  templateUrl: './detail-pelicula.component.html',
  styleUrls: ['./detail-pelicula.component.css']
})
export class DetailPelicula implements OnInit{
  pelicula: Pelicula;
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
     this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }




}
