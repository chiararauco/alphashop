import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-course-exercise',
  templateUrl: './detail-course-exercise.component.html',
  styleUrls: ['./detail-course-exercise.component.css']
})
export class DetailCourseExerciseComponent {
  isInfoPopupVisible = false;
  isToolPopupVisible = false;

  isOtherPopupVisible = false;



  constructor() { }

  closePopup(): void {
    this.isInfoPopupVisible = false;
    this.isToolPopupVisible = false;
    this.isOtherPopupVisible = false;
  }
  toggleInfoPopup(): void {
    this.isInfoPopupVisible = !this.isInfoPopupVisible;
  }

  toggleToolPopup(): void {
    this.isToolPopupVisible = !this.isToolPopupVisible;
  }

  toggleOtherPopup(): void {
    this.isOtherPopupVisible = !this.isOtherPopupVisible;
  }
}
