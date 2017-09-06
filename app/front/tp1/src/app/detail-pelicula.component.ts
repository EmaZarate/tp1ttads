import { Component,Input,OnInit} from '@angular/core';
import { Pelicula} from './pelicula';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'detail-pelicula',
  templateUrl: './detail-pelicula.component.html',
  styleUrls: ['./detail-pelicula.component.css']
})
export class DetailPelicula {
  pelicula: Pelicula;

  constructor(){
    
  }


}
