import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  },


  {
    path: 'mostra-detalles-ruta-c',
    loadChildren: () => import('./Pages/Conductor/mostra-detalles-ruta-c/mostra-detalles-ruta-c.module').then( m => m.MostraDetallesRutaCPageModule)
  },
  {
    path: 'ofrecer-viaje',
    loadChildren: () => import('./Pages/Pasajero/ofrecer-viaje/ofrecer-viaje.module').then( m => m.OfrecerViajePageModule)
  },
  {
    path: 'detalles-destino-ofrecido/:destino/:origen/:horaPartida/:fechaPartida',
    loadChildren: () => import('./Pages/Pasajero/detalles-destino-ofrecido/detalles-destino-ofrecido.module').then(m => m.DetallesDestinoOfrecidoPageModule)
  },
  {
    path: 'mostrar-postulante',
    loadChildren: () => import('./Pages/Pasajero/mostrar-postulante/mostrar-postulante.module').then( m => m.MostrarPostulantePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'register-conductor',
    loadChildren: () => import('./register-conductor/register-conductor.module').then( m => m.RegisterConductorPageModule)
  },
  {
    path: 'info-cuenta',
    loadChildren: () => import('./Pages/General/info-cuenta/info-cuenta.module').then( m => m.InfoCuentaPageModule)
  },
  {
    path: 'tomar-foto',
    loadChildren: () => import('./Pages/General/tomar-foto/tomar-foto.module').then( m => m.TomarFotoPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
