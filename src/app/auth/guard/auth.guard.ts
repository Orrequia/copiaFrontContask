
import { AuthService } from '../service/auth.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../core/reducer/core.reducer';
import {isLoggedIn} from '../selector/auth.selector';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AppState>, private router: Router) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.store.select(isLoggedIn).subscribe( value => {
        // this.auth.isLoggedIn.subscribe(value => {
          if (value === false) {
            this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
          }
        });
        return true;
    }
}
