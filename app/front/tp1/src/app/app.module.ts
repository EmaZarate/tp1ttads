import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';



import { AppComponent } from './app.component';
import { BarraMenuComponent } from './barra-menu.component';
import { ListPelicula } from './list-pelicula.component';
import { DetailPelicula } from './detail-pelicula.component';
import { AppRoutingModule }     from './app-routing.module';
import { PeliculaService} from './pelicula.service';

@NgModule({

  declarations: [
    AppComponent,
    BarraMenuComponent,
    ListPelicula,
    DetailPelicula,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
