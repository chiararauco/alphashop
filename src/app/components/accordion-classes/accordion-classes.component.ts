import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-accordion-classes',
  templateUrl: './accordion-classes.component.html',
  styleUrls: ['./accordion-classes.component.css']
})
export class AccordionClassesComponent implements AfterViewInit {

  constructor(private router: Router){}
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

  editClass(){
    this.router.navigate(['/edit-class'])
  }

  showClass(){
    this.router.navigate(['/detail-class'])
  }
}
