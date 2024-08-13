import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectEmpanadasPageRoutingModule } from './select-empanadas-routing.module';

import { SelectEmpanadasPage } from './select-empanadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectEmpanadasPageRoutingModule
  ],
  declarations: [SelectEmpanadasPage]
})
export class SelectEmpanadasPageModule {}
