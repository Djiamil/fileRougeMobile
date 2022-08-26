import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProduitPageRoutingModule } from './detail-produit-routing.module';

import { DetailProduitPage } from './detail-produit.page';
import { HeaderParallaxPageRoutingModule } from '../detailProduit/header-parallax/header-parallax-routing.module';
import { HeaderParallaxPage } from '../detailProduit/header-parallax/header-parallax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProduitPageRoutingModule,
    HeaderParallaxPageRoutingModule
  ],
  declarations: [DetailProduitPage,HeaderParallaxPage]
})
export class DetailProduitPageModule {}
