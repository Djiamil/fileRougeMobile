import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderParallaxPageRoutingModule } from './header-parallax-routing.module';

import { HeaderParallaxPage } from './header-parallax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderParallaxPageRoutingModule
  ],
  declarations: [HeaderParallaxPage]
})
export class HeaderParallaxPageModule {}
