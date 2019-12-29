import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthService } from '../auth/auth.service';

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

  constructor(private login:LoginComponent, private token: TokenStorageService, private serv: AuthService
) { }


  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      //authorities: this.token.getAuthorities()
    };
    console.log(this.info.token);
  
  }
   
    logout(){
      this.token.signOut();
      window.location.replace("/");
    }

   /*  toggle(){
      this.show = !this.show;     
      if(this.show)  
      this.buttonName = "Hide";
      else
      this.buttonName = "Show";
    }   */      

}
