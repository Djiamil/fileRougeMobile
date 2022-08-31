import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonModal, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
// import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { OverlayEventDetail } from '@ionic/core/components';
// import { WebPlugin } from '@capacitor/core';
import jsQR from 'jsqr';


@Component({
  selector: 'app-gestionnair',
  templateUrl: './gestionnair.page.html',
  styleUrls: ['./gestionnair.page.scss'],
})
export class GestionnairPage implements OnInit {
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;
  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;
  loading: HTMLIonLoadingElement = null;

  constructor(private Authservice: AuthService,private http: HttpClient,
    public navCtrl: NavController,
              // public androidPermissions: AndroidPermissions,
              // public qrScanner: QRScanner
              // public Barcodescanner: BarcodeScanner
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private plt: Platform
              
             
              ) { 
                const isInStandaloneMode = () =>
                'standalone' in window.navigator && window.navigator['standalone'];
              if (this.plt.is('ios') && isInStandaloneMode()) {
                console.log('I am a an iOS PWA!');
                // E.g. hide the scan functionality!
              }
              }
//le qrscanneur
ngAfterViewInit() {
  this.canvasElement = this.canvas.nativeElement;
  this.canvasContext = this.canvasElement.getContext('2d');
  this.videoElement = this.video.nativeElement;
}

// Helper functions
async showQrToast() {
  const toast = await this.toastCtrl.create({
    message: `Open ${this.scanResult}?`,
    position: 'top',
    buttons: [
      {
        text: 'Open',
        handler: () => {
          window.open(this.scanResult, '_system', 'location=yes');
        }
      }
    ]
  });
  toast.present();
}

reset() {
  this.scanResult = null;
}

stopScan() {
  this.scanActive = false;
}
async startScan() {
  // Not working on iOS standalone mode!
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: 'environment' }
  });
 
  this.videoElement.srcObject = stream;
  // Required for Safari
  this.videoElement.setAttribute('playsinline', true);
 
  this.loading = await this.loadingCtrl.create({});
  await this.loading.present();
 
  this.videoElement.play();
  requestAnimationFrame(this.scan.bind(this));
}
 
async scan() {
  if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
      this.scanActive = true;
    }
 
    this.canvasElement.height = this.videoElement.videoHeight;
    this.canvasElement.width = this.videoElement.videoWidth;
 
    this.canvasContext.drawImage(
      this.videoElement,
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    const imageData = this.canvasContext.getImageData(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert'
    });
 
    if (code) {
      this.scanActive = false;
      this.scanResult = code.data;
      this.showQrToast();
    } else {
      if (this.scanActive) {
        requestAnimationFrame(this.scan.bind(this));
      }
    }
  } else {
    requestAnimationFrame(this.scan.bind(this));
  }
}
//capture limage
captureImage() {
  this.fileinput.nativeElement.click();
}
 
handleFile(files: FileList) {
  const file = files.item(0);
 
  var img = new Image();
  img.onload = () => {
    this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
    const imageData = this.canvasContext.getImageData(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert'
    });
    
    if (code) {
      this.scanResult = code.data;
      this.showQrToast();
    }
  };
  img.src = URL.createObjectURL(file);
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
  this.Authservice.gerelivraisons(id)
}

gereCommandeALivrer(id:number){
  this.Authservice.gereCommandeALivrer(id)
}
}





