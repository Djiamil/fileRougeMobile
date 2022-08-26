import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogues/catalogue/catalogue.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'catalogue', component:CatalogueComponent},
  {
    path: 'catalogue/:id',
    loadChildren: () => import('./detail-produit/detail-produit.module').then( m => m.DetailProduitPageModule),
    
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
