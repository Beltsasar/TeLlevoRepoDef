import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSPage } from './register-s.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSPageRoutingModule {}
