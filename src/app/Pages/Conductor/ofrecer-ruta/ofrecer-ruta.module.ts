import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfrecerRutaPageRoutingModule } from './ofrecer-ruta-routing.module';

import { OfrecerRutaPage } from './ofrecer-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfrecerRutaPageRoutingModule
  ],
  declarations: [OfrecerRutaPage]
})
export class OfrecerRutaPageModule {}
