import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private Authservice:AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(this.router)
      // let authInfo = {
      //   authenticated: false,
      // };
      // if (!authInfo.authenticated) {
      //   this.router.navigate(['/']);
      //   return false;
      // }
     let lerole:any=this.Authservice.isLogged();
     console.log(lerole.roles);

    return true;
  }
  
}
