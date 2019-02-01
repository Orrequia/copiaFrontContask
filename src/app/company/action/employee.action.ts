import {Action} from '@ngrx/store';
import {Employee} from '../model/employee.model';

export enum EmployeeActionTypes {
  LOAD_EMPLOYEES = '[Get many] Employees.',
  LOAD_EMPLOYEES_SUCCESS = '[Get many] Employees. SUCCESS',
  LOAD_EMPLOYEES_FAIL = '[Get many] Employees. FAIL',
  LOAD_EMPLOYEE = '[Get] Employee.',
  LOAD_EMPLOYEE_SUCCESS = '[Get] Employee. SUCCESS',
  LOAD_EMPLOYEE_FAIL = '[Get] Employee. FAIL',
  CREATE_EMPLOYEE = '[Create] Employee.',
  CREATE_EMPLOYEE_SUCCESS = '[Create] Employee. SUCCESS',
  CREATE_EMPLOYEE_FAIL = '[Create] Employee. FAIL',
  UPDATE_EMPLOYEE = '[Update] Employee.',
  UPDATE_EMPLOYEE_SUCCESS = '[Update] Employee. SUCCESS',
  UPDATE_EMPLOYEE_FAIL = '[Update] Employee. FAIL',
  DELETE_EMPLOYEE = '[Delete] Employee.',
  DELETE_EMPLOYEE_SUCCESS = '[Delete] Employee. SUCCESS',
  DELETE_EMPLOYEE_FAIL = '[Delete] Employee. FAIL',
}

export class LoadEmployees implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES;
  constructor(public payload: number) {}
}

export class LoadEmployeesSuccess implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS;

  constructor(public payload: Array<Employee>) {}
}

export class LoadEmployeesFail implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEES_FAIL;

  constructor(public payload: Error) {}
}

export class LoadEmployee implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE;
  constructor(public payload: number) {}
}

export class LoadEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS;

  constructor(public payload: Employee) {}
}

export class LoadEmployeeFail implements Action {
  readonly type = EmployeeActionTypes.LOAD_EMPLOYEE_FAIL;

  constructor(public payload: Error) {}
}

export type EmployeeActionsUnion =
  LoadEmployees | LoadEmployeesSuccess | LoadEmployeesFail |
  LoadEmployee | LoadEmployeeSuccess | LoadEmployeeFail;
