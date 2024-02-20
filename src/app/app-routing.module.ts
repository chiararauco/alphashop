import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ErrorComponent } from './pages/error/error.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteGuardService } from 'src/services/route-guard.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PersonalAreaComponent } from './pages/personal-area/personal-area.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CreateCourseComponent } from './pages/create-course/create-course.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CreateClassComponent } from './pages/create-class/create-class.component';
import { StudentsComponent } from './pages/students/students.component';
import { StudentStatusComponent } from './pages/student-status/student-status.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { GamesComponent } from './pages/games/games.component';
import { DetailClassComponent } from './pages/detail-class/detail-class.component';
import { DetailCourseComponent } from './pages/detail-course/detail-course.component';
import { AvailableClassesComponent } from './pages/available-classes/available-classes.component';
import { DetailStudentClassComponent } from './pages/detail-student-class/detail-student-class.component';
import { AvailableClassesStudentComponent } from './pages/available-classes-student/available-classes-student.component';
import { DetailCourseExerciseComponent } from './pages/detail-course-exercise/detail-course-exercise.component';
import { ShowResultsComponent } from './pages/show-results/show-results.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, //componente da visualizzare se non ci sono pagine specifiche 
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'personal', component: PersonalAreaComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'create-class', component: CreateClassComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student-status', component: StudentStatusComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'games', component: GamesComponent },
  { path: 'detail-class', component: DetailClassComponent },
  { path: 'detail-course', component: DetailCourseComponent },
  { path: 'available-classes', component: AvailableClassesComponent },
  { path: 'detail-student-class', component: DetailStudentClassComponent },
  { path: 'available-classes-student', component: AvailableClassesStudentComponent },
  { path: 'detail-course-exercise', component: DetailCourseExerciseComponent },
  { path: 'show-results', component: ShowResultsComponent },
  { path: 'edit-course', component: EditCourseComponent },

  // { path: 'welcome/:userid', component: WelcomeComponent, canActivate: [RouteGuardService] },
  // { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent } // componente che si visualizza quando una pagina non esiste
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
