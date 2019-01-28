import {Injectable} from '@angular/core';
import {Actions, Effect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {CompanyActionTypes, LoadCompanies, LoadCompaniesSuccess, LoadCompanyFail} from '../action/company.action';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {CompanyService} from '../service/company/company.service';
import {Company} from '../model/company.model';

@Injectable()
export class CompanyEffect {

  constructor(private actions$: Actions,
              private companyService: CompanyService) {}

  @Effect()
  initEffect$: Observable<Action> = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(_ => new LoadCompanies())
  );

  @Effect()
  loadCompanies$: Observable<Action> = this.actions$.pipe(
    ofType(CompanyActionTypes.LOAD_COMPANIES),
    startWith(new LoadCompanies()),
    switchMap(action => this.companyService.get().pipe(
      map(items => new LoadCompaniesSuccess(items as unknown as Array<Company>)),
      catchError(err => of(new LoadCompanyFail(err)))))
  );
}
