import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterSPageRoutingModule } from './register-s-routing.module';

import { RegisterSPage } from './register-s.page';
import { SegmentoRegisterComponent } from 'src/app/Componentes/Segmentos/segmento-register/segmento-register.component';
import { RegistroConductorComponent } from 'src/app/Componentes/Register/registro-conductor/registro-conductor.component';
import { RegistroPasajeroComponent } from 'src/app/Componentes/Register/registro-pasajero/registro-pasajero.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterSPageRoutingModule,
    ReactiveFormsModule,  // <-- Agregar ReactiveFormsModule aquí

  ],
  declarations: [RegisterSPage,SegmentoRegisterComponent,RegistroConductorComponent,RegistroPasajeroComponent]
})
export class RegisterSPageModule {}
