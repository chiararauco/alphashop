import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  showHeader = true

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  goToHomepage() {
    this.route.navigate(['/homepage'])
  }

}
