import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  private loggedIn: boolean = false;
  private userRole: string = ''; // Salva il ruolo dell'utente

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'allievo' && password === '1234') {
      this.loggedIn = true;
      this.userRole = 'allievo';
      return true;
    } else if (username === 'istruttore' && password === '1234') {
      this.loggedIn = true;
      this.userRole = 'istruttore';
      return true;
    }
    else {
      this.loggedIn = false;
      return false;
    }
  }

  // Permette di verificare lo stato di accesso
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Permette di definire il ruolo dell'utente
  getUserRole(): string {
    return this.userRole;
  }

  // Simula il processo di logout
  logout(): void {
    this.loggedIn = false;
    this.userRole = '';
  }

  clearAll = (): void => sessionStorage.clear();

  cleanUser = (): void => sessionStorage.removeItem("Utente");



}
