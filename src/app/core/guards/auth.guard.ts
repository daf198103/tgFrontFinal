import { Injectable } from "@angular/core";
import { AuthService } from '../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router, private login:LoginComponent){ }

  canActivate(): boolean{
    if(this.login.usuarioAutenticado!=null){
      console.log("PASSOU AQUI!")
      return true;
    }
    this.router.navigate(['']);
    console.log("PASSOU não")
    return false;
  }
}

