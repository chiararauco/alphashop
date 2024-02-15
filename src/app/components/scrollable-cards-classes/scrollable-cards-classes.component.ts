import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrollable-cards-classes',
  templateUrl: './scrollable-cards-classes.component.html',
  styleUrls: ['./scrollable-cards-classes.component.css']
})
export class ScrollableCardsClassesComponent {
  @ViewChild('cardContainer') cardContainer!: ElementRef;

  scrollCards(direction: number): void {
    const container: HTMLElement = this.cardContainer.nativeElement;
    const scrollAmount: number = 200; // Imposta la quantità di scroll
    container.scrollLeft += direction * scrollAmount;
  }
}
