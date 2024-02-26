import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './pages/error/error.component';
import { CoreModule } from './core/core.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { HeaderComponent } from './core/header/header.component';
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { AccordionClassesComponent } from './components/accordion-classes/accordion-classes.component';
import { CreateClassComponent } from './pages/create-class/create-class.component';
import { StudentsComponent } from './pages/students/students.component';
import { DialogSelectStudentComponent } from './components/dialog-select-student/dialog-select-student.component';
import { StudentStatusComponent } from './pages/student-status/student-status.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { GamesComponent } from './pages/games/games.component';
import { AccordionClassesCoursesComponent } from './components/accordion-classes-courses/accordion-classes-courses.component';
import { StudentStatusTableComponent } from './components/student-status-table/student-status-table.component';
import { AccordionStudentListComponent } from './components/accordion-student-list/accordion-student-list.component';
import { GamesTableComponent } from './components/games-table/games-table.component';
// import { StopDialogComponent } from './components/stop-dialog/stop-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DetailClassComponent } from './pages/detail-class/detail-class.component';
import { ReportTableComponent } from './components/report-table/report-table.component';
import { DetailCourseComponent } from './pages/detail-course/detail-course.component';
import { ListItemCoursesComponent } from './components/list-item-courses/list-item-courses.component';
import { AvailableClassesComponent } from './pages/available-classes/available-classes.component';
import { AvailableClassesTableComponent } from './components/available-classes-table/available-classes-table.component';
import { DetailStudentClassComponent } from './pages/detail-student-class/detail-student-class.component';
import { ScrollableCardsComponent } from './components/scrollable-cards/scrollable-cards.component';
import { AvailableClassesStudentComponent } from './pages/available-classes-student/available-classes-student.component';
import { ScrollableCardsClassesComponent } from './components/scrollable-cards-classes/scrollable-cards-classes.component';
import { SliderComponent } from './components/slider/slider.component';
import { DetailCourseExerciseComponent } from './pages/detail-course-exercise/detail-course-exercise.component';
import { ShowResultsComponent } from './pages/show-results/show-results.component';
import { VirtualCoachComponent } from './components/virtual-coach/virtual-coach.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';
import { EditClassComponent } from './pages/edit-class/edit-class.component';
import { PersonalStudentComponent } from './pages/personal-student/personal-student.component';
import { AccordionStudentClassesComponent } from './components/accordion-student-classes/accordion-student-classes.component';
import { HomepageStudentComponent } from './pages/homepage-student/homepage-student.component';
import { HeaderStudentsComponent } from './core/header-component-students/header-students.component';
import { CompletedClassComponent } from './pages/completed-class/completed-class.component';
import { DetailStudentSubscriptionClassComponent } from './pages/detail-student-subscription-class/detail-student-subscription-class.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent,
    PersonalAreaComponent,
    CoursesComponent,
    CreateCourseComponent,
    ClassesComponent,
    AccordionClassesComponent,
    CreateClassComponent,
    StudentsComponent,
    DialogSelectStudentComponent,
    StudentStatusComponent,
    StudentListComponent,
    GamesComponent,
    AccordionClassesCoursesComponent,
    StudentStatusTableComponent,
    AccordionStudentListComponent,
    GamesTableComponent,
    // StopDialogComponent,
    DetailClassComponent,
    ReportTableComponent,
    DetailCourseComponent,
    ListItemCoursesComponent,
    AvailableClassesComponent,
    AvailableClassesTableComponent,
    DetailStudentClassComponent,
    ScrollableCardsComponent,
    AvailableClassesStudentComponent,
    ScrollableCardsClassesComponent,
    SliderComponent,
    DetailCourseExerciseComponent,
    ShowResultsComponent,
    VirtualCoachComponent,
    EditCourseComponent,
    EditClassComponent,
    PersonalStudentComponent,
    AccordionStudentClassesComponent,
    HomepageStudentComponent,
    HeaderStudentsComponent,
    CompletedClassComponent,
    DetailStudentSubscriptionClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    NoopAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
