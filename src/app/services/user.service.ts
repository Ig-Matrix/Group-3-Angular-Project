import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/Users';
import { UserDetails } from '../models/UserDetails';
import { USER_BASE_URL } from '../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${USER_BASE_URL}/users`)
      .pipe(catchError(this.handleError));
  }

  getUsersById(id: number): Observable<UserDetails> {
    return this.http
      .get<UserDetails>(`${USER_BASE_URL}/users/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
