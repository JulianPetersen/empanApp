import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-list',
    loadChildren: () => import('./create-list/create-list.module').then( m => m.CreateListPageModule)
  },
  {
    path: 'create-pedido',
    loadChildren: () => import('./create-pedido/create-pedido.module').then( m => m.CreatePedidoPageModule)
  },
  {
    path: 'select-empanadas',
    loadChildren: () => import('./select-empanadas/select-empanadas.module').then( m => m.SelectEmpanadasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
