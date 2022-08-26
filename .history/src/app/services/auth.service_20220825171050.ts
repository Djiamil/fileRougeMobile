import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

public url:'http://127.0.0.1:8000/api/login'
  login(user:any){
   return this.http.post<any>('http://127.0.0.1:8000/api/login',user).subscribe(token =>{
    // console.log(token.token);
    // this.router.navigateByUrl('/catalogue')
  let gest= this.getDecodedAccessToken(JSON.stringify(token));
  console.log(gest);
  if(gest.roles[0]==="ROLE_LIVREUR"){
    this.router.navigateByUrl('/gestionnair')
  }else if(gest.roles[0]==="ROLE_CLIENT"){
    this.router.navigateByUrl('/catalogue')
  }
    this.saveToken(token.token)
   })
  }
  stoken:string;
  getDecodedAccessToken(token: string): any {
    try {
      this.stoken =token
      return jwt_decode(this.stoken);
    } catch(Error) {
      return null;
    }
  }
  saveToken(token:string): void {
    // console.log(token);
   return localStorage.setItem('token',token);

  }
  isLogged(){
    const token = localStorage.getItem('token')
    return token
  }
  getLivreurConnect(email: string):any {
    return this.getDecodedAccessToken().find(params => params.email === email);
  }
}
