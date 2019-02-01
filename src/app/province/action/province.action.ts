import {Action} from '@ngrx/store';
import {Province} from '../model/province.model';

export enum ProvinceActionTypes {
  LOAD_PROVINCES = '[Get many] Provinces.',
  LOAD_PROVINCES_SUCCESS = '[Get many] Provinces. SUCCESS',
  LOAD_PROVINCES_FAIL = '[Get many] Provinces. FAIL',
  LOAD_PROVINCE = '[Get] Province.',
  LOAD_PROVINCE_SUCCESS = '[Get] Province. SUCCESS',
  LOAD_PROVINCE_FAIL = '[Get] Province. FAIL',
  CREATE_PROVINCE = '[Create] Province.',
  CREATE_PROVINCE_SUCCESS = '[Create] Province. SUCCESS',
  CREATE_PROVINCE_FAIL = '[Create] Province. FAIL',
  UPDATE_PROVINCE = '[Update] Province.',
  UPDATE_PROVINCE_SUCCESS = '[Update] Province. SUCCESS',
  UPDATE_PROVINCE_FAIL = '[Update] Province. FAIL',
  DELETE_PROVINCE = '[Delete] Province.',
  DELETE_PROVINCE_SUCCESS = '[Delete] Province. SUCCESS',
  DELETE_PROVINCE_FAIL = '[Delete] Province. FAIL',
}

export class LoadProvinces implements Action {
  readonly type = ProvinceActionTypes.LOAD_PROVINCES;
  constructor(public payload: number) {}
}

export class LoadProvincesSuccess implements Action {
  readonly type = ProvinceActionTypes.LOAD_PROVINCES_SUCCESS;

  constructor(public payload: Array<Province>) {}
}

export class LoadProvincesFail implements Action {
  readonly type = ProvinceActionTypes.LOAD_PROVINCES_FAIL;

  constructor(public payload: Error) {}
}

export class LoadProvince implements Action {
  readonly type = ProvinceActionTypes.LOAD_PROVINCE;
  constructor(public payload: number) {}
}

export class LoadProvinceSuccess implements Action {
  readonly type = ProvinceActionTypes.LOAD_PROVINCE_SUCCESS;

  constructor(public payload: Province) {}
}

export class LoadProvinceFail implements Action {
  readonly type = ProvinceActionTypes.LOAD_PROVINCE_FAIL;

  constructor(public payload: Error) {}
}

export type ProvinceActionsUnion =
  LoadProvinces | LoadProvincesSuccess | LoadProvincesFail |
  LoadProvince | LoadProvinceSuccess | LoadProvinceFail;
