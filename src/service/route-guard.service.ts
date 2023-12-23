import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthappService } from './authapp.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RouteGuardService implements CanActivate {

  constructor(private basicAuth: AuthappService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //se l'utente non è loggato il servizio redireziona alla pagina di login
    if (this.basicAuth.islogged() === false) {
      this.route.navigate(["login"])
      return false
    } else {
      return true;
    }

  }
}