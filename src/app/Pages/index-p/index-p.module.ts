import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPPageRoutingModule } from './index-p-routing.module';

import { IndexPPage } from './index-p.page';
import { SegmentoComponent } from 'src/app/Componentes/segmento/segmento.component';
import { HistorialComponent } from 'src/app/Componentes/Pasajero/historial/historial.component';
import { PerfilComponent } from 'src/app/Componentes/Pasajero/perfil/perfil.component';
import { HomePasajeroComponent } from 'src/app/Componentes/Pasajero/home-pasajero/home-pasajero.component';
import { AjustesComponent } from 'src/app/Componentes/Pasajero/ajustes/ajustes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPPageRoutingModule
  ],
  declarations: [IndexPPage,
    SegmentoComponent,
    HistorialComponent,
    AjustesComponent,
    PerfilComponent,
    HomePasajeroComponent]
})
export class IndexPPageModule {}
