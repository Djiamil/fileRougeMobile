import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

public url readonly ='http://127.0.0.1:8000/api/login'
  login()
}
