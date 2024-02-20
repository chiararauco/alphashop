import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(private elRef: ElementRef, private router: Router) { }


  ngOnInit(): void {
    const dialog = this.elRef.nativeElement.querySelector("dialog");
    const showButton = this.elRef.nativeElement.querySelector("dialog + button");
    const closeButton = this.elRef.nativeElement.querySelector("back-button");

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

  closeDialog(): void {
    const dialog = document.querySelector('dialog');
    if (dialog) {
      dialog.close();
    }
  }

  goToStudentStatus() {
    this.router.navigate(['/student-status'])
  }

  goToStudentList() {
    this.router.navigate(['/student-list'])
  }



}

