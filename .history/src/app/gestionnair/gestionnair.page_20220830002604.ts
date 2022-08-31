import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
// import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { OverlayEventDetail } from '@ionic/core/components';
// import { WebPlugin } from '@capacitor/core';


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
                // this.scanCode();
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
  livraisonEnCourse:any[]=[]
  commandes:any
  commandesQrcode:any[]=[]
  echec:boolean= true;
  sladingCache:boolean=false
  ngOnInit() {
    this.livCnnect = this.Authservice.stoken
    this.liv=this.Authservice.getDecodedAccessToken(this.livCnnect)
    // console.log(this.liv.username)
    this.getLivreur().subscribe(data =>{
      this.allLivreur = data
      // console.log(this.allLivreur)
      this.allLivreur.forEach(eldata =>{
        if(eldata.email===this.liv.username){
       this.OnlivConnect=eldata
       this.livraisonLivreur=this.OnlivConnect.livraison
          this.livraisonLivreur.forEach(el=>{
            if(el.etatlivraison==="en cours"){
              this.livraisonEnCourse.push(el)
              // console.log(this.livraisonEnCourse)
            }
          })
        }
        
      })
    })
   

  }
commandeLivraisons(){
 this.livraisonLivreur.forEach(el =>{
  this.commandes=el.commandes
  this.commandes.forEach(elqr=>{
    if(elqr.qrcode!=0){
      this.commandesQrcode.push(elqr)
      console.log(this.commandesQrcode)
    }
  })
  
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
//la partie scaneur
scanActive: boolean = false;
async checkPermission() {
  return new Promise(async (resolve, reject) => {
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      resolve(true);
    } else if (status.denied) {
      BarcodeScanner.openAppSettings();
      resolve(false);
    }
  });
}

async startScanner() {
  const allowed = await this.checkPermission();

  if (allowed) {
    this.scanActive = true;
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      this.scanActive = false;
      alert(result.content); //The QR content will come out here
      //Handle the data as your heart desires here
    } else {
      alert('NO DATA FOUND!');
    }
  } else {
    alert('NOT ALLOWED!');
  }
}
stopScanner() {
  BarcodeScanner.stopScan();
  this.scanActive = false;
}

ionViewWillLeave() {
  BarcodeScanner.stopScan();
  this.scanActive = false;
}
mafunction(){
  alert('ok')
}
//les methodes du models
@ViewChild(IonModal) modal: IonModal;

message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
name: string;

cancel() {
  this.modal.dismiss(null, 'cancel');
  this.modeleouv=true;
}
modeleouv:boolean =false;
confirm() {
  this.commandes.forEach(el=>{
    if(el.qrcode!=this.name){

      this. echec= false;
    }else{
      this.modeleouv=true;
      // console.log('success')
    }
  
  })
  // this.modal.dismiss(this.name, 'confirm');
  console.log(this.name)
}

onWillDismiss(event: Event) {
  const ev = event as CustomEvent<OverlayEventDetail<string>>;
  if (ev.detail.role === 'confirm') {
    this.message = `Hello, ${ev.detail.data}!`;
  }
}
etaleComplement:boolean = true;

etalecomplement(){
  if(this.etaleComplement=== true){

    this.etaleComplement=false;
  }else{
    this.etaleComplement=true;
  }
}
sladingcachef(){
  if(this.sladingCache===false){

    this.sladingCache=true
  }else{
    this.sladingCache=false;
  }
}
gerelivraisons(id:number){
  this.Authservice.gerelivraisons(id).subscribe()
}

}

