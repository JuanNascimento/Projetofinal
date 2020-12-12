  
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then( m => m.LoginPageModule)
  },
  {
    path: 'dentais',
    loadChildren: () => import('./dentais/dentais.module')
      .then( m => m.DentaisPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {authGuardPipe : redirectToLogin}

  },
  {
    path: 'dental-novo',
    loadChildren: () => import('./dental-novo/dental-novo.module')
      .then( m => m.DentalNovoPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {authGuardPipe : redirectToLogin}
  },
  
 
  {
    path: 'sair',
    loadChildren: () => import('./sair/sair.module').then( m => m.SairPageModule)
  },
  {
    path: 'dental-visualizar/:id',
    loadChildren: () => import('./dental-visualizar/dental-visualizar.module').then( m => m.DentalVisualizarPageModule)
  },
  {
    path: 'dental-atualizar/:id',
    loadChildren: () => import('./dental-atualizar/dental-atualizar.module').then( m => m.DentalAtualizarPageModule)
  },
  {
    path: 'dental-excluir/:id',
    loadChildren: () => import('./dental-excluir/dental-excluir.module').then( m => m.DentalExcluirPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {

    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'uploader',
    loadChildren: () => import('./uploader/uploader.module').then( m => m.UploaderPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then( m => m.MaterialPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }

 


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}