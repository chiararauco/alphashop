import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion-student-list',
  templateUrl: './accordion-student-list.component.html',
  styleUrls: ['./accordion-student-list.component.css']
})
export class AccordionStudentListComponent {
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
}
