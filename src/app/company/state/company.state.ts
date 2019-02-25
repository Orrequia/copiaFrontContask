import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Company} from '../model/company.model';

export const companyAdapter: EntityAdapter<Company> = createEntityAdapter<Company>({
  selectId: model => model.idCompany,
  sortComparer: (a: Company, b: Company): number =>
    b.name.toString().localeCompare(a.name.toString())
});

export interface CompanyState extends EntityState<Company> {
  isLoading?: boolean;
  error?: any;
  searched?: Array<Company>;
  allLoaded?: boolean;
}

export const initialCompanyState: CompanyState = companyAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
    searched: null,
    allLoaded: false
  }
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = companyAdapter.getSelectors();
