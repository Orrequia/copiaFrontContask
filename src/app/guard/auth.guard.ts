
import { AuthService } from '../service/auth/auth.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.auth.isLoggedIn.subscribe(value => {
          if (value === false) {
            this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
          }
        });
        return true;
    }
}
