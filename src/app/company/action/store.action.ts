import { Action } from '@ngrx/store';
import { Store } from '../model/store.model';

export enum StoreActionTypes {
  LOAD_STORES = '[Get many] Store.',
  LOAD_STORES_SUCCESS = '[Get many] Store. SUCCESS',
  LOAD_STORES_FAIL = '[Get many] Store. FAIL'
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

export type StoreActionsUnion = LoadStores | LoadStoresSuccess | LoadStoresFail;
