import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent {

  constructor(private router: Router) { }

  goToDetailClass() {
    this.router.navigate(['/detail-class'])
  }

  goToEditClass() {
    this.router.navigate(['/edit-class'])
  }

}
