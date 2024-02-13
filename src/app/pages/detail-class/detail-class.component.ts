import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.component.html',
  styleUrls: ['./detail-class.component.css']
})
export class DetailClassComponent {
  constructor(private elRef: ElementRef,
  ) { }

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
  }
}
