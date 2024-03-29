import { Component, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  isInstructorPopupVisible = false;
  // isNavbarVisible: boolean = true;


  constructor(public basicAuth: AuthappService, private elRef: ElementRef, private router: Router) {

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


  }

  closePopup(): void {
    this.isInstructorPopupVisible = false;

  }
  toggleInstructorPopup(): void {
    this.isInstructorPopupVisible = !this.isInstructorPopupVisible;
  }

  goToHome() {
    this.router.navigate(['/homepage']);
  }

  logout() {
    this.router.navigate(['/login'])
    this.closePopup();
    localStorage.clear();
  }

  goToPersonal() {
    this.router.navigate(['/personal']);
  }

  goToClasses() {
    this.router.navigate(['/classes']);
  }

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  goToStudents() {
    this.router.navigate(['/students']);

  }

  goToGames() {
    this.router.navigate(['/games']);

  }
}
