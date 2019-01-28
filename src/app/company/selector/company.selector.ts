import {createFeatureSelector, createSelector, MemoizedSelector, select} from '@ngrx/store';
// import {CompanyState, State} from '../companyReducer';
import {companyAdapter, State} from '../state/company.state';
import {Company} from '../model/company.model';


// export const getIsLoading = (state: State): boolean => state.isLoading;
// export const getError = (state: State): Error => state.error;
//
// export const selectCompanyState = createFeatureSelector<State>('companies');
//
// export const selectAllCompanyItems: (state: object) => Company[] = companyAdapter.getSelectors(selectCompanyState).selectAll;
// // export const selectAllCompanyItems = createSelector(selectCompanyState, (state: State) => state.entities);
// // export const { selectAll: selectAllCompanies } = companyAdapter.getSelectors(selectCompanyState);
//
// export const selectCompanyById = (id: number) =>
//   createSelector(selectAllCompanyItems, (allCompanies: Company[]) => {
//     if (allCompanies) {
//       return allCompanies.find(p => p.idCompany === id);
//     } else {
//       return null;
//     }
//   });
//
// export const selectCompanyError: MemoizedSelector<object, any> = createSelector(
//   selectCompanyState,
//   getError
// );
//
// export const selectCompanyIsLoading: MemoizedSelector<
//   object,
//   boolean
//   > = createSelector(selectCompanyState, getIsLoading);

// export const {
//   selectAll,
//   selectEntities,
//   selectIds,
//   selectTotal
//
// } = companyAdapter.getSelectors();

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectCompanyState: MemoizedSelector<
  object,
  State
  > = createFeatureSelector<State>('companies');

export const selectAllCompanyItems: (
  state: object
) => Company[] = companyAdapter.getSelectors(selectCompanyState).selectAll;

export const selectCompanyById = (id: number) =>
  createSelector(selectAllCompanyItems, (allJokes: Company[]) => {
    if (allJokes) {
      return allJokes.find(p => p.idCompany === id);
    } else {
      return null;
    }
  });

export const selectJokeError: MemoizedSelector<object, any> = createSelector(
  selectCompanyState,
  getError
);

export const selectJokeIsLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(selectCompanyState, getIsLoading);
