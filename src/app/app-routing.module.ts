import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoresComponent } from './components/proyectores/proyectores.component';
import { AddAsignacionComponent } from './components/add-asignacion/add-asignacion.component';
import { AddProyectorComponent } from './components/add-proyector/add-proyector.component';

const routes: Routes = [
  { path: '', component: ProyectoresComponent },

  { path: 'addAsignacion', component: AddAsignacionComponent },

  { path: 'addProyector', component: AddProyectorComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
