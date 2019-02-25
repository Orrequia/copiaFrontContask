import {Action} from '@ngrx/store';
import {Store} from '../model/store.model';
import {Update} from '@ngrx/entity';

export enum StoreActionTypes {
  LOAD_STORES = '[Get many] Store.',
  LOAD_STORES_SUCCESS = '[Get many] Store. SUCCESS',
  LOAD_STORES_FAIL = '[Get many] Store. FAIL',
  LOAD_CONTRACT_INFO_BY_DONGLE = '[Get many] Contract info by dongle.',
  LOAD_CONTRACT_INFO_BY_DONGLE_SUCCESS = '[Get many] Contract info by dongle. SUCCESS',
  LOAD_CONTRACT_INFO_BY_DONGLE_FAIL = '[Get many] Contract info by dongle. FAIL'
}

export class LoadStores implements Action {
  readonly type = StoreActionTypes.LOAD_STORES;
  constructor(public payload: number) {}
}

export class LoadStoresSuccess implements Action {
  readonly type = StoreActionTypes.LOAD_STORES_SUCCESS;

  constructor(public payload: Array<Store>) {}
}

export class LoadStoresFail implements Action {
  readonly type = StoreActionTypes.LOAD_STORES_FAIL;

  constructor(public payload: Error) {}
}

export class LoadContractInfoByDongle implements Action {
  readonly type = StoreActionTypes.LOAD_CONTRACT_INFO_BY_DONGLE;
  constructor(public payload: {idCompany: number, store: Store}) {}
}

export class LoadContractInfoByDongleSuccess implements Action {
  readonly type = StoreActionTypes.LOAD_CONTRACT_INFO_BY_DONGLE_SUCCESS;

  constructor(public payload: Update<Store>) {}
}

export class LoadContractInfoByDongleFail implements Action {
  readonly type = StoreActionTypes.LOAD_CONTRACT_INFO_BY_DONGLE_FAIL;

  constructor(public payload: Error) {}
}

export type StoreActionsUnion = LoadStores | LoadStoresSuccess | LoadStoresFail |
  LoadContractInfoByDongle | LoadContractInfoByDongleSuccess | LoadContractInfoByDongleFail;
