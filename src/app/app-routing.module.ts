import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/General/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'inicio-conductor',
    loadChildren: () => import('./Pages/Conductor/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./Pages/General/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'inicio-pasajero',
    loadChildren: () => import('./Pages/Pasajero/inicio-pasajero/inicio-pasajero.module').then( m => m.InicioPasajeroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
