import {createFeatureSelector, createSelector } from '@ngrx/store';

import {CompanyState} from '../state/company.state';
import * as fromCompany from '../state/company.state';
import {Company} from '../model/company.model';

export const selectCompanyState = createFeatureSelector<CompanyState>('companies');

export const selectAllCompanies = createSelector(selectCompanyState, fromCompany.selectAll);
export const selectCompanyById = (id: number) => createSelector(selectCompanyState, (companies: CompanyState) => companies.entities[id]);

export const selectCompaniesSearched = createSelector(selectCompanyState, (companies: CompanyState) => companies.searched);

export const selectCompanyStateError = createSelector(selectCompanyState, companyState => companyState.error);
export const selectCompanyStateIsLoading = createSelector(selectCompanyState, companyState => companyState.isLoading);
export const selectCompanyStateAllLoaded = createSelector(selectCompanyState, companyState => companyState.allLoaded);
