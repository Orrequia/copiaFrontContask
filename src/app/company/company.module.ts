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
import {ListStoreComponent} from './component/store/list-store/list-store.component';
import {employeeReducer} from './reducer/employee.reducer';
import {EmployeeEffect} from './effect/employee.effect';
import {DetailEmployeeComponent} from './component/employee/detail-employee/detail-employee.component';
import {companyTypeReducer} from './reducer/company-type.reducer';
import {CompanyTypeEffect} from './effect/company-type.effect';
import {ContractInfoByDongleService} from './service/contractinfobydongle/contract-info-by-dongle.service';
import {EmployeeDataSource} from './datasource/employee.data-source';
import {CompanyDataSource} from './datasource/company.data-source';
import {StoreDataSource} from './datasource/store.data-source';
import {CompanyTypeDataSource} from './datasource/company-type.data-source';
import { ShowProvinceComponent } from './component/store/show-province/show-province.component';
import { CreateStoreComponent } from './component/store/create-store/create-store.component';

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
    ShowProvinceComponent,
    CreateStoreComponent
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
    ShowProvinceComponent,
    CreateStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('companies', companyReducer),
    StoreModule.forFeature('stores', storeReducer),
    StoreModule.forFeature('employees', employeeReducer),
    StoreModule.forFeature('companyTypes', companyTypeReducer),
    EffectsModule.forFeature([CompanyEffect, StoreEffect, EmployeeEffect, CompanyTypeEffect])
  ],
  providers: [
    CompanyService,
    SearchCompanyService,
    CompanyTypeService,
    StoreService,
    EmployeeService,
    ContractInfoByDongleService,
    CompanyDataSource,
    StoreDataSource,
    EmployeeDataSource,
    CompanyTypeDataSource
    ]
})
export class CompanyModule { }
