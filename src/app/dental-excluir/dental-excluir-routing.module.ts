import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentalExcluirPage } from './dental-excluir.page';

const routes: Routes = [
  {
    path: '',
    component: DentalExcluirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentalExcluirPageRoutingModule {}
