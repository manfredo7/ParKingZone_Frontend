import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = `${base_url}/usuarios`;
  private listaCambio = new Subject<Users[]>();
  
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Users[]>(this.url);
  }
  insert(c: Users) {
    return this.http.post(this.url, c);
  }
  setList(listaNueva: Users[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Users>(`${this.url}/${id}`);
  }
  update(c:Users) { 
    return this.http.put(this.url, c);
  }
  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
