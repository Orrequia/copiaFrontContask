import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  CompanyActionTypes,
  LoadCompaniesFail,
  LoadCompaniesSuccess,
  SearchCompanies,
  SearchCompaniesFail,
  SearchCompaniesSuccess
} from '../action/company.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CompanyService} from '../service/company/company.service';
import {Company} from '../model/company.model';
import {SearchCompanyService} from '../service/company/search-company.service';
import {AppComponent} from '../../app.component';
import {UriParameters} from '../../core/model/uri-parameters.model';

@Injectable()
export class CompanyEffect {

  constructor(private actions$: Actions,
              private companyService: CompanyService,
              private searchCompanyService: SearchCompanyService) {}

  @Effect()
  loadCompanies$: Observable<Action> = this.actions$.pipe(
    ofType(CompanyActionTypes.LOAD_COMPANIES),
    switchMap(() => this.companyService.get().pipe(
      map(items => items as unknown as Array<Company>),
      map(items => new LoadCompaniesSuccess(items, items.length < AppComponent.sizeRequests)),
      catchError(err => of(new LoadCompaniesFail(err)))))
  );

  @Effect()
  searchCompanies$: Observable<Action> = this.actions$.pipe(
    ofType(CompanyActionTypes.SEARCH_COMPANIES),
    switchMap((action: SearchCompanies) =>
      this.searchCompanyService.searchEntries(new UriParameters(undefined, undefined, {freeSearch: action.payload})).pipe(
        map(items => new SearchCompaniesSuccess(items as unknown as Array<Company>)),
        catchError(err => of(new SearchCompaniesFail(err)))))
  );
}
