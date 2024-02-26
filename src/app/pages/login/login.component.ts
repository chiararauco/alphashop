import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userId: string = "";
  password: string = "";

  autenticato: boolean = true;

  showHeader = true

  constructor(private route: Router) { }

  autenticaAllievo = (userid: string, password: string): boolean => {
    var retVal = (userid === 'allievo' && password === '1234') ? true : false;
    if (retVal) {
      sessionStorage.setItem('Utente', userid)
    }
    return retVal
  }

  autenticaIstruttore = (userid: string, password: string): boolean => {
    var retVal = (userid === 'istruttore' && password === '1234') ? true : false;
    if (retVal) {
      sessionStorage.setItem('Utente', userid)
    }
    return retVal
  }

  gestAuth = () => {
    if (this.autenticaAllievo(this.userId, this.password)) {
      this.route.navigate(['homepage-student']);
      this.autenticato = true;
    } else if (this.autenticaIstruttore(this.userId, this.password)) {
      this.route.navigate(['homepage']);
    }
    else {
      this.autenticato = false;
    }
  }

  // goToHomepage() {
  //   this.route.navigate(['/homepage'])
  // }

}
