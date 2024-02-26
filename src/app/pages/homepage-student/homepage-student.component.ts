import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-student',
  templateUrl: './homepage-student.component.html',
  styleUrls: ['./homepage-student.component.css']
})
export class HomepageStudentComponent {
  constructor(private router: Router) {

  }

  goToPersonal() {
    this.router.navigate(['/personal-student'])
  }

  goToCourses() {
    this.router.navigate(['/courses'])
  }

  goToAvailableClasses(){
    this.router.navigate(['/available-classes-student'])
  }
}
