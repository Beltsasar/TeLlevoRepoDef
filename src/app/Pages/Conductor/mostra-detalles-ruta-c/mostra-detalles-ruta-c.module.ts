import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostraDetallesRutaCPageRoutingModule } from './mostra-detalles-ruta-c-routing.module';

import { MostraDetallesRutaCPage } from './mostra-detalles-ruta-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostraDetallesRutaCPageRoutingModule
  ],
  declarations: [MostraDetallesRutaCPage]
})
export class MostraDetallesRutaCPageModule {}
