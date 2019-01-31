import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoreState} from '../../company/state/store.state';
import {AuthState} from '../state/auth.state';


// export const selectAuthState = state => state.auth;
export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
