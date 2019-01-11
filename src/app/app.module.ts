import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CompanyComponent } from './component/company/company.component';
import {AuthGuard} from './guard/auth.guard';
import {AuthService} from './service/auth/auth.service';
import {CompanyService} from './service/company/company.service';
import {LoginComponent} from './component/login/login.component';
import {routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CompanyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
