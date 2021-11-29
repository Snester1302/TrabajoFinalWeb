import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario';



// const TOKEN_KEY='CLINICA_USER';
const USUARIO_KEY='CLINICA_USER';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  // public canAcces(menu: string): Boolean {
  //   if (this.getUsuario() == null)
  //     return false;
  //   return this.getUsuario()!.perfil.menus.filter((item:any) => item.descripcion == menu).length > 0;
  // }

  public setUsuario(usuario: Usuario): void {
    localStorage.removeItem(USUARIO_KEY);
    localStorage.setItem(USUARIO_KEY, JSON.stringify(usuario));
  }

  public getUsuario(): Usuario | null {
    return JSON.parse(localStorage.getItem(USUARIO_KEY)!);
  }

  public logOut(): void {
    localStorage.clear();
    window.location.reload();
  }
}
