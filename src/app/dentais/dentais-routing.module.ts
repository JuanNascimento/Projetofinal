import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentaisPage } from './dentais.page';

const routes: Routes = [
  {
    path: '',
    component: DentaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentaisPageRoutingModule {}
