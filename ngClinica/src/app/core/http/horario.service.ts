import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  constructor(private http: HttpClient) { }

  urlBase: string = `${environment.api}/horario`;

  deleteById(id: number) {
    return this.http.delete(`${this.urlBase}/${id}`);
  }
}