import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogues/catalogue/catalogue.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  },
  {path: 'catalogue', component:CatalogueComponent},
  {
    path: 'catalogue/:id',
    loadChildren: () => import('./detail-produit/detail-produit.module').then( m => m.DetailProduitPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/home.module').then( m => m.HomePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
