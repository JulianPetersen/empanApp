import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { ModalController } from '@ionic/angular';
import { SelectEmpanadasPage } from '../select-empanadas/select-empanadas.page';

@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.page.html',
  styleUrls: ['./create-pedido.page.scss'],
})
export class CreatePedidoPage implements OnInit {

  listaNombres:Persona[] = []

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    this.getList()
  }



  getList(){
    var array:any = localStorage.getItem('ListaPersonas')
    this.listaNombres = JSON.parse(array)
    console.log(this.listaNombres)
 }

 async openModal(persona:any, i:any){
  const modal = await this.modalCtrl.create({
    component: SelectEmpanadasPage,
    componentProps:{persona:persona, indice:i}
  });
  modal.present();
 }
}
