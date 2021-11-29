import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PublicModule { }
