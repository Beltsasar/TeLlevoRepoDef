import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOfrecerRutaPageRoutingModule } from './form-ofrecer-ruta-routing.module';

import { FormOfrecerRutaPage } from './form-ofrecer-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormOfrecerRutaPageRoutingModule
  ],
  declarations: [FormOfrecerRutaPage]
})
export class FormOfrecerRutaPageModule {}
