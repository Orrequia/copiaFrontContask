import {AuthActionsUnion, AuthActionTypes} from '../action/auth.action';
import {AuthState, initialAuthState} from '../state/auth.state';

export function authReducer(state = initialAuthState, action: AuthActionsUnion): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_AUTH:
      console.log('Reducer auth login lanzado');
      return {
        loggedIn: false,
        user: undefined
      };

    case AuthActionTypes.LOGIN_AUTH_SUCCESS:
      console.log('Reducer auth login success lanzado');
      return {
        loggedIn: true,
        user: action.payload
      };

    case AuthActionTypes.LOGOUT_AUTH:
      return {
        loggedIn: false,
        user: undefined
      };

    case AuthActionTypes.CHECK_CONNECTION_AUTH:
      return {
        loggedIn: true,
        user: action.payload
      };

    default:
      return state;
  }
}
