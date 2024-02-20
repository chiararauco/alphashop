import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-virtual-coach',
  templateUrl: './virtual-coach.component.html',
  styleUrls: ['./virtual-coach.component.css']
})
export class VirtualCoachComponent {

  constructor(private elRef: ElementRef){}

  ngOnInit(): void {
    const dialog = this.elRef.nativeElement.querySelector("dialog");
    const showButton = this.elRef.nativeElement.querySelector("dialog + button");
    const closeButton = this.elRef.nativeElement.querySelector("dialog button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
      dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
    // this.addIdsToRows();
  }
}
