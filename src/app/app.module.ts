import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProyectoresComponent } from './components/proyectores/proyectores.component';
import { AddProyectorComponent } from './components/add-proyector/add-proyector.component';
import { AddAsignacionComponent } from './components/add-asignacion/add-asignacion.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoFiscaliaComponent } from './components/logo-fiscalia/logo-fiscalia.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectoresComponent,
    AddProyectorComponent,
    AddAsignacionComponent,
    NavbarComponent,
    LogoFiscaliaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
