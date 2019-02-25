import { Action } from '@ngrx/store';
import {Company} from '../model/company.model';
import {Observable} from 'rxjs';

export enum CompanyActionTypes {
  LOAD_COMPANIES = '[Get many] Company.',
  LOAD_COMPANIES_SUCCESS = '[Get many] Company. SUCCESS',
  LOAD_COMPANIES_FAIL = '[Get many] Company. FAIL',
  SEARCH_COMPANIES = '[Search many] Company.',
  SEARCH_COMPANIES_SUCCESS = '[Search many] Company. SUCCESS',
  SEARCH_COMPANIES_FAIL = '[Search many] Company. FAIL',
}

export class LoadCompanies implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES;

  constructor(public payload: number) {}
}

export class LoadCompaniesSuccess implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES_SUCCESS;

  constructor(public payload: Array<Company>, public allLoaded?: boolean) {}
}

export class LoadCompaniesFail implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES_FAIL;

  constructor(public payload: Error) {}
}

export class SearchCompanies implements Action {
  readonly type = CompanyActionTypes.SEARCH_COMPANIES;

  constructor(public payload: string) {}
}

export class SearchCompaniesSuccess implements Action {
  readonly type = CompanyActionTypes.SEARCH_COMPANIES_SUCCESS;

  constructor(public payload: Array<Company>) {}
}

export class SearchCompaniesFail implements Action {
  readonly type = CompanyActionTypes.SEARCH_COMPANIES_FAIL;

  constructor(public payload: Error) {}
}

export type CompanyActionsUnion = LoadCompanies | LoadCompaniesSuccess | LoadCompaniesFail |
  SearchCompanies | SearchCompaniesSuccess | SearchCompaniesFail;
