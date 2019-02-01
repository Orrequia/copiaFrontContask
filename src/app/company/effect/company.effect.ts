import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {CompanyActionTypes, LoadCompaniesSuccess, LoadCompaniesFail} from '../action/company.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CompanyService} from '../service/company/company.service';
import {Company} from '../model/company.model';

@Injectable()
export class CompanyEffect {

  constructor(private actions$: Actions,
              private companyService: CompanyService) {}

  @Effect()
  loadCompanies$: Observable<Action> = this.actions$.pipe(
    ofType(CompanyActionTypes.LOAD_COMPANIES),
    switchMap(action => this.companyService.get().pipe(
      map(items => new LoadCompaniesSuccess(items as unknown as Array<Company>)),
      catchError(err => of(new LoadCompaniesFail(err)))))
  );
}
