import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {AuthActionTypes, CheckConnectionAuth, LoginAuth, LoginAuthSuccess} from '../action/auth.action';
import {defer, of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {Connected} from '../model/connected.model';
import {Credentials} from '../model/credentials.model';

@Injectable()
export class AuthEffect {

  constructor(private actions$: Actions,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<LoginAuth>(AuthActionTypes.LOGIN_AUTH),
    map((action: LoginAuth) => action.payload),
    switchMap((action: Credentials) => this.authService.login(action.username, action.password).pipe(
      map((connection: Connected) => new LoginAuthSuccess(connection)),
      catchError(err => {
        console.log(err);
        return of(err);
      })
    ))
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginAuthSuccess>(AuthActionTypes.LOGIN_AUTH_SUCCESS),
    tap(action => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/company');
    })
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT_AUTH),
    switchMap((action: Credentials) => this.authService.logout().pipe(
      tap((request) => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
      }),
      catchError(err => {
        return of(err);
      })
    ))
  );

  @Effect()
  checkConnection$ = this.actions$.pipe(
    ofType(AuthActionTypes.CHECK_CONNECTION_AUTH),
    switchMap((action: Connected) => this.authService.imConnected().pipe(
      map(() => new LoginAuthSuccess(action)),
      catchError(err => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
        return of();
      })
    ))
  );

  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      return of(new CheckConnectionAuth(userData as unknown as Connected));
    }
  });

}
