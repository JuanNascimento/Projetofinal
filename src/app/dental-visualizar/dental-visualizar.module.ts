import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentalVisualizarPageRoutingModule } from './dental-visualizar-routing.module';

import { DentalVisualizarPage } from './dental-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DentalVisualizarPageRoutingModule
  ],
  declarations: [DentalVisualizarPage]
})
export class DentalVisualizarPageModule {}