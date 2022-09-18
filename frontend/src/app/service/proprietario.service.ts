import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Proprietario } from '../models/proprietario';

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {
  private url = `${environment.baseUrl}/proprietario`;
  //função para exemplificar que sera usado um json
  private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getTodosProprietarios (): Observable<Proprietario[]> {
    return this.http.get<Proprietario[]>(this.url)
  }

  getProprietario (id: number) {
    const url = `${this.url}/${id}`
    return this.http.get<Proprietario[]>(url)
  }

  createProprieatrio(proprietario: Proprietario) { 
    return this.http.post<Proprietario>(this.url, proprietario, {headers: this.jsonHeaders} )
  }

  editProprietario(id: number, proprietario: Proprietario) {
    const url = `${this.url}/${id}`;
    return this.http.put<Proprietario>(url, proprietario, {headers: this.jsonHeaders} )
  }


  deleteProprietario(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.delete<Proprietario>(url, {headers: this.jsonHeaders} )
  }

}
