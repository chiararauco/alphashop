import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {



  isDisabled: boolean = false;
  constructor(private router: Router, private basicAuth: AuthappService) { }

  isStudent(): boolean {
    return this.basicAuth.getUserRole() === 'allievo';
  }
  addCourse() {
    this.router.navigate(['/create-course'])
  }

}
