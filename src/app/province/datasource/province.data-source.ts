import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppComponent} from '../../app.component';
import {AppState} from '../../core/reducer/core.reducer';
import {Province} from '../model/province.model';
import {selectAllProvinces, selectProvinceById, selectProvinceState} from '../selector/province.selector';
import {ProvinceState} from '../state/province.state';
import {LoadProvince, LoadProvinces} from '../action/province.action';


@Injectable()
export class ProvinceDataSource {

  private page = 0;
  private size = AppComponent.sizeRequests;

  constructor(private store: Store<AppState>) {}

  public getProvinces(): Observable<Array<Province>> {

    this.store.pipe(
      take(1),
      select(selectProvinceState),
      filter((provinceState: ProvinceState) => !provinceState.ids ||
        (!provinceState.allLoaded && provinceState.ids.length < this.size)),
      tap( () => {
        this.store.dispatch(new LoadProvinces(this.page));
        this.page = this.page + 1;
      })
    ).subscribe();
    return this.store.pipe(select(selectAllProvinces));
  }

  public getProvince(idProvince: number): Observable<Province> {

    this.store.pipe(
      take(1),
      select(selectProvinceById(idProvince)),
      filter(population => !population),
      tap( () => {this.store.dispatch(new LoadProvince(idProvince)); })
    ).subscribe();
    return this.store.pipe(select(selectProvinceById(idProvince)));
  }
}
