import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionnairPageRoutingModule } from './gestionnair-routing.module';

import { GestionnairPage } from './gestionnair.page';
import { QRCodeModule } from 'angularx-qrcode';
// import { QRCodeModule } from 'angularx-qrcode';
// import { QRScanner } from '@ionic-native/qr-scanner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionnairPageRoutingModule,
    QRCodeModule,
    // QRScanner
    // Ng2SearchPipeModule
    
  ],
  declarations: [GestionnairPage]
})
export class GestionnairPageModule {}
