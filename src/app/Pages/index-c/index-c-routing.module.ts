import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexCPage } from './index-c.page';

const routes: Routes = [
  {
    path: '',
    component: IndexCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexCPageRoutingModule {}
