import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialista } from 'src/app/shared/models/especialista';
import { EspecialistaLoad } from 'src/app/shared/models/especialista-load';
import { Filter } from 'src/app/shared/models/filter';
import { Pagination } from 'src/app/shared/models/pagination';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaService {

  constructor(private http: HttpClient) { }

  urlBase: string = `${environment.api}/especialista`;

  findAll() {
    return this.http.get<Especialista[]>(this.urlBase);
  }

  pagination(page: number = 1, searchText: string = "_") {
    return this.http.get<Pagination<Especialista>>(`${this.urlBase}/pagination/${searchText}/${page}`);
  }

  filter(filter: Filter) {
    return this.http.post<Pagination<Especialista>>(`${this.urlBase}/filter`, filter);
  }

  findById(id: number) {
    return this.http.get<Especialista>(`${this.urlBase}/${id}`);
  }

  load(id: number) {
    return this.http.get<EspecialistaLoad>(`${this.urlBase}/load/${id}`);
  }


  save(especialista: Especialista) {
    return this.http.post<Especialista>(this.urlBase, especialista);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}