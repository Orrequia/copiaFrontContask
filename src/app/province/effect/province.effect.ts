import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ProvinceService} from '../service/province/province.service';
import {
  LoadProvince,
  LoadProvinceFail,
  LoadProvinces,
  LoadProvincesFail,
  LoadProvincesSuccess,
  LoadProvinceSuccess,
  ProvinceActionTypes
} from '../action/province.action';
import {Province} from '../model/province.model';
import {UriParameters} from '../../core/model/uri-parameters.model';
import {AppComponent} from '../../app.component';

@Injectable()
export class ProvinceEffect {

  constructor(private actions$: Actions,
              private provinceService: ProvinceService) {}

  @Effect()
  loadProvinces$: Observable<Action> = this.actions$.pipe(
    ofType(ProvinceActionTypes.LOAD_PROVINCES),
    map((action: LoadProvinces) => ({page: action.payload})),
    switchMap((params: {}) => this.provinceService.get(new UriParameters(undefined, undefined, params)).pipe(
      map(items => items as unknown as Array<Province>),
      map(items => new LoadProvincesSuccess(items, items.length < AppComponent.sizeRequests)),
      catchError(err => of(new LoadProvincesFail(err)))))
  );

  @Effect()
  loadProvince$: Observable<Action> = this.actions$.pipe(
    ofType(ProvinceActionTypes.LOAD_PROVINCE),
    map((action: LoadProvince) => action.payload),
    switchMap((idProvince: number) => this.provinceService.get(new UriParameters(idProvince)).pipe(
      map(item => new LoadProvinceSuccess(item as unknown as Province)),
      catchError(err => of(new LoadProvinceFail(err)))))
  );
}
