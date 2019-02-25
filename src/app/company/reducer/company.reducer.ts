import {CompanyActionsUnion, CompanyActionTypes} from '../action/company.action';
import {companyAdapter, CompanyState, initialCompanyState} from '../state/company.state';

export function companyReducer(state = initialCompanyState, action: CompanyActionsUnion): CompanyState {
  switch (action.type) {
    case CompanyActionTypes.LOAD_COMPANIES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CompanyActionTypes.LOAD_COMPANIES_SUCCESS:
      return companyAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null,
        allLoaded: action.allLoaded
      });
    case CompanyActionTypes.LOAD_COMPANIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case CompanyActionTypes.SEARCH_COMPANIES:
      return {
        ...state,
        isLoading: true,
        error: null,
        searched: null
      };
    case CompanyActionTypes.SEARCH_COMPANIES_SUCCESS:
      return companyAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null,
        searched: action.payload
      });
    case CompanyActionTypes.SEARCH_COMPANIES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default: return state;
  }
}
