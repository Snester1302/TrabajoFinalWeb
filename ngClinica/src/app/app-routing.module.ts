import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/public/public-routing.module').then(m => m.PublicRoutingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin-routing.module').then(m => m.AdminRoutingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full', 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
