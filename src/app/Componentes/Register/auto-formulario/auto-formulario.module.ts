import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoFormularioPageRoutingModule } from './auto-formulario-routing.module';

import { AutoFormularioPage } from './auto-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoFormularioPageRoutingModule
  ],
  declarations: [AutoFormularioPage]
})
export class AutoFormularioPageModule {}
