import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectEmpanadasPage } from './select-empanadas.page';

const routes: Routes = [
  {
    path: '',
    component: SelectEmpanadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectEmpanadasPageRoutingModule {}
