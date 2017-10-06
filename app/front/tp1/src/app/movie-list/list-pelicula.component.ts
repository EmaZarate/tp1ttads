import { Component, OnInit, Input } from '@angular/core';
import { Observable }        from 'rxjs/Observable';


@Component({
  selector: 'list-pelicula',
  templateUrl: './list-pelicula.component.html',
  styleUrls: ['./list-pelicula.component.css']
})
export class ListPelicula  implements OnInit{

  paramMovie:string="";

  constructor(){

  }
  ngOnInit(): void {

  }
}
