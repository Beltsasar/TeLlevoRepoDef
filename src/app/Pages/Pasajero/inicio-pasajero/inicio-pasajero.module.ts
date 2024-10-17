import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPasajeroPageRoutingModule } from './inicio-pasajero-routing.module';

import { InicioPasajeroPage } from './inicio-pasajero.page';
import { MostrarDestinoOfrecidoComponent } from 'src/app/Componentes/Detalles/Pasajero/mostrar-destino-ofrecido/mostrar-destino-ofrecido.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPasajeroPageRoutingModule
  ],
  declarations: [InicioPasajeroPage,MostrarDestinoOfrecidoComponent]
})
export class InicioPasajeroPageModule {}
