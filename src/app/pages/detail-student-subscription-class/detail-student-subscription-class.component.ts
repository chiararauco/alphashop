import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-detail-student-subscription-class',
  templateUrl: './detail-student-subscription-class.component.html',
  styleUrls: ['./detail-student-subscription-class.component.css']
})
export class DetailStudentSubscriptionClassComponent {
  constructor(private elRef: ElementRef,
  ) { }

  ngOnInit(): void {
    const dialog = this.elRef.nativeElement.querySelector("dialog");
    const showButton = this.elRef.nativeElement.querySelector("#subscription");
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
