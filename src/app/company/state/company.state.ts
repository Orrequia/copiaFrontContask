import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Company} from '../model/company.model';

// export const companyAdapter: EntityAdapter<Company> = createEntityAdapter<Company>({
//   selectId: model => model.idCompany,
//   sortComparer: (a: Company, b: Company): number =>
//     b.name.localeCompare(a.name)
// });
//
// export interface State extends EntityState<Company> {
//   isLoading?: boolean;
//   error?: Error;
// }
//
// export const initialState: State = companyAdapter.getInitialState({
//   isLoading: false,
//   error: null
// });

export const companyAdapter: EntityAdapter<
  Company
  > = createEntityAdapter<Company>({
  selectId: model => model.idCompany,
  sortComparer: (a: Company, b: Company): number =>
    b.name.toString().localeCompare(a.name.toString())
});

export interface State extends EntityState<Company> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = companyAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);

// export const {
//   selectAll,
//   selectEntities,
//   selectIds,
//   selectTotal
//
// } = companyAdapter.getSelectors();
