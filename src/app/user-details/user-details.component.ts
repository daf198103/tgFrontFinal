import { Component, OnInit, Input } from '@angular/core';
import { Caminhao } from '../caminhao';
import { UserService } from '../user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';
import { Carregamento } from '../carregamento';
import { TokenStorageService } from '../core/auth/token-storage.service';
import { AuthLoginInfo } from '../core/auth/login-info';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  cmn: Caminhao = new Caminhao();
  cargto: Carregamento = new Carregamento();
  user: Array<Caminhao> = new Array<Caminhao>();
  username:string;
  submitted = false;
  naoexiste = false;
  
  caminhao:FormGroup;
  placa:any;

  constructor(private userService: UserService, private listComponent: UserListComponent,
    private route:ActivatedRoute, private tok:TokenStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var placaDoCavalo = this.getByPlacaDoCavalo(params["placa"]);
      this.placa = placaDoCavalo;
  });
  
  this.caminhao = new FormGroup({
    cmn_id : new FormControl(''),
    placadocavalo :new FormControl(''), 
    cidadedaplaca: new FormControl(''), 
    estadodaplaca: new FormControl(''),
    tipocaminhao: new FormControl(''),
    nomemotorista: new FormControl(''),
    nomedaempresa: new FormControl(''),
    pesototalbruto: new FormControl(''),
    tara: new FormControl(''),
    cargamaxima: new FormControl(''),
    });
  }

  getByPlacaDoCavalo(placaDoCavalo:String){
    this.userService.findByPlaca(placaDoCavalo)
    .then((resposta)=>{
      this.cmn = resposta;
    }) 
  }

  onSubmit()
  {
    this.submitted = true;
    this.cargto.cargaCarregada = this.caminhao.value.cargamaxima;
    this.cargto.username = this.tok.getUsername();
    this.cargto.cmn = this.cmn.id;

    this.userService.updateCaminhao(this.cargto);
    this.naoexiste = true;
    

  
  }


  fechar(){
    window.location.replace("user-list");
  }

}
