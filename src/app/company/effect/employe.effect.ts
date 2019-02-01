import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EmployeeService} from '../service/employee/employee.service';
import {
  LoadEmployee,
  LoadEmployeeFail,
  LoadEmployeesFail,
  LoadEmployeesSuccess,
  LoadEmployeeSuccess,
  EmployeeActionTypes
} from '../action/employee.action';
import {Employee} from '../model/employee.model';

@Injectable()
export class EmployeeEffect {

  constructor(private actions$: Actions,
              private employeeService: EmployeeService) {}

  @Effect()
  loadEmployees$: Observable<Action> = this.actions$.pipe(
    ofType(EmployeeActionTypes.LOAD_EMPLOYEES),
    map((action: LoadEmployee) => action.payload ? {store: action.payload} : action.payload),
    switchMap((payload: {}) => this.employeeService.get(undefined, undefined, payload).pipe(
      map(items => new LoadEmployeesSuccess(items as unknown as Array<Employee>)),
      catchError(err => of(new LoadEmployeesFail(err)))))
  );

  @Effect()
  loadEmployee$: Observable<Action> = this.actions$.pipe(
    ofType(EmployeeActionTypes.LOAD_EMPLOYEE),
    map((action: LoadEmployee) => action.payload),
    switchMap(payload => this.employeeService.get(payload).pipe(
      map(item => new LoadEmployeeSuccess(item as unknown as Employee)),
      catchError(err => of(new LoadEmployeeFail(err)))))
  );
}
