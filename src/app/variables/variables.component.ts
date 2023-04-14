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
    let cadenaDobles: string="cadena de texto con comillas dobles \""
    let cadenaSimple: string='cadena de texto con comilla simple \''
    let cadenaInvertida: string= `cadena de texto con comilla invertida \` 
    En la que podemos dar saltos de linea
    E insertar expresiones:
    ${cadenaDobles}`
    let booleano: boolean=true
    let any: any=75
    let unknown: unknown="tipo desconocido"

    console.log("El tipo de variable es ",typeof numero," y el valor es: ", numero)
    console.log("El tipo de variable es ",typeof cadenaDobles," y el valor es: ", cadenaDobles)
    console.log("El tipo de variable es ",typeof cadenaSimple," y el valor es: ", cadenaSimple)
    console.log("El tipo de variable es ",typeof cadenaInvertida," y el valor es: ", cadenaInvertida)
    console.log("El tipo de variable es ",typeof booleano," y el valor es: ", booleano)
    console.log("El tipo de variable es ",typeof any," y el valor es: ", any)
    console.log("El tipo de variable es ",typeof unknown," y el valor es: ", unknown) 


  }

}
