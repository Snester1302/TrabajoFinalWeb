import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidad } from 'src/app/shared/models/especialidad';
import { Pagination } from 'src/app/shared/models/pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {


  constructor(private http: HttpClient) { }

  urlBase: string = `${environment.api}/Especialidad`;

  findAll() {
    return this.http.get<Especialidad[]>(this.urlBase);
  }

  
  pagination(page: number = 1, searchText: string = "_") {
    return this.http.get<Pagination<Especialidad>>(`${this.urlBase}/pagination/${searchText}/${page}`);
  }

  findById(id: number) {
    return this.http.get<Especialidad>(`${this.urlBase}/${id}`);
  }

  save(Especialidad: Especialidad) {
    return this.http.post<Especialidad>(this.urlBase, Especialidad);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}