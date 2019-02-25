import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Store} from '../model/store.model';
import {ContractInfoByDongle} from '../model/contract-info-by-dongle.model';

export const storeAdapter: EntityAdapter<Store> = createEntityAdapter<Store>({
  selectId: model => model.idStore,
  sortComparer: (a: Store, b: Store): number =>
    b.name.toString().localeCompare(a.name.toString())
});

export interface StoreState extends EntityState<Store> {
  isLoading?: boolean;
  error?: any;
}

export const initialStoreState: StoreState = storeAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
  }
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = storeAdapter.getSelectors();
