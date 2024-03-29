import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {
    email: string;
    password: string;
    password2: string;
  }): Observable<string | boolean> {
    const reL = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g;
    const reP = /[0-9a-zA-Z]{6,}/g;
    if (
      reL.test(userInfo.email) &&
      reP.test(userInfo.password) &&
      userInfo.password === userInfo.password2
    ) {
      this.setToken('alksflkgsklgjslkjffksdgjnsadgskmg');
      return of(true);
    }
    return throwError(() => new Error('Failed Login'));
  }

  logout() {
    this.router.navigate(['login']);
  }
}
