import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Company} from '../../model/company.model';
import {CompanyType} from '../../model/company-type.model';
import {Employee} from '../../model/employee.model';
import {Store} from '../../model/store.model';
import {CompanyTypeService} from '../../service/companytype/company-type.service';
import {EmployeeService} from '../../service/employee/employee.service';
import {StoreService} from '../../service/store/store.service';

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
      this.storeSelected = stores[0];
    });
    this.storeSelected = new Store();
  }

  selectStore(store: Store) {
    this.storeSelected = store;
  }

}
