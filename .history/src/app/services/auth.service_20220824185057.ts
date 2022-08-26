import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
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
    private http: HttpClient
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
        let decoded = helper.decodeToken(token);
        console.log('decoded:', decoded);
        this.userData.next(decoded);
      }else{
        return null;
      }
      
    })

    );
    }
    login(credentials: {email: string, password: string}):Observable<any>{
      if(credentials.email !='Djiamil02@outlook.fr' || credentials.password != '123'){
         return of(null)
      }
      return this.http.get<any>('http://127.0.0.1:8000/api/login').pipe(
        take(1),
        map(res =>{
          return `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjEzNjY1ODUsImV4cCI6Mzc2NjEzNjY1ODUsInJvbGVzIjpbIlJPTEVfR0VTVElPTkFJUyIsIlJPTEVfVklTSVRFVVIiXSwidXNlcm5hbWUiOiJ0cmFAZ21haWwuY29tIn0.kfjL5vmuCfGgs8k6lydvoyzqbYtyrnbgdtFAoCeZNaFOKfWjldZ4G5KkRziRv0reblMtXe8IIMWQhkWHLvvDBrzsJJWzYnQP2c_NQ-CJE-jUINqL9Z3mb46F4s2dD8PvOeLF0XRSrk2tDSPQIM3uQm9Ubh1pdgGz1xEtP5PmxtQje2xeHU6LwEV4GhkDJS4CKiiOm8NPfUeG7uQTFV_2dWV7k1u9T1eXOIE6YTqH8-2BpN5jI-7qpWxEuZGxlumRSybxUBPvWHZkP6TU6DfPeRPKFDQ2wH8bmCWMa4aNrNlXjQcAvlGG7R4zIh8x7TGZPU1bGy2-CYb3ujBX9JR6sg`
        }),
        switchMap(token =>{
          let decoded = helper.decodeToken(token);
        console.log('login decoded:', decoded);
        this.userData.next(decoded);

        let storageObs = from(this.storage.set(TOKEN_KEY, token))
        return storageObs
        })
      )}
      
}
