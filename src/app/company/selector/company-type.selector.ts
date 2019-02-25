import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CompanyTypeState} from '../state/company-type.state';
import * as fromCompanyType from '../state/company-type.state';

export const selectCompanyTypeState = createFeatureSelector<CompanyTypeState>('companyTypes');

export const selectAllCompanyTypes = createSelector(selectCompanyTypeState, fromCompanyType.selectAll);
export const selectCompanyTypeById = (id: number) =>
  createSelector(selectCompanyTypeState, (companyTypes: CompanyTypeState) => companyTypes.entities[id]);

export const selectCompanyTypeStateError = createSelector(selectCompanyTypeState, companyTypeState => companyTypeState.error);
export const selectCompanyTypeStateIsLoading = createSelector(selectCompanyTypeState, companyTypeState => companyTypeState.isLoading);
export const selectCompanyTypeStateAllLoaded = createSelector(selectCompanyTypeState, companyTypeState => companyTypeState.allLoaded);
