import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DetailProduitPageModule } from '../detail-produit/detail-produit.module';
import { DetailProduitPage } from '../detail-produit/detail-produit.page';
import { ConnexionPage } from '../connexion/connexion.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DetailProduitPageModule,
    ReactiveFormsModule
   
  ],
  declarations: [HomePage,ConnexionPage]
})
export class HomePageModule {}
