import { NgModule } from '@angular/core';

import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPorCpfComponent } from './user-por-cpf/user-por-cpf.component';
import { LoginComponent } from './core/login/login.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';



const routes: Routes = [

  { path: 'user-list', component: UserListComponent,

  },
  { path: 'user-cpf',component: UserPorCpfComponent,
      canActivate:[AuthGuard]
  },
  { path: 'user-cpf/:id',component: UserPorCpfComponent,

  },
  { path: 'user-cpf/details/:id',component: UserDetailsComponent,

  },
  { path: 'add', component: CreateUserComponent,

  },
  { path: 'user-list/details/:placa',component: UserDetailsComponent,

  },
  /* { path: 'login', component: LoginComponent }, */
  { path: 'home', component: AppComponent,

  },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


