import { Component, Input, OnInit } from '@angular/core';
import { Empanada } from '../models/empanada';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-select-empanadas',
  templateUrl: './select-empanadas.page.html',
  styleUrls: ['./select-empanadas.page.scss'],
})
export class SelectEmpanadasPage implements OnInit {

  @Input() persona:any
  @Input() indice:any

  gustos:any[]=[];
  cantidad:number = 0;
  gustoSelected:string="";
  viewInputCantidad:Boolean=false;

  selectedEmpanadas:Empanada[]=[];

  constructor() {}



  ngOnInit() {
    console.log(this.indice)
    if(this.gustoSelected != ""){
      this.viewInputCantidad = true
    }else{
      this.viewInputCantidad = false
    }

    this.getGustos()
  }


  getGustos(){
    let array:any = localStorage.getItem('gustosEmpanadas')
    this.gustos = JSON.parse(array);
    console.log(this.gustos)
  }


  mostrarInput(){
    if(this.gustoSelected != ""){
      this.viewInputCantidad=true;
    }
  }


  agregarEmpanada(){
    let empanada:Empanada = {
      sabor:this.gustoSelected,
      cant:this.cantidad
    }
    this.selectedEmpanadas.push(empanada)
    let listaPersonas:any = localStorage.getItem('ListaPersonas')
    let personas:Persona[] = JSON.parse(listaPersonas)

    personas[this.indice].empanada.push(empanada)

    localStorage.setItem('ListaPersonas', JSON.stringify(personas))
    
    
  }

}
