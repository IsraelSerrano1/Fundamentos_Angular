import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.css']
})
export class FundamentosComponent {
      fundamentos="fundamentos de angular"

      cadena:string="Haz click"
      n:number=1

      oneWayBinding(){
        this.cadena="Hiciste Click " + this.n + " veces"
        this.n++
      }
}
