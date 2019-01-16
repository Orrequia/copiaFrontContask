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
import { NavbarCompanyComponent } from './component/company/navbar-company/navbar-company.component';
import { ListCompanyComponent } from './component/company/list-company/list-company.component';
import { DetailCompanyComponent } from './component/company/detail-company/detail-company.component';
import { DetailStoreComponent } from './component/store/detail-store/detail-store.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CompanyComponent,
    NavbarCompanyComponent,
    LoginComponent,
    NavbarCompanyComponent,
    ListCompanyComponent,
    DetailCompanyComponent,
    DetailStoreComponent
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
