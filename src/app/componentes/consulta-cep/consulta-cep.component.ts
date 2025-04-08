import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class ConsultaCepComponent implements OnInit {

  ngOnInit(){
    console.log('Componente ConsultaCep iniciado.');
    alert("OI");
  }

  cep  = '85530000';
  logradouro: any;
  bairro: any;
  cidade: any;
  estado: any;


  constructor(){}

}
