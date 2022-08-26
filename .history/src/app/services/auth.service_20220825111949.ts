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
    this.router.navigateByUrl('/catalogue')
    this.saveToken(token)
    // console.log(token);
    // console.log(JSON.stringify(token));
  //  console.log(this.getDecodedAccessToken(JSON.stringify(token)));
   })
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  saveToken(token:string): void {
    localStorage.setItem('token',token);
  }
  isLogged():boolean{
    const token = localStorage.setItem('token',)
    return !! token
  }
}
