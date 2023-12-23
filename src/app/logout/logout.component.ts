import { Component } from '@angular/core';
import { AuthappService } from 'src/service/authapp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private basicAuth: AuthappService) {

  }

  ngOnInit(): void {
    this.basicAuth.clearAll()
  }

}
