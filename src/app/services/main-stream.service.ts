import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class MainStreamService {
  URL_API = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_API + '/users');
  }

  addNewUser(user: User): Observable<User> {
    return this.http.post(this.URL_API + '/users/add', user);
  }

  deleteUser(id: number | undefined): Observable<any> {
    return this.http.delete(this.URL_API + `/users/delete/${id}`);
  }

  editUser(user: User): Observable<User> {
    return this.http.post(this.URL_API + `/users/edit/${user.id}`, user);
  }
}
