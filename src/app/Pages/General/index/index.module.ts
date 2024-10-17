import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { SegmentoComponent } from 'src/app/Componentes/segmento/segmento.component';
import { HistorialComponent } from 'src/app/Componentes/General/historial/historial.component';
import { PerfilComponent } from 'src/app/Componentes/General/perfil/perfil.component';
import { HomePasajeroComponent } from 'src/app/Componentes/General/home/home-pasajero.component';
import { AjustesComponent } from 'src/app/Componentes/General/ajustes/ajustes.component';
import { MapaComponent } from 'src/app/Componentes/General/mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule
  ],
  declarations: [IndexPage,
    SegmentoComponent,
    HistorialComponent,
    AjustesComponent,
    PerfilComponent,
    HomePasajeroComponent,
  MapaComponent]
})
export class IndexPageModule {}