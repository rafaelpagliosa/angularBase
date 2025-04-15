import { Component, OnInit } from '@angular/core';
import { ConsultacepService } from 'src/app/services/consultacep.service';


@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class ConsultaCepComponent implements OnInit {

  constructor(private consultaCep: ConsultacepService){}

  ngOnInit(){
    console.log('Componente ConsultaCep iniciado.');
  }



  cep: any;
  logradouro: any;
  bairro: any;
  cidade: any;
  estado: any;

  buscar(){
    this.consultaCep.getConsultar(this.cep).subscribe(res =>{
      this.cidade = res.localidade;
      this.bairro = res.bairro;
      this.logradouro = res.logradouro;
      this.estado = res.uf;

    }, error =>{
      console.log(error);
      this.cep = '';
      this.logradouro = '';
      this.bairro = '';
      this.estado = '';
      this.cidade = '';
    });


  }

}
