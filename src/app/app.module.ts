import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {CompanyModule} from './company/company.module';
import {ContractService} from './service/contract/contract.service';;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    CoreModule,
    CompanyModule
  ],
  providers: [
    ContractService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
