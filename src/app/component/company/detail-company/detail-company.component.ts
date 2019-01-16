import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Company} from '../../../model/company.model';
import {CompanyTypeService} from '../../../service/company-type/company-type.service';
import {CompanyType} from '../../../model/company-type.model';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Employee} from '../../../model/employee.model';
import {StoreService} from '../../../service/store/store.service';
import {Store} from '../../../model/store.model';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit, OnChanges {

  @Input()
  private company: Company;

  private companyType: CompanyType;
  private owner: Employee;
  private stores: Array<Store>;
  private storeSelected: Store;

  private nulo = '--';

  constructor(private companyTypeService: CompanyTypeService,
              private employeeService: EmployeeService,
              private storeService: StoreService) {
    this.companyType = new CompanyType();
    this.owner = new Employee();
    this.stores = new Array<Store>();
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
    this.storeService.get(undefined, [this.company.idCompany]).subscribe( stores => {
      this.stores = stores as unknown as Array<Store>;
      console.log(stores);
    });
    this.storeSelected = new Store();
  }

  selectStore(store: Store) {
    this.storeSelected = store;
  }

}
