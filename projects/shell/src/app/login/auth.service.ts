import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  checkUser(email: string, password: string) {
    if(email==='admin123@gmail.com' && password ==='admin123'){
      localStorage.setItem('email', email);
      return true;
    } else {
      return false;
    }
  }
}
