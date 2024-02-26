import { Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-header-students',
  templateUrl: './header-students.component.html',
  styleUrls: ['./header-students.component.css']
})
export class HeaderStudentsComponent {
  isStudent: boolean = true;
  isInstructorPopupVisible = false;


  constructor(public basicAuth: AuthappService, private elRef: ElementRef, private router: Router) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.isNavbarVisible = !event.url.includes('/login') || !event.url.includes('/');
    //   }
    // });

  }

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

    localStorage.getItem('Utente') === 'allievo' ? this.isStudent = true : false;



  }

  closePopup(): void {
    this.isInstructorPopupVisible = false;

  }
  toggleInstructorPopup(): void {
    this.isInstructorPopupVisible = !this.isInstructorPopupVisible;
  }

  goToHome() {
    this.router.navigate(['/homepage-student']);
  }

  logout() {
    this.router.navigate(['/login'])
    this.closePopup();
    localStorage.clear();
  }

  goToPersonal() {
    this.router.navigate(['/personal-student']);
  }

  goToClasses() {
    this.router.navigate(['/available-classes']);
  }

  goToCourses() {
    this.router.navigate(['/courses']);
  }


}
