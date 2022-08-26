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
  livCnnect:any;
  liv:any;
  allLivreur:any
  OnlivConnect:any=[]
  livraisonLivreur:any
  ngOnInit() {
    this.livCnnect=this.Authservice.stoken
    this.liv=this.Authservice.getDecodedAccessToken(this.livCnnect)
    console.log(this.liv.username)
    this.getLivreur().subscribe(data =>{
      this.allLivreur = data
      // console.log(this.allLivreur)
      this.allLivreur.forEach(eldata =>{
        if(eldata.email===this.liv.username){
       this.OnlivConnect=eldata
       this.livraisonLivreur=this.OnlivConnect.livraison

          console.log(this.livraisonLivreur)
        }
        
      })
    })
  }

  import React from 'react';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote } from '@ionic/react';
import { Options } from 'selenium-webdriver';

export const ItemSlidingExample: React.FC = () => (
<IonList>
<IonItemSliding>
<IonItemOptions side="start">
  <IonItemOption onClick={() => console.log('favorite clicked')}>Favorite</IonItemOption>
  <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Share</IonItemOption>
</IonItemOptions>

<IonItem>
  <IonLabel>Item Options</IonLabel>
</IonItem>

<IonItemOptions side="end">
  <IonItemOption onClick={() => console.log('unread clicked')}>Unread</IonItemOption>
</IonItemOptions>
</IonItemSliding>

}
