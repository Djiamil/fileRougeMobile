import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

public url:'http://127.0.0.1:8000/api/login'
  login(user:any){
   return this.http.post<any>(this.url,user).subscribe(token =>{
    c
   })
  }
}
