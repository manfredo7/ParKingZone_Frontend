import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Estacionamiento } from '../models/estacionamiento';
import { Subject } from 'rxjs';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {
  private url = `${base_url}/estacionamientos`;
  private listaCambio = new Subject<Estacionamiento[]>();
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Estacionamiento[]>(this.url);
  }
  insert(e: Estacionamiento) {
    return this.http.post(this.url, e);
  }
  setList(listaNueva: Estacionamiento[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable()
  }

  listId(id:number){
    return this.http.get<Estacionamiento>(`${this.url}/${id}`)
  }
  update(e: Estacionamiento) {
    return this.http.put(this.url, e);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
