import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage:Storage,private httpclient:HttpClient,
    private plt: 
    ) { }
}