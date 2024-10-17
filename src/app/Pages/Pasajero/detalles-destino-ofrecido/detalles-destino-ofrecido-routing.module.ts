import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesDestinoOfrecidoPage } from './detalles-destino-ofrecido.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesDestinoOfrecidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesDestinoOfrecidoPageRoutingModule {}
