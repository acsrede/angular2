import { Component, OnInit } from '@angular/core';
import { LojasService } from '../lojas.service';

@Component({
  selector: 'app-lojas-listagem',
  templateUrl: './lojas-listagem.component.html',
  styleUrls: ['./lojas-listagem.component.css']
})
export class LojasListagemComponent implements OnInit {

  lojasApi = 'https://2tv9vlcydb.execute-api.us-east-1.amazonaws.com/dev/restauranteamerica/lojas';
  lojas: Array<any>;

  constructor(private lojasService: LojasService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    /*this.lojasService.listar().subscribe(
      dados => {
        this.lojas = dados['Items'];
      }
    );*/
	this.lojasService.getAll(this.lojasApi).subscribe(
		dados => {this.lojas = dados['Items'];}			
	);
	
	
  }

}
