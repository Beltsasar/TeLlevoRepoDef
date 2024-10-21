import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCuentaPage } from './info-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCuentaPageRoutingModule {}
