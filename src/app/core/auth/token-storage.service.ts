import { AuthLoginInfo } from './login-info';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];

   sysid:number = 1;

  constructor(private auth: AuthService ) { }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);

  }

  public saveToken(token: string) {
   sessionStorage.removeItem(TOKEN_KEY);
   sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem("username", username);
  }

  public getUsername(): string {
    return window.sessionStorage.getItem("username");
  }

  /* public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  } */

  /* public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles; */
  }

 /*  public getSysId(){
    return this.sysid;
  } */



