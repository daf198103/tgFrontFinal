import { LoginComponent } from './../login/login.component';

import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { URL_API } from 'src/app/app.api';
import { TokenStorageService } from './token-storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  /* ip miami: 192.168.0.244 */


  private loginUrl = URL_API+'/projeto/login';

  private signupUrl = URL_API+'/apipdv/api/auth/signup';

  token:any = '';


  constructor(private http: HttpClient) {

  }

  attemptAuth(credentials: AuthLoginInfo): Observable<any> {
   sessionStorage.setItem("token",JSON.stringify(this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions)));
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  isLogado(){
    console.log(sessionStorage.getItem("token"));
    return this.token;
  }




}
