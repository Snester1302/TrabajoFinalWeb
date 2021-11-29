import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanActivateChild } from '@angular/router';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate, CanActivateChild {

  realRol: string = '';

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    return this.accesTo(childRoute);
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.accesTo(route);
  }

  accesTo(route: ActivatedRouteSnapshot): boolean {
    const accesTo: string = route.data['accesTo'];

    if (this.tokenService.getUsuario() == null) {
      this.router.navigate(['/login']);
      return false;
    } else if (this.tokenService.getUsuario()?.id_tipo_usuario == 1 && accesTo === "ADMIN") {
      return true;
    } else if (this.tokenService.getUsuario()?.id_tipo_usuario == 2 && accesTo === "CLIENT") {
      return true;
    }
    // else if (!this.tokenService.getToken() || (menus.filter(menu => menu.descripcion == accesTo).length <= 0)) {
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return false;
  }
}
