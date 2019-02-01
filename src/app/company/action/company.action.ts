import { Action } from '@ngrx/store';
import {Company} from '../model/company.model';

export enum CompanyActionTypes {
  LOAD_COMPANIES = '[Get many] Company.',
  LOAD_COMPANIES_SUCCESS = '[Get many] Company. SUCCESS',
  LOAD_COMPANIES_FAIL = '[Get many] Company. FAIL'
}

export class LoadCompanies implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES;
}

export class LoadCompaniesSuccess implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES_SUCCESS;

  constructor(public payload: Array<Company>) {}
}

export class LoadCompaniesFail implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES_FAIL;

  constructor(public payload: Error) {}
}

export type CompanyActionsUnion = LoadCompanies | LoadCompaniesSuccess | LoadCompaniesFail;
