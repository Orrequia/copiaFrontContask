import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {CompanyType} from '../model/company-type.model';

export const companyTypeAdapter: EntityAdapter<CompanyType> = createEntityAdapter<CompanyType>({
  selectId: model => model.idCompanyType,
  sortComparer: (a: CompanyType, b: CompanyType): number =>
    b.name.toString().localeCompare(a.name.toString())
});

export interface CompanyTypeState extends EntityState<CompanyType> {
  isLoading?: boolean;
  error?: any;
  allLoaded: boolean;
}

export const initialCompanyTypeState: CompanyTypeState = companyTypeAdapter.getInitialState(
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
} = companyTypeAdapter.getSelectors();
