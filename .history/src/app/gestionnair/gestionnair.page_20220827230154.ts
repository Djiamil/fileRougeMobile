import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
// import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


@Component({
  selector: 'app-gestionnair',
  templateUrl: './gestionnair.page.html',
  styleUrls: ['./gestionnair.page.scss'],
})
export class GestionnairPage implements OnInit {

  constructor(private Authservice: AuthService,private http: HttpClient,
    public navCtrl: NavController,
              // public androidPermissions: AndroidPermissions,
              // public qrScanner: QRScanner
             
              ) { 
                this.scanCode();
              }

  getLivreur(){
    return this.http.get<any>('http://localhost:8000/api/livreurs')
  }
  searchText=this.formateDateToday()
  filterdates:Date = new Date();
  livCnnect:any;
  liv:any;
  allLivreur:any
  OnlivConnect:any=[]
  livraisonLivreur:any
  commandes:any
  ngOnInit() {
    this.livCnnect = this.Authservice.stoken
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
commandeLivraisons(){
 this.livraisonLivreur.forEach(el =>{
  this.commandes=el.commandes
  console.log(this.commandes)
 })
}
//gere la date du jour
formateDateToday(){
  let date=new Date();
  let day =date.toLocaleDateString().slice(0,2);
  let month = date.toLocaleDateString().slice(3,5);
  let year= date.toLocaleDateString().slice(6);
  return year+"-"+month+"-"+day ;
  //2022-08-10
}
public showCamera = false;
public textScanned: string = '';
scanCode() {
  this.showCamera = true;
  // Optionally request the permission early
  this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
    if (status.authorized) {
      // start scanning
      console.log('Scan en cours...' + JSON.stringify(status));
      const scanSub = this.qrScanner.scan().subscribe((text: any) => {
        console.log('Scanned something', text.result);
        this.textScanned = text.result;
        this.qrScanner.hide(); // hide camera preview
        scanSub.unsubscribe(); // stop scanning
        this.showCamera = false;
      });
    } else if (status.denied) {
      // camera permission was permanently denied
    } else {
      // permission was denied, but not permanently. You can ask for permission again at a later time.
    }
  })
  .catch((e: any) => console.log('Error is', e));
}


}
