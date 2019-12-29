import { Component, OnInit } from '@angular/core';
import { AuthLoginInfo } from '../auth/login-info';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  [x: string]: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  mostrarmenu = false;
  errorMessage = 'Usuário ou senha Inválidos!';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  token: string; 
  dataNull = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  erro:any = 0;

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onKeydown(event){
    if(event.key === "Enter"){
      this.onSubmit();
    }
  }

  msg = Array<any>();

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(
    this.form.username,
    this.form.password);
    if(this.loginInfo.username == '' || this.loginInfo.password == '')
    {
      alert("Por favor preencha usuário e senha.");
    }
    else
    {
    this.authService.attemptAuth(this.loginInfo).subscribe(
    data => { 
      console.log(data);
      if(data == null)
      {  
        alert("Usuário não Permitido!");
      }
      else
      {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUsername(this.form.username);
      //this.tokenStorage.saveAuthorities(data.authorities);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.mostrarmenu = true;
      window.location.replace("/");
      //this.roles = this.tokenStorage.getAuthorities();
      this.token = data;
      console.log(this.token);
      }
    },
    error => { 
      this.erro = 1;
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;         
      
      if(error.error.message == undefined) {
      
        alert("Ocorreu uma falha na conexão com o servidor. Aguarde um momento e tente novamente. Se persistir, entre em contato com departamento de TI da sua empresa.");
      } else {

        alert("Usuário não permitido!");
      }

    } 
  );

  }
}
}