import { Action } from '@ngrx/store';
import {Company} from '../model/company.model';

export enum CompanyActionTypes {
  LOAD_COMPANIES = '[GET] Load all companies.',
  LOAD_COMPANIES_SUCCESS = '[GET] Load all companies. SUCCESS',
  LOAD_COMPANIES_FAIL = '[GET] Load all companies. FAIL'
}

export class LoadCompanies implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES;
}

export class LoadCompaniesSuccess implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES_SUCCESS;

  constructor(public payload: Array<Company>) {}
}

export class LoadCompanyFail implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES_FAIL;

  constructor(public payload: Error) {}
}

export type CompanyActionsUnion = LoadCompanies | LoadCompaniesSuccess | LoadCompanyFail;
