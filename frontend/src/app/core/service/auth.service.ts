import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@page/login/login.model';
import { BASE_URL } from '@shared/util/const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login<T>(subUrl: string, data: User): Observable<T> {
    return this.http.post<T>(BASE_URL + subUrl, data);
  }
}
