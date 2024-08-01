import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  signIn(email: string, password: string) {
    // Mock sign-in logic
    if (email && password) {
      const userToken = uuidv4();
      localStorage.setItem('userToken', userToken);
      return true;
    }
    return false;
  }

  signUp(name: string, email: string, password: string): boolean {
    // Mock sign-up logic
    if (name && email && password) {
      const userToken = uuidv4();
      localStorage.setItem('userToken', userToken);
      return true;
    }
    return false;
  }

  signOut(): void {
    localStorage.removeItem('userToken');
    this.router.navigate(['/sign-in']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('userToken') !== null;
  }
}
