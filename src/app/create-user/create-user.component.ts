import { Component, OnInit } from '@angular/core';
import { Caminhao } from '../caminhao';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  caminhao: Caminhao = new Caminhao();
  submitted = false;
  dadosCaminhao:FormGroup;

  estados: string[] = [
    'AC','AL','AP','AM','BA','CE',
'DF','ES','GO','MA','MT','MS',
'MG','PA','PB','PR','PE','PI',
'RJ','RN','RS','RO','RR','SC',
'SP','SE','TO'
  ];
  

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    
    this.dadosCaminhao = new FormGroup({
      id_ :new FormControl(''), 
      placa: new FormControl(''), 
      cidade: new FormControl(''),
      estado: new FormControl(''),
      tipoCaminhao: new FormControl(''),
      motorista: new FormControl(''),
      empresa: new FormControl(''),
      bruto: new FormControl(''),
      tara: new FormControl('')
      });
  }

  onSubmit() {
    this.caminhao.placaDoCavalo = this.dadosCaminhao.value.placa;
    this.caminhao.cidadePlaca = this.dadosCaminhao.value.cidade;
    this.caminhao.estadoPlaca = this.dadosCaminhao.value.estado;
    this.caminhao.tipoCaminhao = this.dadosCaminhao.value.tipoCaminhao;
    this.caminhao.nomeMotorista= this.dadosCaminhao.value.motorista;
    this.caminhao.nomeEmpresa = this.dadosCaminhao.value.empresa;
    this.caminhao.pesoTotalBruto = this.dadosCaminhao.value.bruto;
    this.caminhao.tara = this.dadosCaminhao.value.tara;
    this.caminhao.carregado = false;

    this.userService.save(this.caminhao)
    .then((resposta) => {
      if(resposta == null){
        alert("Caminhão já cadastrado!");
        this.fechar();
      }
      else
      {
        this.submitted = true;
      }

    });

    
    
  }
  
  fechar(){
    window.location.replace("user-list");
  }

  
    

  
}
