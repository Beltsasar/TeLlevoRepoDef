import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPostulantePageRoutingModule } from './mostrar-postulante-routing.module';

import { MostrarPostulantePage } from './mostrar-postulante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPostulantePageRoutingModule
  ],
  declarations: [MostrarPostulantePage]
})
export class MostrarPostulantePageModule {


  
}
