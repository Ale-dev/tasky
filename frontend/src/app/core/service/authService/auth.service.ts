import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  email: string;
  password: string;
}

interface authResponse {
  token: string;
  expiresIn: number;
}
const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signUp(user: User): Observable<authResponse> {
    return this.http.post<authResponse>(BASE_URL + 'sign-in', user);
  }
}
