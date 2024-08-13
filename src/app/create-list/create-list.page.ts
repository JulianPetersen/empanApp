import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/persona';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.page.html',
  styleUrls: ['./create-list.page.scss'],
})
export class CreateListPage implements OnInit {

  nombre:string="";
  listaNombres:Persona[] = []

  pedido:any[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.getList()
  }


  getList(){
     let array:any = localStorage.getItem('ListaPersonas')
     this.listaNombres = JSON.parse(array)
     console.log(this.listaNombres)
  }

  addPerson(){
    let persona:Persona = {
      name:this.nombre,
      empanada:[]
    }
    this.pedido.push(persona)
    localStorage.setItem('ListaPersonas', JSON.stringify(this.pedido))
    this.nombre = "" 
    this.getList()
  }

  deletePerson(i:any){
    console.log(i)
    this.listaNombres.splice(i,1)
  }

  goToCreatePedido(){
    this.router.navigateByUrl('create-pedido')
  }
}
