import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioConductorPageRoutingModule } from './inicio-conductor-routing.module';

import { InicioConductorPage } from './inicio-conductor.page';
import { MostrarRutaOfrecidaComponent } from 'src/app/Componentes/Detalles/Conductor/mostrar-ruta-ofrecida/mostrar-ruta-ofrecida.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioConductorPageRoutingModule
  ],
  declarations: [InicioConductorPage,MostrarRutaOfrecidaComponent]
})
export class InicioConductorPageModule {}
