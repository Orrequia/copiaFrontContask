import {Action} from '@ngrx/store';
import {CompanyType} from '../model/company-type.model';

export enum CompanyTypeActionTypes {
  LOAD_COMPANYTYPES = '[Get many] CompanyTypes.',
  LOAD_COMPANYTYPES_SUCCESS = '[Get many] CompanyTypes. SUCCESS',
  LOAD_COMPANYTYPES_FAIL = '[Get many] CompanyTypes. FAIL',
  LOAD_COMPANYTYPE = '[Get] CompanyType.',
  LOAD_COMPANYTYPE_SUCCESS = '[Get] CompanyType. SUCCESS',
  LOAD_COMPANYTYPE_FAIL = '[Get] CompanyType. FAIL',
  CREATE_COMPANYTYPE = '[Create] CompanyType.',
  CREATE_COMPANYTYPE_SUCCESS = '[Create] CompanyType. SUCCESS',
  CREATE_COMPANYTYPE_FAIL = '[Create] CompanyType. FAIL',
  UPDATE_COMPANYTYPE = '[Update] CompanyType.',
  UPDATE_COMPANYTYPE_SUCCESS = '[Update] CompanyType. SUCCESS',
  UPDATE_COMPANYTYPE_FAIL = '[Update] CompanyType. FAIL',
  DELETE_COMPANYTYPE = '[Delete] CompanyType.',
  DELETE_COMPANYTYPE_SUCCESS = '[Delete] CompanyType. SUCCESS',
  DELETE_COMPANYTYPE_FAIL = '[Delete] CompanyType. FAIL',
}

export class LoadCompanyTypes implements Action {
  readonly type = CompanyTypeActionTypes.LOAD_COMPANYTYPES;
  constructor(public payload: number) {}
}

export class LoadCompanyTypesSuccess implements Action {
  readonly type = CompanyTypeActionTypes.LOAD_COMPANYTYPES_SUCCESS;

  constructor(public payload: Array<CompanyType>, public allLoaded?: boolean) {}
}

export class LoadCompanyTypesFail implements Action {
  readonly type = CompanyTypeActionTypes.LOAD_COMPANYTYPES_FAIL;

  constructor(public payload: Error) {}
}

export class LoadCompanyType implements Action {
  readonly type = CompanyTypeActionTypes.LOAD_COMPANYTYPE;
  constructor(public payload: number) {}
}

export class LoadCompanyTypeSuccess implements Action {
  readonly type = CompanyTypeActionTypes.LOAD_COMPANYTYPE_SUCCESS;

  constructor(public payload: CompanyType) {}
}

export class LoadCompanyTypeFail implements Action {
  readonly type = CompanyTypeActionTypes.LOAD_COMPANYTYPE_FAIL;

  constructor(public payload: Error) {}
}

export type CompanyTypeActionsUnion =
  LoadCompanyTypes | LoadCompanyTypesSuccess | LoadCompanyTypesFail |
  LoadCompanyType | LoadCompanyTypeSuccess | LoadCompanyTypeFail;
