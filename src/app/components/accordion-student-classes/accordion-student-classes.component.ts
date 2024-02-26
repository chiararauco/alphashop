import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accordion-student-classes',
  templateUrl: './accordion-student-classes.component.html',
  styleUrls: ['./accordion-student-classes.component.css']
})
export class AccordionStudentClassesComponent {

  constructor(private router: Router) { }

  @ViewChild('accordions') accordions!: ElementRef;

  ngAfterViewInit(): void {
    const acc = this.accordions.nativeElement.querySelectorAll('.accordion');
    acc.forEach((accordion: any) => {
      accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
        const panel = accordion.nextElementSibling;
        if (panel.style.display === 'flex') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'flex';
          panel.style.flexDirection = 'column';
          panel.style.alignItems = 'flex-start';
        }
      });
    });
  }

  goToDetailStudentClass() {
    this.router.navigate(['detail-student-class']);
  }

  goToCompletedClass() {
    this.router.navigate(['completed-class'])
  }
}
