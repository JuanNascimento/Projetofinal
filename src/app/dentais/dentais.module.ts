import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentaisPageRoutingModule } from './dentais-routing.module';

import { DentaisPage } from './dentais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DentaisPageRoutingModule
  ],
  declarations: [DentaisPage]
})
export class DentaisPageModule {}
