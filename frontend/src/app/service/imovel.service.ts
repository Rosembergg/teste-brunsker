import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Imovel } from '../models/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  private url = `${environment.baseUrl}/imovel`;
  private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getTodosImoveis (): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(this.url)
  }

  getCep (cep:number): Observable<any> {
    const teste =`https://viacep.com.br/ws/${cep}/json/`
    return this.http.get<any>(teste)
  }

  getImovel (id: number) {
    const url = `${this.url}/${id}`
    return this.http.get<Imovel[]>(url)
  }

  createProprieatrio(imovel: Imovel) { 
    return this.http.post<Imovel>(this.url, imovel, {headers: this.jsonHeaders} )
  }

  editProprietario(id: number, imovel: Imovel) {
    const url = `${this.url}/${id}`;
    return this.http.put<Imovel>(url, imovel, {headers: this.jsonHeaders} )
  }


  deleteProprietario(id: number) {
    const url = `${this.url}/${id}`;
    return this.http.delete<Imovel>(url, {headers: this.jsonHeaders} )
  }

}
