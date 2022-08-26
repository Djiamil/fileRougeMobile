import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  credentials = {
    email: 'Djiamil0é@outlook.fr',
    password: '123',
  };

  constructor(private auth: AuthService,private alertCtrl: AlertController,private ) { }

  ngOnInit() {
  }

}
