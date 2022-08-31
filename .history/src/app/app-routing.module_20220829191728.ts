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
    pathMatch: 'full',

  },
  {path: 'catalogue', component:CatalogueComponent},
  {
    path: 'catalogue/:id',
    loadChildren: () => import('./detail-produit/detail-produit.module').then( m => m.DetailProduitPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'gestionnair',
    loadChildren: () => import('./gestionnair/gestionnair.module').then( m => m.GestionnairPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
