import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, ControlContainer, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserPorCpfComponent } from './user-por-cpf/user-por-cpf.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './core/login/login.component';
import { NavbarComponent } from './core/navbar/navbar.component';

import { AuthInterceptor, httpInterceptorProviders } from './core/auth/auth-interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthLoginInfo } from './core/auth/login-info';



@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UserPorCpfComponent,
    LoginComponent,
    NavbarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    FormsModule

  ],
  providers: [CreateUserComponent,UserDetailsComponent,UserListComponent,httpInterceptorProviders,
  LoginComponent, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }


