import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent {

  constructor(private router: Router, private elRef: ElementRef) {

  }

  ngOnInit(): void {
    document.body.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'LI') {
        target.classList.toggle('selected');
      }
    });

    const moveLeftButton = this.elRef.nativeElement.querySelector('#move_left');
    moveLeftButton.addEventListener('click', () => {
      const selectedItems = this.elRef.nativeElement.querySelectorAll('.list2 .selected');
      const list1 = this.elRef.nativeElement.querySelector('.list1');
      selectedItems.forEach((selectedItem: { classList: { remove: (arg0: string) => void; }; }) => {
        list1.appendChild(selectedItem);
        selectedItem.classList.remove('selected');
      });
    });

    const moveRightButton = this.elRef.nativeElement.querySelector('#move_right');
    moveRightButton.addEventListener('click', () => {
      const selectedItems = this.elRef.nativeElement.querySelectorAll('.list1 .selected');
      const list2 = this.elRef.nativeElement.querySelector('.list2');
      selectedItems.forEach((selectedItem: { classList: { remove: (arg0: string) => void; }; }) => {
        list2.insertBefore(selectedItem, list2.firstChild);
        selectedItem.classList.remove('selected');
      });
    });
  }

  goBackToClass() {
    this.router.navigate(['/classes'])
  }

}
