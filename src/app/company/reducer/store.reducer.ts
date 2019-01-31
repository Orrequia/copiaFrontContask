import {StoreActionsUnion, StoreActionTypes} from '../action/store.action';
import {initialStoreState, storeAdapter, StoreState} from '../state/store.state';

export function storeReducer(state = initialStoreState, action: StoreActionsUnion): StoreState {
  switch (action.type) {
    case StoreActionTypes.LOAD_STORES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case StoreActionTypes.LOAD_STORES_SUCCESS:
      return storeAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    case StoreActionTypes.LOAD_STORES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default: {
      return state;
    }
  }
}
