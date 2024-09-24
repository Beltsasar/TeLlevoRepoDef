import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarAutoPage } from './buscar-auto.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarAutoPageRoutingModule {}
