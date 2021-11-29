import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitaComponent } from './pages/cita/cita.component';
import { CitaFormComponent } from './pages/cita-form/cita-form.component';
import { HomeComponent } from './pages/home/home.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { SucursalFormComponent } from './pages/sucursal-form/sucursal-form.component';
import { EspecialidadFormComponent } from './pages/especialidad-form/especialidad-form.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { EspecialistaFormComponent } from './pages/especialista-form/especialista-form.component';
import { EspecialistaComponent } from './pages/especialista/especialista.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    SandboxComponent,
    CitaComponent,
    CitaFormComponent,
    SucursalComponent,
    SucursalFormComponent,
    EspecialidadComponent,
    EspecialidadFormComponent,  
    EspecialistaComponent,
    EspecialistaFormComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
