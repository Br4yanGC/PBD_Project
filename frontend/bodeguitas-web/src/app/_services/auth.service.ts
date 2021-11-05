import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  login(loginData: any) {
    return this.http.post<any>('http://localhost:9000/login', loginData).pipe(map(response => {
      this.setCurrentUser(response);
      return response;
    }))
  }
  addUser(user: any) {
    return this.http.post<any>('http://localhost:3000/users', user);
  }

  setCurrentUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  getCurrentUser() {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    else{
      localStorage.removeItem('user');
    }
    return user;
  }
  
  isLoggedIn() {
    return Boolean(this.getCurrentUser());
  }
  logout() {
    //this.setCurrentUser(null);
    localStorage.removeItem('user');
  }
}
