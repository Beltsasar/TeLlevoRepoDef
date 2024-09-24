import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/Pasajero/HomePasajero/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Pages/Pasajero/PerfilPasajero/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./Pages/Pasajero/ajustesPasajero/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'buscar-auto',
    loadChildren: () => import('./Pages/Pasajero/buscar-auto/buscar-auto.module').then( m => m.BuscarAutoPageModule)
  },
  {
    path: 'home-conductor',
    loadChildren: () => import('./Pages/Conductor/home-conductor/home-conductor.module').then( m => m.HomeConductorPageModule)
  },
  {
    path: 'ajustes-conductor',
    loadChildren: () => import('./Pages/Conductor/ajustes-conductor/ajustes-conductor.module').then( m => m.AjustesConductorPageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./Pages/Conductor/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'ofrecer-ruta',
    loadChildren: () => import('./Pages/Conductor/ofrecer-ruta/ofrecer-ruta.module').then( m => m.OfrecerRutaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
