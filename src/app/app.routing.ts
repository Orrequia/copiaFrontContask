import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './auth/component/login.component';
import {CompanyComponent} from './company/component/company.component';
import {AuthGuard} from './auth/guard/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'company', component: CompanyComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
