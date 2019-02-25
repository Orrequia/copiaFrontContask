import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../core/reducer/core.reducer';
import {Observable} from 'rxjs';
import {Company} from '../model/company.model';
import {selectAllCompanies, selectCompaniesSearched, selectCompanyState} from '../selector/company.selector';
import {filter, take, tap} from 'rxjs/operators';
import {CompanyState} from '../state/company.state';
import {LoadCompanies, SearchCompanies} from '../action/company.action';
import {AppComponent} from '../../app.component';

@Injectable()
export class CompanyDataSource {

  private page = 0;
  private size = AppComponent.sizeRequests;

  constructor(private store: Store<AppState>) {}

  public getCompanies(): Observable<Array<Company>> {

    this.store.pipe(
      take(1),
      select(selectCompanyState),
      filter((companiesState: CompanyState) => !companiesState.ids ||
        (!companiesState.allLoaded && companiesState.ids.length < this.size)),
      tap( () => {
        this.store.dispatch(new LoadCompanies(this.page));
        this.page = this.page + 1;
      })
    ).subscribe();
    return this.store.pipe(select(selectAllCompanies));
  }

  public searchCompanies(query): Observable<Array<Company>> {
    if (query.length === 0) {
      return this.store.pipe(select(selectAllCompanies));
    } else {
      this.store.dispatch(new SearchCompanies(query));
      return this.store.pipe(select(selectCompaniesSearched));
    }
  }

  // loadCompanies() {
  //
  // }
}
