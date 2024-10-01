import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOfrecerRutaPage } from './form-ofrecer-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: FormOfrecerRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOfrecerRutaPageRoutingModule {}
