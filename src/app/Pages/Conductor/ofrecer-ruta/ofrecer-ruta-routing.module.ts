import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfrecerRutaPage } from './ofrecer-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: OfrecerRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfrecerRutaPageRoutingModule {}
