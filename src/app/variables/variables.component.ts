import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

ngOnInit(): void{
  this.imprimirTipos()
}



  imprimirTipos(){
    let numero: number=1
    let cadena: string="cadena de texto"
    let booleano: boolean=true
    let any: any=75
    let unknown: unknown="tipo desconocido"

    console.log("El tipo de variable es ",typeof numero," y el valor es: ", numero)
    console.log("El tipo de variable es ",typeof cadena," y el valor es: ", cadena)
    console.log("El tipo de variable es ",typeof booleano," y el valor es: ", booleano)
    console.log("El tipo de variable es ",typeof any," y el valor es: ", any)
    console.log("El tipo de variable es ",typeof unknown," y el valor es: ", unknown) 


  }

}
