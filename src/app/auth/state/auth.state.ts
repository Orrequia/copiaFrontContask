import {Connected} from '../model/connected.model';

export interface AuthState {
  loggedIn: boolean;
  user: Connected;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};
