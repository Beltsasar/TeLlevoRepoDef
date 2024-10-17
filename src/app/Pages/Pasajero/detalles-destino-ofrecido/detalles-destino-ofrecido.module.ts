import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesDestinoOfrecidoPageRoutingModule } from './detalles-destino-ofrecido-routing.module';

import { DetallesDestinoOfrecidoPage } from './detalles-destino-ofrecido.page';
import { MostrarPosiblesConductoresComponent } from 'src/app/Componentes/Detalles/Pasajero/mostrar-posibles-conductores/mostrar-posibles-conductores.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesDestinoOfrecidoPageRoutingModule
  ],
  declarations: [DetallesDestinoOfrecidoPage,MostrarPosiblesConductoresComponent]
})
export class DetallesDestinoOfrecidoPageModule {}
