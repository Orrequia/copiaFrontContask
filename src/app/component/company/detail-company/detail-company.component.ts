import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Company} from '../../../model/company.model';
import {CompanyTypeService} from '../../../service/company-type/company-type.service';
import {CompanyType} from '../../../model/company-type.model';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Employee} from '../../../model/employee.model';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit, OnChanges {

  @Input() company: Company;
  companyType: CompanyType;
  owner: Employee;

  constructor(private companyTypeService: CompanyTypeService,
              private employeeService: EmployeeService) {
    this.companyType = new CompanyType();
    this.owner = new Employee();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.companyTypeService.get(this.company.idCompanyType).subscribe(companyType => {
      this.companyType = companyType as unknown as CompanyType;
    });
    this.employeeService.get(this.company.idOwner).subscribe(employee => {
      this.owner = employee as unknown as Employee;
    });
  }


}
