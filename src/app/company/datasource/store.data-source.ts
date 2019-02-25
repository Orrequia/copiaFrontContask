import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../core/reducer/core.reducer';
import {Observable} from 'rxjs';
import {Company} from '../model/company.model';
import * as StoreModel from '../model/store.model';
import {filter, take, tap} from 'rxjs/operators';
import {selectStoresByIds, selectStoreStateIsLoading} from '../selector/store.selector';
import {LoadContractInfoByDongle, LoadStores} from '../action/store.action';
import {selectAllCompanies} from '../selector/company.selector';

@Injectable()
export class StoreDataSource {

  constructor(private store: Store<AppState>) {}

  public getStores(company: Company): Observable<Array<StoreModel.Store>> {
    this.store.pipe(
      take(1),
      select(selectStoresByIds(company.stores)),
      filter((stores) => stores.some(store => !store)),
      tap( () => {
          this.store.dispatch(new LoadStores(company.idCompany));
      })
    ).subscribe();

    return this.store.pipe(select(selectStoresByIds(company.stores)));
  }

  public getContractInfoByDongle(idCompany: number, store: StoreModel.Store) {
    this.store.pipe(
      take(1),
      filter(() => !store.contractInfoByDongles),
      tap( () => {
          this.store.dispatch(new LoadContractInfoByDongle({idCompany, store}));
      })
    ).subscribe();
    return this.store.pipe(select(selectAllCompanies));
  }

  public getIsLoading() {
    return this.store.pipe(select(selectStoreStateIsLoading));
  }
}
