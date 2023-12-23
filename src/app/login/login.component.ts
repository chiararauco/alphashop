import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/service/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password: string = "";

  autenticato: boolean = true;
  errMsg: string = "Spiacente, la userid e/o la password sono errate"
  okMsg: string = "Accesso Consentito";

  titolo: string = "Accesso & Autenticazione";
  sottotitolo: string = "Procedi ad inserire la userid e la password"

  //code Injection attraverso la creazione della variabile privata, abbiamo 
  //la possibilità di accedere alle proprietà del router
  constructor(private route: Router, private basicAuth: AuthappService) { }

  ngOnInit(): void {

  }

  gestAuth = () => {
    console.log(this.userId)

    if (this.basicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}
