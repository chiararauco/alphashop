import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password: string): boolean => {
    var retVal = (userid === 'Chiara' && password === '1234') ? true : false;
    if (retVal) {
      sessionStorage.setItem('Utente', userid)
    }

    return retVal
  }

  //metodi per determinare se lutente è loggato o meno
  loggedUser = (): string | null => (sessionStorage.getItem("Utente") ? sessionStorage.getItem("Utente") : "")
  islogged = (): boolean => (sessionStorage.getItem("Utente") ? true : false)
  cleanUser = (): void => sessionStorage.removeItem("Utente")

  clearAll = (): void => sessionStorage.clear()


}
