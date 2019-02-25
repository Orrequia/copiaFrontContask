import {initialCompanyTypeState, companyTypeAdapter, CompanyTypeState} from '../state/company-type.state';
import {CompanyTypeActionsUnion, CompanyTypeActionTypes} from '../action/company-type.action';

export function companyTypeReducer(state = initialCompanyTypeState, action: CompanyTypeActionsUnion): CompanyTypeState {
  switch (action.type) {
    case CompanyTypeActionTypes.LOAD_COMPANYTYPES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CompanyTypeActionTypes.LOAD_COMPANYTYPES_SUCCESS:
      return companyTypeAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null,
        allLoaded: action.allLoaded
      });
    case CompanyTypeActionTypes.LOAD_COMPANYTYPES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case CompanyTypeActionTypes.LOAD_COMPANYTYPE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case CompanyTypeActionTypes.LOAD_COMPANYTYPE_SUCCESS:
      return companyTypeAdapter.addMany([action.payload], {
        ...state,
        isLoading: false,
        error: null
      });
    case CompanyTypeActionTypes.LOAD_COMPANYTYPE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default: return state;
  }
}
