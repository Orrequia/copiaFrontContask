import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {StoreService} from '../service/store/store.service';
import {
  LoadContractInfoByDongle,
  LoadContractInfoByDongleFail,
  LoadContractInfoByDongleSuccess,
  LoadStores,
  LoadStoresFail,
  LoadStoresSuccess,
  StoreActionTypes
} from '../action/store.action';
import * as StoreModel from '../model/store.model';
import {UriParameters} from '../../core/model/uri-parameters.model';
import {ContractInfoByDongleService} from '../service/contractinfobydongle/contract-info-by-dongle.service';
import {ContractInfoByDongle} from '../model/contract-info-by-dongle.model';

@Injectable()
export class StoreEffect {

  constructor(private actions$: Actions,
              private storeService: StoreService,
              private contractInfoByDongleService: ContractInfoByDongleService) {
  }

  @Effect()
  loadStores$: Observable<Action> = this.actions$.pipe(
    ofType(StoreActionTypes.LOAD_STORES),
    map((action: LoadStores) => action.payload),
    switchMap((idCompany: number) => this.storeService.get(new UriParameters(undefined, [idCompany])).pipe(
      map(items => items as unknown as Array<StoreModel.Store>),
      map(items => new LoadStoresSuccess(items),
        catchError(err => of(new LoadStoresFail(err))))))
  );

  @Effect()
  loadContractInfoByDongle$: Observable<Action> = this.actions$.pipe(
    ofType(StoreActionTypes.LOAD_CONTRACT_INFO_BY_DONGLE),
    map((action: LoadContractInfoByDongle) => action.payload),
    switchMap((ids: { idCompany: number, store: StoreModel.Store }) =>
              this.contractInfoByDongleService.get(new UriParameters(undefined, [ids.idCompany, ids.store.idStore])).pipe(
      map(items => items as unknown as Array<ContractInfoByDongle>),
      map(items => {
        ids.store.contractInfoByDongles = items;
        return ids.store;
      }),
      map((store: StoreModel.Store) => new LoadContractInfoByDongleSuccess({id: store.idStore, changes: store})))),
      catchError(err => of(new LoadContractInfoByDongleFail(err)))
  );
}
