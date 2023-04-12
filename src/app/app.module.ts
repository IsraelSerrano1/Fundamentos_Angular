import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueenComponent } from './queen/queen.component';
import { AtajosComponent } from './atajos/atajos.component';
import { VariablesComponent } from './variables/variables.component';
import { FundamentosComponent } from './fundamentos/fundamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    QueenComponent,
    AtajosComponent,
    VariablesComponent,
    FundamentosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
