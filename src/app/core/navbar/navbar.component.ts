import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  info: any;
  loggedOut;

  usuarioCadastraRota:boolean;
  public show:boolean = false;
  public buttonName:any = 'Show';

  cupons = [];

  cadastraRota:boolean;

  constructor(private login:LoginComponent, private token: TokenStorageService, private serv: AuthService,
    private route:Router) { }


  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      //authorities: this.token.getAuthorities()
    };
    //console.log(this.info.token);

  }

    logout(){
      console.log("LOGOUT TRUE")
      this.token.signOut();
      this.info.token = null;
      this.route.navigate(['']);
      console.log("Logout completo");

    }

   /*  toggle(){
      this.show = !this.show;
      if(this.show)
      this.buttonName = "Hide";
      else
      this.buttonName = "Show";
    }   */

}
