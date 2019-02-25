import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {StoreState} from '../state/store.state';
import * as fromStore from '../state/store.state';

export const selectStoreState = createFeatureSelector<StoreState>('stores');

// export const selectExistStore = createSelector(selectStoreState, exist => exist !== undefined);

export const selectAllStores = createSelector(selectStoreState, fromStore.selectAll);
export const selectStoreById = (id: number) => createSelector(selectStoreState, (stores: StoreState) => stores.entities[id]);
export const selectStoresByIds = (ids: Array<number>) => createSelector(selectStoreState, (stores: StoreState) => {
  const storesSearch = [];
  ids.forEach(id => storesSearch.push(stores.entities[id]));
  return storesSearch;
});

export const selectStoreStateError = createSelector(selectStoreState, storeState => storeState.error);
export const selectStoreStateIsLoading = createSelector(selectStoreState, storeState => storeState.isLoading);
