import { Action } from '@ngrx/store';
import { Store } from '../model/store.model';

export enum StoreActionTypes {
  LOAD_STORES = '[GET] Load all stores.',
  LOAD_STORES_SUCCESS = '[GET] Load all stores. SUCCESS',
  LOAD_STORES_FAIL = '[GET] Load all stores. FAIL'
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
