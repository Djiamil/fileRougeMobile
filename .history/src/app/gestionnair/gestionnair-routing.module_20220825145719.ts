import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionnairPage } from './gestionnair.page';

const routes: Routes = [
  {
    path: '',
    component: GestionnairPage,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionnairPageRoutingModule {}
