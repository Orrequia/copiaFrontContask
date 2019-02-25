import {Component, Input, OnChanges} from '@angular/core';
import {Company} from '../../model/company.model';
import {CompanyType} from '../../model/company-type.model';
import {Employee} from '../../model/employee.model';
import {Observable} from 'rxjs';
import {EmployeeDataSource} from '../../datasource/employee.data-source';
import {CompanyTypeDataSource} from '../../datasource/company-type.data-source';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnChanges {

  @Input()
  private company: Company;

  private owner$: Observable<Employee>;
  private companyType$: Observable<CompanyType>;
  private nulo = '--';

  constructor(private employeeDataSource: EmployeeDataSource,
              private companyTypeDataSource: CompanyTypeDataSource) {}

  ngOnChanges() {
    this.owner$ = this.employeeDataSource.getEmployee(this.company.idOwner);
    this.companyType$ = this.companyTypeDataSource.getCompanyType(this.company.idCompanyType);
  }
}
