import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppComponent} from '../../app.component';
import {AppState} from '../../core/reducer/core.reducer';
import {selectAllCompanies} from '../selector/company.selector';
import {CompanyType} from '../model/company-type.model';
import {selectCompanyTypeById, selectCompanyTypeState} from '../selector/company-type.selector';
import {CompanyTypeState} from '../state/company-type.state';
import {LoadCompanyType, LoadCompanyTypes} from '../action/company-type.action';


@Injectable()
export class CompanyTypeDataSource {

  private page = 0;
  private size = AppComponent.sizeRequests;

  constructor(private store: Store<AppState>) {}

  public getCompanyTypes(): Observable<Array<CompanyType>> {

    this.store.pipe(
      take(1),
      select(selectCompanyTypeState),
      filter((companyTypeState: CompanyTypeState) => !companyTypeState.ids ||
        (!companyTypeState.allLoaded && companyTypeState.ids.length < this.size)),
      tap( () => {
        this.store.dispatch(new LoadCompanyTypes(this.page));
        this.page = this.page + 1;
      })
    ).subscribe();
    return this.store.pipe(select(selectAllCompanies));
  }

  public getCompanyType(idCompanyType: number): Observable<CompanyType> {

    this.store.pipe(
      take(1),
      select(selectCompanyTypeById(idCompanyType)),
      filter(companyType => !companyType),
      tap( () => {this.store.dispatch(new LoadCompanyType(idCompanyType)); })
    ).subscribe();
    return this.store.pipe(select(selectCompanyTypeById(idCompanyType)));
  }
}
