import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CompanyTypeService} from '../service/companytype/company-type.service';
import {
  CompanyTypeActionTypes,
  LoadCompanyType,
  LoadCompanyTypeFail,
  LoadCompanyTypesFail,
  LoadCompanyTypesSuccess,
  LoadCompanyTypeSuccess
} from '../action/company-type.action';
import {CompanyType} from '../model/company-type.model';
import {UriParameters} from '../../core/model/uri-parameters.model';
import {AppComponent} from '../../app.component';

@Injectable()
export class CompanyTypeEffect {

  constructor(private actions$: Actions,
              private companyTypeService: CompanyTypeService) {}

  @Effect()
  loadCompanyTypes$: Observable<Action> = this.actions$.pipe(
    ofType(CompanyTypeActionTypes.LOAD_COMPANYTYPES),
    map((action: LoadCompanyType) => action.payload),
    switchMap(() => this.companyTypeService.get().pipe(
      map(items => items as unknown as Array<CompanyType>),
      map(items => new LoadCompanyTypesSuccess(items, items.length < AppComponent.sizeRequests)),
      catchError(err => of(new LoadCompanyTypesFail(err)))))
  );

  @Effect()
  loadCompanyType$: Observable<Action> = this.actions$.pipe(
    ofType(CompanyTypeActionTypes.LOAD_COMPANYTYPE),
    map((action: LoadCompanyType) => action.payload),
    switchMap(payload => this.companyTypeService.get(new UriParameters(payload)).pipe(
      map(items => new LoadCompanyTypeSuccess(items as unknown as CompanyType),
      catchError(err => of(new LoadCompanyTypeFail(err)))))
    )
  );
}
