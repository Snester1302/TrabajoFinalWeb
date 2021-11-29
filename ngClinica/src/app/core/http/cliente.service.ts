import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { Pagination } from 'src/app/shared/models/pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  urlBase: string = `${environment.api}/cliente`;

  findAll() {
    return this.http.get<Cliente[]>(this.urlBase);
  }

  pagination(page: number) {
    return this.http.get<Pagination<Cliente>>(`${this.urlBase}/pagination/${page - 1}`);
  }

  findById(id: number) {
    return this.http.get<Cliente>(`${this.urlBase}/${id}`);
  }

  save(cliente: Cliente) {
    return this.http.post<Cliente>(this.urlBase, cliente);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}