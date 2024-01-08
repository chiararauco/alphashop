import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ErrorComponent } from './pages/error/error.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteGuardService } from 'src/services/route-guard.service';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, //componente da visualizzare se non ci sono pagine specifiche 
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:userid', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'articoli', component: ArticoliComponent, canActivate: [RouteGuardService] },
  { path: 'articoli/grid', component: GridArticoliComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent } // componente che si visualizza quando una pagina non esiste
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
