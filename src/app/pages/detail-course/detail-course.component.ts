import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent {

  constructor(private router: Router) {

  }

  goToEditCourse() {
    this.router.navigate(['/edit-course'])
  }

}
