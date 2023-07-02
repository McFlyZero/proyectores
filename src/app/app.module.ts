import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProyectoresComponent } from './components/proyectores/proyectores.component';
import { AddProyectorComponent } from './components/add-proyector/add-proyector.component';
import { AddAsignacionComponent } from './components/add-asignacion/add-asignacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoresComponent,
    AddProyectorComponent,
    AddAsignacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
