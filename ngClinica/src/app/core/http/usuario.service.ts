import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/Login';
import { Pagination } from 'src/app/shared/models/pagination';
import { Usuario } from 'src/app/shared/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  urlBase: string = `${environment.api}/usuario`;

  findAll() {
    return this.http.get<Usuario[]>(this.urlBase);
  }

  pagination(page: number = 1, searchText: string = "_") {
    return this.http.get<Pagination<Usuario>>(`${this.urlBase}/pagination/${searchText}/${page}`);
  }

  findById(id: number) {
    return this.http.get<Usuario>(`${this.urlBase}/${id}`);
  }

  save(usuario: Usuario) {
    return this.http.post<Usuario>(this.urlBase, usuario);
  }

  login(login: Login) {
    return this.http.post<Usuario>(`${this.urlBase}/login`, login);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}