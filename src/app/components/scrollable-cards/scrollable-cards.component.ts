import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrollable-cards',
  templateUrl: './scrollable-cards.component.html',
  styleUrls: ['./scrollable-cards.component.css']
})
export class ScrollableCardsComponent {
  @ViewChild('cardContainer') cardContainer!: ElementRef;

  scrollCards(direction: number): void {
    const container: HTMLElement = this.cardContainer.nativeElement;
    const scrollAmount: number = 200; // Imposta la quantità di scroll
    container.scrollLeft += direction * scrollAmount;
  }
}
