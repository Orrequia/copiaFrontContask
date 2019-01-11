
import { AuthService } from '../service/auth/auth.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
        return false;
    }
}
