import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCuentaPageRoutingModule } from './info-cuenta-routing.module';

import { InfoCuentaPage } from './info-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCuentaPageRoutingModule
  ],
  declarations: [InfoCuentaPage]
})
export class InfoCuentaPageModule {}
