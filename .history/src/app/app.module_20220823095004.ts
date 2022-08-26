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
import { HeaderParallaxPageModule } from './detailProduit/header-parallax/header-parallax.module';
import { HeaderParallaxPage } from './detailProduit/header-parallax/header-parallax.page';

@NgModule({
  declarations: [AppComponent,
    CatalogueComponent,HeaderParallaxPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,
    CommonModule,
    HeaderParallaxPageModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }],
  bootstrap: [AppComponent],
})
export class AppModule {}
