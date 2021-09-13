import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./cart/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'item-resume',
    loadChildren: () => import('./cart/item-resume/item-resume.module').then( m => m.ItemResumePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
