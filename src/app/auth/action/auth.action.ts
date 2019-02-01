import {Action} from '@ngrx/store';
import {Connected} from '../model/connected.model';
import {Credentials} from '../model/credentials.model';

export enum AuthActionTypes {
  LOGIN_AUTH = '[Login] Authentication.',
  LOGIN_AUTH_SUCCESS = '[Login] Authentication. SUCCESS',
  LOGIN_AUTH_FAIL = '[Login] Authentication. FAIL',
  LOGOUT_AUTH = '[Logout] Authentication',
  CHECK_CONNECTION_AUTH = '[Check connection] Authentication'
}

export class LoginAuth implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTH;

  constructor(public payload: Credentials) {}
}

export class LoginAuthSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTH_SUCCESS;

  constructor(public payload: Connected) {}
}

export class LoginAuthFail implements Action {
  readonly type = AuthActionTypes.LOGIN_AUTH_FAIL;
}

export class LogoutAuth implements Action {
  readonly type = AuthActionTypes.LOGOUT_AUTH;
}

export class CheckConnectionAuth implements Action {
  readonly type = AuthActionTypes.CHECK_CONNECTION_AUTH;

  constructor(public payload: Connected) {}
}

export type AuthActionsUnion = LoginAuth | LoginAuthSuccess | LogoutAuth | CheckConnectionAuth | LoginAuthFail;
