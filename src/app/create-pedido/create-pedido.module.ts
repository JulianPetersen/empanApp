import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePedidoPageRoutingModule } from './create-pedido-routing.module';

import { CreatePedidoPage } from './create-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePedidoPageRoutingModule
  ],
  declarations: [CreatePedidoPage]
})
export class CreatePedidoPageModule {}
