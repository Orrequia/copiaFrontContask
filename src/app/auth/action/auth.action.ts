import {Action} from '@ngrx/store';
import {Connected} from '../model/connected.model';
import {Credentials} from '../model/credentials.model';

export enum AuthActionTypes {
  LOGIN_AUTH = '[POST] Login authentication.',
  LOGIN_AUTH_SUCCESS = '[POST] Login authentication. SUCCESS',
  LOGOUT_AUTH = '[POST] Logout authentication',
  CHECK_CONNECTION_AUTH = '[GET] Check connection authentication'
}

export class LoginAuth implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTH;

  constructor(public payload: Credentials) {
    console.log('Acción LoginAuth lanzada');
  }
}

export class LoginAuthSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTH_SUCCESS;

  constructor(public payload: Connected) {
    console.log('Acción LoginAuthSuccess lanzada');
  }
}

export class LogoutAuth implements Action {
  readonly type = AuthActionTypes.LOGOUT_AUTH;
}

export class CheckConnectionAuth implements Action {
  readonly type = AuthActionTypes.CHECK_CONNECTION_AUTH;

  constructor(public payload: Connected) {}
}

export type AuthActionsUnion = LoginAuth | LoginAuthSuccess | LogoutAuth | CheckConnectionAuth;
