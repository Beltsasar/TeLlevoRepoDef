import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioConductorPageRoutingModule } from './inicio-conductor-routing.module';

import { InicioConductorPage } from './inicio-conductor.page';
import { VerRutasComponent } from 'src/app/Componentes/Detalles/Conductor/ver-rutas/ver-rutas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioConductorPageRoutingModule
  ],
  declarations: [InicioConductorPage , VerRutasComponent]
})
export class InicioConductorPageModule {}
