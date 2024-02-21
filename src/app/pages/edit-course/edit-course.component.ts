import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {
  constructor(private router: Router) { }

  goBackToCourseDetail() {
    this.router.navigate(['/detail-course'])
  }
}
