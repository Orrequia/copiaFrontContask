import {initialEmployeeState, employeeAdapter, EmployeeState} from '../state/employee.state';
import {EmployeeActionsUnion, EmployeeActionTypes} from '../action/employee.action';

export function employeeReducer(state = initialEmployeeState, action: EmployeeActionsUnion): EmployeeState {
  switch (action.type) {
    case EmployeeActionTypes.LOAD_EMPLOYEES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case EmployeeActionTypes.LOAD_EMPLOYEES_SUCCESS:
      return employeeAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    case EmployeeActionTypes.LOAD_EMPLOYEES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case EmployeeActionTypes.LOAD_EMPLOYEE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case EmployeeActionTypes.LOAD_EMPLOYEE_SUCCESS:
      return employeeAdapter.addMany([action.payload], {
        ...state,
        isLoading: false,
        error: null
      });
    case EmployeeActionTypes.LOAD_EMPLOYEE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default: return state;
  }
}
