import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Caminhao } from '../caminhao';

@Component({
  selector: 'app-user-por-cpf',
  templateUrl: './user-por-cpf.component.html',
  styleUrls: ['./user-por-cpf.component.css']
})
export class UserPorCpfComponent implements OnInit {

 
  p: number = 1;
  caminhao: Caminhao = new Caminhao();

  caminhoes: Array<Caminhao> = new Array<Caminhao>();
  constructor(private userService: UserService) {}
  

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
  this.userService.getAll()
  .then((resposta)=>{    
    this.caminhoes = resposta;
  });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .then(
        data => {
          console.log(data);
          this.reloadData();  
          alert("Deletado com Sucesso!")  ;         
        },
        error => console.log(error));
  }

  salvarCarregado(placadocavalo:string){
    console.log("FUNCIONA");
    this.userService.findByPlaca(placadocavalo)
    .then((resposta)=>{
      if(resposta.carregamento[0].cargaCarregada!=0){
        this.caminhao.placaDoCavalo = resposta.placaDoCavalo;
        this.caminhao.carregado = true;
        this.userService.save(this.caminhao);
      }
      
    });
    
  }

 
}
