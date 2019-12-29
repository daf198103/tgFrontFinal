import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Caminhao } from '../caminhao';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  //user: Promise<User[]>;

  p: number = 1;

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

 
}


