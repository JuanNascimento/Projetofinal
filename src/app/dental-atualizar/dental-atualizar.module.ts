import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentalAtualizarPageRoutingModule } from './dental-atualizar-routing.module';

import { DentalAtualizarPage } from './dental-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DentalAtualizarPageRoutingModule
  ],
  declarations: [DentalAtualizarPage]
})
export class DentalAtualizarPageModule {}