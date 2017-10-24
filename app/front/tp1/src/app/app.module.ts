import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';



import { AppComponent } from './app.component';
import { BarraMenuComponent } from './menu-bar/barra-menu.component';
import { DetailPelicula } from './movie-detail/detail-pelicula.component';
import { AppRoutingModule }     from './app-routing.module';
import { PeliculaService} from './movie-service/pelicula.service';
import {ListMovies} from './list-movies/list-movies.component'

@NgModule({

  declarations: [
    AppComponent,
    BarraMenuComponent,
    DetailPelicula,
    ListMovies
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
