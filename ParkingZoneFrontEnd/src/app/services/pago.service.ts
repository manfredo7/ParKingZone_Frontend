import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Pago } from '../models/pago';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private url = `${base_url}/pago`;
  private listaCambio = new Subject<Pago[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Pago[]>(this.url);
  }
  insert(b: Pago) {
    return this.http.post(this.url, b);
  }
  setList(listaNueva: Pago[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Pago>(`${this.url}/${id}`);
  }
  update(c:Pago) { 
    return this.http.put(this.url, c);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
