import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap} from 'rxjs/operators';

const helper= new JwtHelperService();
const TOKEN_KEY = 'jwt-token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);
  constructor(private storage:Storage,private httpclient:HttpClient,
    private plt: Platform,
    private router: Router,
    ) { }
    loadStoredToken(){
      let platformObs = from(this.plt.ready());
      this.user = platformObs.pipe(
        switchMap(()=>{
          return from(this.storage.get(TOKEN_KEY))
    })
    map(token => {
      console.log('token froms torage:', token);
      if (token){

      }else{
        return nu
      }
      
    })

    );
    }
}
