import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login-screen',
    loadChildren: () => import('./screens/login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
  },
  {
    path: 'pregunta1-p2/:idForm/:id',
    loadChildren: () => import('./screens/pregunta1-p2/pregunta1-p2.module').then( m => m.Pregunta1P2PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'form-str-list/:id',
    loadChildren: () => import('./screens/form-str-list/form-str-list.module').then( m => m.FormStrListPageModule)
  },
  {
    path: 'form-res-list/:formStructId',
    loadChildren: () => import('./screens/form-res-list/form-res-list.module').then( m => m.FormResListPageModule)
  },
  {
    path: 'form-of-forms/:id',
    loadChildren: () => import('./screens/form-of-forms/form-of-forms.module').then( m => m.FormOfFormsPageModule)
  },
  {
    path: 'lastpage',
    loadChildren: () => import('./screens/lastpage/lastpage.module').then( m => m.LastpagePageModule)
  },


]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
