import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

const helper:
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage:Storage,private httpclient:HttpClient,
    private plt: Platform,
    private router: Router,
    ) { }
}
