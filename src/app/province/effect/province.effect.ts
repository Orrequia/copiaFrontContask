import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ProvinceService} from '../service/province/province.service';
import {
  LoadProvince,
  LoadProvinceFail,
  LoadProvincesFail,
  LoadProvincesSuccess,
  LoadProvinceSuccess,
  ProvinceActionTypes
} from '../action/province.action';
import {Province} from '../model/province.model';

@Injectable()
export class ProvinceEffect {

  constructor(private actions$: Actions,
              private provinceService: ProvinceService) {}

  @Effect()
  loadProvinces$: Observable<Action> = this.actions$.pipe(
    ofType(ProvinceActionTypes.LOAD_PROVINCES),
    switchMap(action => this.provinceService.get().pipe(
      map(items => new LoadProvincesSuccess(items as unknown as Array<Province>)),
      catchError(err => of(new LoadProvincesFail(err)))))
  );

  @Effect()
  loadProvince$: Observable<Action> = this.actions$.pipe(
    ofType(ProvinceActionTypes.LOAD_PROVINCE),
    map((action: LoadProvince) => action.payload),
    switchMap(payload => this.provinceService.get(payload).pipe(
      map(item => new LoadProvinceSuccess(item as unknown as Province)),
      catchError(err => of(new LoadProvinceFail(err)))))
  );
}
