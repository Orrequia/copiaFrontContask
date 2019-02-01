import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Employee} from '../model/employee.model';

export const employeeAdapter: EntityAdapter<Employee> = createEntityAdapter<Employee>({
  selectId: model => model.idEmployee,
  sortComparer: (a: Employee, b: Employee): number =>
    b.name.toString().localeCompare(a.name.toString())
});

export interface EmployeeState extends EntityState<Employee> {
  isLoading?: boolean;
  error?: any;
}

export const initialEmployeeState: EmployeeState = employeeAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = employeeAdapter.getSelectors();
