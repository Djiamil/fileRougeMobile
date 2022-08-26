import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-gestionnair',
  templateUrl: './gestionnair.page.html',
  styleUrls: ['./gestionnair.page.scss'],
})
export class GestionnairPage implements OnInit {

  constructor(private Authservice: AuthService,private http: HttpClient) { }

  getLivreur(){
    return this.http.get<any>('http://localhost:8000/api/livreurs')
  }
  ngOnInit() {
    this.getLivreur().subscribe(data => {
      console
    })
  }

}
