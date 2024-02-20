import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item-courses',
  templateUrl: './list-item-courses.component.html',
  styleUrls: ['./list-item-courses.component.css']
})
export class ListItemCoursesComponent {


  url : string = 'detail-course-exercise'
  constructor(private router: Router) { }
  @ViewChild('accordions') accordions!: ElementRef;

  ngAfterViewInit(): void {
    const acc = this.accordions.nativeElement.querySelectorAll('.accordion');
    acc.forEach((accordion: any) => {
      accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
        const panel = accordion.nextElementSibling;
        if (panel.style.display === 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
        }
      });
    });
  }

  // goToExercise(): void {
  //   this.router.navigateByUrl([url]);
  // }
}
