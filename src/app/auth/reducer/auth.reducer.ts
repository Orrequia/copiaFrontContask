import {AuthActionsUnion, AuthActionTypes} from '../action/auth.action';
import {AuthState, initialAuthState} from '../state/auth.state';

export function authReducer(state = initialAuthState, action: AuthActionsUnion): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_AUTH:
      return {
        loggedIn: false,
        user: undefined
      };

    case AuthActionTypes.LOGIN_AUTH_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };

    case AuthActionTypes.LOGIN_AUTH_FAIL:
      return {
        loggedIn: false,
        user: undefined
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
