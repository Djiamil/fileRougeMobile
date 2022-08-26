import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,private router: Router,private alertCtr: AlertController){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user.pipe()
      take(1),
      map(user => {
        console.log('in canActivate', user)
          if(!user){
            this
            return false;
          }else{
            return true;
          }
        
        })
      }
  
}
