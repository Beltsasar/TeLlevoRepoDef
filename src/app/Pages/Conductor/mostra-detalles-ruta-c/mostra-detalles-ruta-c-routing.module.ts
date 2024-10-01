import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostraDetallesRutaCPage } from './mostra-detalles-ruta-c.page';

const routes: Routes = [
  {
    path: '',
    component: MostraDetallesRutaCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostraDetallesRutaCPageRoutingModule {}
