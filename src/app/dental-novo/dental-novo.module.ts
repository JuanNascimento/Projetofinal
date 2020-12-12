import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentalNovoPageRoutingModule } from './dental-novo-routing.module';

import { DentalNovoPage } from './dental-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DentalNovoPageRoutingModule
  ],
  declarations: [DentalNovoPage]
})
export class DentalNovoPageModule {}