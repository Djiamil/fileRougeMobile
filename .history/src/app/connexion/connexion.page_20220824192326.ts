import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private auth: AuthService,alertCtrl:) { }

  ngOnInit() {
  }

}
