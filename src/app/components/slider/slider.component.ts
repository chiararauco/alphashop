import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  showButton = false;

  slides = [
    { imageUrl: './../../../assets/images/rectangle-6.png', caption: 'Caption 1' },
    { imageUrl: './../../../assets/images/questionario.png', caption: 'Caption 2' },
    { imageUrl: './../../../assets/images/starting esercitazione.png', caption: 'Caption 3' }
    // Aggiungi altre slide qui se necessario
  ];
  currentIndex = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  isLastSlide(): boolean {
    return this.currentIndex === this.slides.length - 1;
  }

  goToResults() {
    this.router.navigate(['/show-results']); 

  }
}
