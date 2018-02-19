import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LojasListagemComponent } from './lojas-listagem/lojas-listagem.component';
import { LojasService } from './lojas.service';


@NgModule({
  declarations: [
    AppComponent,
    LojasListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LojasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
