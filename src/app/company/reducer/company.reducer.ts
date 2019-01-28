import {CompanyActionsUnion, CompanyActionTypes} from '../action/company.action';
import * as fromCompany from '../state/company.state';

export function companyReducer(state = fromCompany.initialState, action: CompanyActionsUnion): fromCompany.State {
  switch (action.type) {
    case CompanyActionTypes.LOAD_COMPANIES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CompanyActionTypes.LOAD_COMPANIES_SUCCESS:
      return fromCompany.companyAdapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    case CompanyActionTypes.LOAD_COMPANIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
  }
}
