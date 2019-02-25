import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Province} from '../model/province.model';

export const provinceAdapter: EntityAdapter<Province> = createEntityAdapter<Province>({
  selectId: model => model.idProvince,
  sortComparer: (a: Province, b: Province): number =>
    b.name.toString().localeCompare(a.name.toString())
});

export interface ProvinceState extends EntityState<Province> {
  isLoading?: boolean;
  error?: any;
  allLoaded?: boolean;
}

export const initialProvinceState: ProvinceState = provinceAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
    allLoaded: false
  }
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = provinceAdapter.getSelectors();
