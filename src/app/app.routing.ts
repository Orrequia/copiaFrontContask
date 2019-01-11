import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CompanyComponent } from './component/company/company.component';
import { LoginComponent } from './component/login/login.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'company', component: CompanyComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
