import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionnairPageRoutingModule } from './gestionnair-routing.module';

import { GestionnairPage } from './gestionnair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionnairPageRoutingModule,
    // Ng2SearchPipeModule
  ],
  declarations: [GestionnairPage]
})
export class GestionnairPageModule {}
