import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/Users';
import { UserDetails } from '../models/UserDetails';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${USER_BASE_URL}/users`);
  }

  getUsersById(id: number): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${USER_BASE_URL}/users/${id}`);
  }
}
