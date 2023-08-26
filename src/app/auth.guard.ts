import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { LoginService } from './login-service.service';



 

@Injectable({

  providedIn: 'root'

})

export class AuthGuard implements CanActivate {

 

  constructor(private loginService: LoginService, private router: Router) { }

 

  canActivate(

    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginService.isLoggedIn()) {

      return true; // User is logged in, allow access

    } else {

      // User is not logged in, redirect to login page

      this.router.navigate(['login']); // Update the path to your login route

      return false;

    }

  }

}