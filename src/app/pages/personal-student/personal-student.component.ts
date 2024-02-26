import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-student',
  templateUrl: './personal-student.component.html',
  styleUrls: ['./personal-student.component.css']
})
export class PersonalStudentComponent {
  constructor(private router: Router) { }

  goToStatusClass() {
    this.router.navigate(['/completed-class'])
  }
}
