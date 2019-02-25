import {Component, Input, OnChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../../model/employee.model';
import {EmployeeDataSource} from '../../../datasource/employee.data-source';
import {Store} from '../../../model/store.model';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnChanges {

  @Input()
  private store: Store;

  private employees$: Observable<Array<Employee>>;

  constructor(private employeeDataSource: EmployeeDataSource) { }

  ngOnChanges() {
    this.employees$ = this.employeeDataSource.getEmployeesByStore(this.store);
  }
}
