import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  constructor(private AuthService:) {}

login(){
  thi
console.log(this.MyForm.value);
}
}
