import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentalVisualizarPage } from './dental-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: DentalVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentalVisualizarPageRoutingModule {}
