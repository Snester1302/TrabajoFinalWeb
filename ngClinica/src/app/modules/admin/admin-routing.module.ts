import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { CitaComponent, CitaResolve } from './pages/cita/cita.component';
import { CitaFormComponent, CitaFormResolve } from './pages/cita-form/cita-form.component';
import { HomeComponent } from './pages/home/home.component';
import { SucursalComponent, SucursalResolve } from './pages/sucursal/sucursal.component';
import { SucursalFormComponent, SucursalFormResolve } from './pages/sucursal-form/sucursal-form.component';
import { EspecialidadComponent, EspecialidadResolve } from './pages/especialidad/especialidad.component';
import { EspecialidadFormComponent, EspecialidadFormResolve } from './pages/especialidad-form/especialidad-form.component';
import { EspecialistaComponent, EspecialistaResolve } from './pages/especialista/especialista.component';
import { EspecialistaFormComponent, EspecialistaFormResolve } from './pages/especialista-form/especialista-form.component';
import { GuardService } from 'src/app/core/guards/guard.service';

const routes: Routes = [
  {

    path: '',
    component: AdminComponent,
    canActivateChild: [GuardService],
    children: [
      {
        path: '', component: HomeComponent,
        resolve: { pagination: CitaResolve },
        data: { accesTo: "CLIENT" }
      },
      {
        path: 'sucursal', component: SucursalComponent,
        resolve: { pagination: SucursalResolve },
        data: { accesTo: "ADMIN" }
      },
      {
        path: 'sucursal/form', 
        component: SucursalFormComponent,
        data: { accesTo: "ADMIN" }
      },
      {
        path: 'sucursal/form/:id', component: SucursalFormComponent,
        resolve: { sucursal: SucursalFormResolve },
        data: { accesTo: "ADMIN" }
      },

      {
        path: 'especialidad', component: EspecialidadComponent,
        resolve: { pagination: EspecialidadResolve },
        data: { accesTo: "ADMIN" }
      },
      {
        path: 'especialidad/form', 
        component: EspecialidadFormComponent,
        data: { accesTo: "ADMIN" }
      },
      {
        path: 'especialidad/form/:id', component: EspecialidadFormComponent,
        resolve: { especialidad: EspecialidadFormResolve },
        data: { accesTo: "ADMIN" }
      },

      {
        path: 'especialista', component: EspecialistaComponent,
        resolve: { pagination: EspecialistaResolve },
        data: { accesTo: "ADMIN" }
      },
      {
        path: 'especialista/form', 
        component: EspecialistaFormComponent,
        resolve: { load: EspecialistaFormResolve },
        data: { accesTo: "ADMIN" }
      },
      {
        path: 'especialista/form/:id', component: EspecialistaFormComponent,
        resolve: { load: EspecialistaFormResolve },
        data: { accesTo: "ADMIN" }
      },

      {
        path: 'cita', component: CitaComponent,
        resolve: { pagination: CitaResolve },
        data: { accesTo: "CLIENT" }
      },
      {
        path: 'cita/form', 
        component: CitaFormComponent,
        resolve: { load: CitaFormResolve },
        data: { accesTo: "CLIENT" }
      },

      {
        path: 'sandbox', component: SandboxComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SucursalResolve,
    SucursalFormResolve,
    EspecialidadResolve,
    EspecialidadFormResolve,
    EspecialistaResolve,
    EspecialistaFormResolve,
    CitaResolve,
    CitaFormResolve,
  ]
})
export class AdminRoutingModule { }
