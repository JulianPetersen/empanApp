import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {
    this.createGustos()
  }

  gustos:string[] = [
    'Carne',
    'Jamon y queso',
    'pollo',
    'humita',
    'verdura'
  ]
  

  createGustos(){

   let listGusstos = localStorage.getItem('gustosEmpanadas')
   if(listGusstos == null){
    localStorage.setItem('gustosEmpanadas', JSON.stringify(this.gustos) )
   }else{
    return
   }
   
  }
}
