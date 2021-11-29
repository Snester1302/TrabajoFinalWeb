import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from 'src/app/shared/models/cita';
import { CitaLoad } from 'src/app/shared/models/cita-load';
import { Pagination } from 'src/app/shared/models/pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitaService {


  constructor(private http: HttpClient) { }

  urlBase: string = `${environment.api}/cita`;


  load() {
    return this.http.get<CitaLoad>(`${this.urlBase}/load`);
  }


  findAll() {
    return this.http.get<Cita[]>(this.urlBase);
  }

  pagination(id_usuario: number, page: number = 1, searchText: string = "_") {
    return this.http.get<Pagination<Cita>>(`${this.urlBase}/pagination/${id_usuario}/${searchText}/${page}`);
  }

  findById(id: number) {
    return this.http.get<Cita>(`${this.urlBase}/${id}`);
  }

  save(Cita: Cita) {
    return this.http.post<Cita>(this.urlBase, Cita);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}
