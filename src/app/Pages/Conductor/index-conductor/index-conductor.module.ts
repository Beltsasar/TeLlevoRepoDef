import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexConductorPageRoutingModule } from './index-conductor-routing.module';

import { IndexConductorPage } from './index-conductor.page';
import { SegmentoInicioComponent } from 'src/app/Componentes/Detalles/Conductor/segmento-inicio/segmento-inicio.component';
import { HomeComponent } from 'src/app/Componentes/Detalles/Conductor/DetSegmento/home/home.component';
import { AjustesComponent } from 'src/app/Componentes/Detalles/Conductor/DetSegmento/ajustes/ajustes.component';
import { PerfilConductorComponent } from 'src/app/Componentes/Detalles/Conductor/DetSegmento/perfil-conductor/perfil-conductor.component';
import { HistorialConductorComponent } from 'src/app/Componentes/Detalles/Conductor/DetSegmento/historial-conductor/historial-conductor.component';
import { VerRutasComponent } from 'src/app/Componentes/Detalles/Conductor/ver-rutas/ver-rutas.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexConductorPageRoutingModule
  ],
  declarations: [IndexConductorPage,SegmentoInicioComponent,HomeComponent,AjustesComponent,PerfilConductorComponent,HistorialConductorComponent,VerRutasComponent]
})
export class IndexConductorPageModule {}
