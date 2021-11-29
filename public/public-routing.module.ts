import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/pages/home/home.component';
import { PublicComponent } from './public.component';

const routes:Routes=[
{
  path:'',
  component:PublicComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PublicRoutingModule { }
