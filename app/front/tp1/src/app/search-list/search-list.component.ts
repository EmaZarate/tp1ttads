import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'seach-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchList  implements OnInit{
  movie:string

  constructor(private router: ActivatedRoute){}

ngOnInit(){
  this.router.params.subscribe(params => {
       this.movie = params['movie']; // (+) converts string 'id' to a number
          // In a real app: dispatch action to load the details here.
         });

}
}
