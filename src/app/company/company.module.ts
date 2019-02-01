import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CompanyComponent} from './component/company.component';
import {ListCompanyComponent} from './component/list-company/list-company.component';
import {DetailCompanyComponent} from './component/detail-company/detail-company.component';
import {NavbarCompanyComponent} from './component/navbar-company/navbar-company.component';
import {DetailStoreComponent} from './component/store/detail-store/detail-store.component';
import {SummaryContractComponent} from './component/contract/summary-contract/summary-contract.component';
import {CompanyService} from './service/company/company.service';
import {SearchCompanyService} from './service/company/search-company.service';
import {CompanyTypeService} from './service/companytype/company-type.service';
import {StoreService} from './service/store/store.service';
import {EmployeeService} from './service/employee/employee.service';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CompanyEffect} from './effect/company.effect';
import {companyReducer} from './reducer/company.reducer';
import {storeReducer} from './reducer/store.reducer';
import {StoreEffect} from './effect/store.effect';
import { ListStoreComponent } from './component/store/list-store/list-store.component';
import {employeeReducer} from './reducer/employee.reducer';
import {EmployeeEffect} from './effect/employe.effect';
import { DetailEmployeeComponent } from './component/employee/detail-employee/detail-employee.component';

@NgModule({
  declarations: [
    CompanyComponent,
    ListCompanyComponent,
    DetailCompanyComponent,
    NavbarCompanyComponent,
    ListStoreComponent,
    DetailStoreComponent,
    SummaryContractComponent,
    DetailEmployeeComponent,
  ],
  exports: [
    CompanyComponent,
    ListCompanyComponent,
    DetailCompanyComponent,
    NavbarCompanyComponent,
    ListStoreComponent,
    DetailStoreComponent,
    SummaryContractComponent,
    DetailEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('companies', companyReducer),
    StoreModule.forFeature('stores', storeReducer),
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([CompanyEffect, StoreEffect, EmployeeEffect])
  ],
  providers: [
    CompanyService,
    SearchCompanyService,
    CompanyTypeService,
    StoreService,
    EmployeeService
    ]
})
export class CompanyModule { }
