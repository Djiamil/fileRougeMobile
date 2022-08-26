import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:) { }

public url:'http://127.0.0.1:8000/api/login'
  login(){
    this.http.get(this.url
  }
}
