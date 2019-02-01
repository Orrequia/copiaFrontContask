import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Company} from '../../model/company.model';
import {CompanyType} from '../../model/company-type.model';
import {Employee} from '../../model/employee.model';
import {select, Store} from '@ngrx/store';
import * as StoreModel from '../../model/store.model';
import {CompanyTypeService} from '../../service/companytype/company-type.service';
import {EmployeeService} from '../../service/employee/employee.service';
import {LoadStores} from '../../action/store.action';
import {Observable, of} from 'rxjs';
import {selectStoresByIds, selectStoreState} from '../../selector/store.selector';
import {catchError} from 'rxjs/operators';
import {AppState} from '../../../core/reducer/core.reducer';
import {selectAllCompanies, selectCompanyState} from '../../selector/company.selector';
import {LoadCompanies} from '../../action/company.action';
import {selectEmployeeById} from '../../selector/employee.selector';
import {LoadEmployee} from '../../action/employee.action';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit, OnChanges {

  @Input()
  private company: Company;
  private companyType: CompanyType;

  private dispatched = false;
  private owner$: Observable<Employee>;
  private nulo = '--';

  constructor(private store$: Store<AppState>,
              private companyTypeService: CompanyTypeService) {
    this.companyType = new CompanyType();
  }

  ngOnInit() {
  }

  ngOnChanges() {

    this.dispatched = false;
    this.owner$ = this.store$.pipe(select(selectEmployeeById(this.company.idOwner)));

    this.store$.select(selectCompanyState).subscribe(employees => {
      if (!employees.ids[this.company.idOwner] && !this.dispatched) {
        this.dispatched = true;
        this.store$.dispatch(new LoadEmployee(this.company.idOwner));
      }
    });

    this.companyTypeService.get(this.company.idCompanyType).subscribe(companyType => {
      this.companyType = companyType as unknown as CompanyType;
    });
    // this.employeeService.get(this.company.idOwner).subscribe(employee => {
    //   this.owner = employee as unknown as Employee;
    // });

  }
}
