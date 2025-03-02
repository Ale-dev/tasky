import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public setToken(token: string): void {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.setItem('token', token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem('token');
  }
}
