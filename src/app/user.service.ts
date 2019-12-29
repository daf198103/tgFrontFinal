import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './core/auth/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private token: TokenStorageService,
    ) { }


  private baseUrl = 'http://localhost:8082';

  getAll(): Promise<any>{
    var reqHeader = new HttpHeaders({       
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + this.token.getToken()
        });
  return this.http.get(`${this.baseUrl}/projeto/findAll`, { headers: reqHeader })
  .toPromise()
  .then( resposta => resposta);
  }

  
  getAllConcluidos(): Promise<any>{
    var reqHeader = new HttpHeaders({       
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + this.token.getToken()
        });
  return this.http.get(`${this.baseUrl}/projeto/concluidos/findconcluidos`, { headers: reqHeader })
  .toPromise()
  .then( resposta => resposta);
  }


  findByPlaca(placaDoCavalo: String):Promise<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.baseUrl}/projeto/findByPlaca/${placaDoCavalo}`,{headers:reqHeader})
    .toPromise()
    .then(resposta=>resposta);
  }

  save(caminhao: any): Promise<any> {
    console.log(caminhao.toString());
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + this.token.getToken()
    });
    return this.http.post(`${this.baseUrl}/projeto/caminhao/save`,caminhao,{headers:reqHeader })
    .toPromise()
    .then(resposta=>resposta);
  }

  updateCaminhao(carregamento:any): Promise<any>{
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + this.token.getToken() 
    });
    return this.http.post(`${this.baseUrl}/projeto/carregamento/${carregamento.cmn}`,carregamento,{headers:reqHeader})
    .toPromise()
    .then(resposta=>resposta);
  }


  deleteUser(id: number): Promise<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.baseUrl}/data/api/delete/${id}`, {headers:reqHeader})
    .toPromise()
    .then();
  }

 /*  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data/api/getAll`);
  } */
  
}
