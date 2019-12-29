import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPorCpfComponent } from './user-por-cpf/user-por-cpf.component';
import { LoginComponent } from './core/login/login.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  
  { path: 'user-list', component: UserListComponent },
  { path: 'user-cpf',component: UserPorCpfComponent },
  { path: 'user-cpf/:id',component: UserPorCpfComponent },
  { path: 'user-cpf/details/:id',component: UserDetailsComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'user-list/details/:placa',component: UserDetailsComponent },
  /* { path: 'login', component: LoginComponent }, */
  { path: 'home', component: AppComponent },
  { path: '', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


