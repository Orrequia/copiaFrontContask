import {Injectable} from '@angular/core';
import {Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {StoreService} from '../service/store/store.service';
import {LoadStores, LoadStoresFail, LoadStoresSuccess, StoreActionTypes} from '../action/store.action';
import * as StoreModel from '../model/store.model';
import {AppState} from '../../core/reducer/core.reducer';

@Injectable()
export class StoreEffect {

  constructor(private actions$: Actions,
              private storeService: StoreService) {}

  @Effect()
  loadStore$: Observable<Action> = this.actions$.pipe(
    ofType(StoreActionTypes.LOAD_STORES),
    map((action: LoadStores) => action.payload),
    switchMap(action => this.storeService.get(undefined, [action]).pipe(
        map(items => new LoadStoresSuccess(items as unknown as Array<StoreModel.Store>)),
        catchError(err => of(new LoadStoresFail(err)))))
  );
}
