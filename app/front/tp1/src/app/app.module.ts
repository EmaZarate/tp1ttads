import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraMenuComponent } from './barra-menu.component';
import { ListPelicula } from './list-pelicula.component';
import { DetailPelicula } from './detail-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    ListPelicula,
    DetailPelicula
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
