import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentalExcluirPageRoutingModule } from './dental-excluir-routing.module';

import { DentalExcluirPage } from './dental-excluir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DentalExcluirPageRoutingModule
  ],
  declarations: [DentalExcluirPage]
})
export class DentalExcluirPageModule {}