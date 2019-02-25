import {Injectable} from '@angular/core';
import {AppComponent} from '../../app.component';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../core/reducer/core.reducer';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';
import {selectAllEmployees, selectEmployeeById, selectEmployeesByIds} from '../selector/employee.selector';
import {Employee} from '../model/employee.model';
import {LoadEmployee, LoadEmployees} from '../action/employee.action';
import * as StoreModel from '../model/store.model';

@Injectable()
export class EmployeeDataSource {

  private page = 0;
  private size = AppComponent.sizeRequests;

  constructor(private store: Store<AppState>) {}

  // public getEmployees(): Observable<Array<Employee>> {
  //
  //   this.store.pipe(
  //     take(1),
  //     select(selectEmployeeState),
  //     tap( (employeeState: EmployeeState) => {
  //       if (!employeeState.ids || (!employeeState.allLoaded && employeeState.ids.length < this.size)) {
  //         this.store.dispatch(new LoadEmployees(this.page));
  //         this.page = this.page + 1;
  //       }
  //     })
  //   ).subscribe();
  //   return this.store.pipe(select(selectAllEmployees));
  // }

  public getEmployeesByStore(store: StoreModel.Store): Observable<Array<Employee>> {

    this.store.pipe(
      take(1),
      select(selectEmployeesByIds(store.employees)),
      filter((employees: Array<Employee>) => employees.some(employee => employee === undefined)),
      tap( () => { this.store.dispatch(new LoadEmployees(store.idStore)); })
    ).subscribe();
    return this.store.pipe(select(selectEmployeesByIds(store.employees)));
  }

  public getEmployee(idEmployee: number): Observable<Employee> {

    this.store.pipe(
      take(1),
      select(selectEmployeeById(idEmployee)),
      filter(employee => !employee),
      tap( () => {this.store.dispatch(new LoadEmployee(idEmployee)); })
    ).subscribe();
    return this.store.pipe(select(selectEmployeeById(idEmployee)));
  }
}
