import {createFeatureSelector, createSelector } from '@ngrx/store';

import {CompanyState} from '../state/company.state';
import * as fromCompany from '../state/company.state';

export const selectCompanyState = createFeatureSelector<CompanyState>('companies');

export const selectAllCompanies = createSelector(selectCompanyState, fromCompany.selectAll);
export const selectStoreById = (id: number) => createSelector(selectCompanyState, (companies: CompanyState) => companies.entities[id]);

export const selectStoreStateError = createSelector(selectCompanyState, companyState => companyState.error);
export const selectStoreStateIsLoading = createSelector(selectCompanyState, companyState => companyState.isLoading);
