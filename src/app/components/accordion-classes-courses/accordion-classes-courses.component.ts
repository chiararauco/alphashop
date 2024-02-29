import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion-classes-courses',
  templateUrl: './accordion-classes-courses.component.html',
  styleUrls: ['./accordion-classes-courses.component.css']
})
export class AccordionClassesCoursesComponent {
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
          panel.style.display = 'flex';
          panel.style.flexDirection = 'column';
          panel.style.alignItems = 'flex-start';
        }
      });
    });
  }

  goToCourses() {
    this.router.navigate(['/detail-course'])
  }
  goToClasses() {
    this.router.navigate(['/detail-class'])
  }
}
