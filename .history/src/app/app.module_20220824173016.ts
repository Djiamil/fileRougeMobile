import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogues/catalogue/catalogue.component';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
// import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent,
    CatalogueComponent,
  ],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    IonicHeaderParallaxModule,
    IonicStorageModule
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent],
})
export class AppModule {}
