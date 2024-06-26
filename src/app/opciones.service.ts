// opciones.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpcionesService {

  constructor(private http: HttpClient) { }

  getOpciones(): Observable<any[]> {
    return this.http.get<any[]>('assets/opciones.json');
  }
}
