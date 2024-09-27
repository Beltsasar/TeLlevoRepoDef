import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexCPageRoutingModule } from './index-c-routing.module';

import { IndexCPage } from './index-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexCPageRoutingModule
  ],
  declarations: [IndexCPage]
})
export class IndexCPageModule {}
