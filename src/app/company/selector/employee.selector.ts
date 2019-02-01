import {createFeatureSelector, createSelector} from '@ngrx/store';
import {EmployeeState} from '../state/employee.state';
import * as fromEmployee from '../state/employee.state';
import {StoreState} from '../state/store.state';
import {selectStoreState} from './store.selector';

export const selectEmployeeState = createFeatureSelector<EmployeeState>('employees');

export const selectAllEmployees = createSelector(selectEmployeeState, fromEmployee.selectAll);
export const selectEmployeeById = (id: number) => createSelector(selectEmployeeState, (employees: EmployeeState) => employees.entities[id]);
export const selectEmployeesByIds = (ids: Array<number>) => createSelector(selectEmployeeState, (employees: EmployeeState) => {
  const employeesSearch = [];
  ids.forEach(id => {
    if (!employees.entities[id]) {
      throw new Error('Algún id no existe');
    }
    employeesSearch.push(employees.entities[id]);
  });
  return employeesSearch;
});

export const selectEmployeeStateError = createSelector(selectEmployeeState, employeeState => employeeState.error);
export const selectEmployeeStateIsLoading = createSelector(selectEmployeeState, employeeState => employeeState.isLoading);
