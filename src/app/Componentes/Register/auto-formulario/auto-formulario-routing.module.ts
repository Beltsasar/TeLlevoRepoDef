import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoFormularioPage } from './auto-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: AutoFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoFormularioPageRoutingModule {}
