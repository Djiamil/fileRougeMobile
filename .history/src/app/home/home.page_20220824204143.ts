import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  MyForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private Authservice: AuthService) {}

login(){
  this.AuthService.login(this.)
console.log(this.MyForm.value);
}
}
