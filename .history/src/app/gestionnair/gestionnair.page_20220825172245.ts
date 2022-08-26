import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-gestionnair',
  templateUrl: './gestionnair.page.html',
  styleUrls: ['./gestionnair.page.scss'],
})
export class GestionnairPage implements OnInit {

  constructor(private Authservice: AuthService,htt) { }

  getLivreur(){
    return this.http.get<any('http://localhost:8000/api/livreurs')
  }
  ngOnInit() {

  }

}
