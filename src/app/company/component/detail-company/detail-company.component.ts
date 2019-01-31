import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Company} from '../../model/company.model';
import {CompanyType} from '../../model/company-type.model';
import {Employee} from '../../model/employee.model';
import {select, Store} from '@ngrx/store';
import * as StoreModel from '../../model/store.model';
import {CompanyTypeService} from '../../service/companytype/company-type.service';
import {EmployeeService} from '../../service/employee/employee.service';
import {LoadStores} from '../../action/store.action';
import {Observable, of} from 'rxjs';
import {selectStoresByIds, selectStoreState} from '../../selector/store.selector';
import {catchError} from 'rxjs/operators';
import {AppState} from '../../../core/reducer/core.reducer';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.css']
})
export class DetailCompanyComponent implements OnInit, OnChanges {

  @Input()
  private company: Company;

  private dispatched = false;
  private companyType: CompanyType;
  private owner: Employee;
  private stores$: Observable<Array<StoreModel.Store>>;
  private storeSelected: StoreModel.Store;

  private nulo = '--';

  constructor(private store$: Store<AppState>,
              private companyTypeService: CompanyTypeService,
              private employeeService: EmployeeService) {
    this.companyType = new CompanyType();
    this.owner = new Employee();
  }

  ngOnInit() {
  }

  ngOnChanges() {

    this.dispatched = false;
    this.getStores();

    this.companyTypeService.get(this.company.idCompanyType).subscribe(companyType => {
      this.companyType = companyType as unknown as CompanyType;
    });
    this.employeeService.get(this.company.idOwner).subscribe(employee => {
      this.owner = employee as unknown as Employee;
    });
  }

  private getStores() {
    this.store$.pipe(select(selectStoreState)).subscribe(stores => {
      if (!this.dispatched) {
        if (!stores.ids[0]) {
          this.dispatched = true;
          this.store$.dispatch(new LoadStores(this.company.idCompany));
        } else {
          this.stores$ = this.getAllStoresWithDispatch();
        }
      } else {
        this.stores$ = this.getAllStores();
      }
      this.setStoreByDefaultSelected();
    });
  }

  private setStoreByDefaultSelected() {
    this.stores$.subscribe(storesGot => {
      this.storeSelected = storesGot[0];
    });
  }

  private getAllStores(): Observable<Array<StoreModel.Store>> {
    return this.store$.pipe(
      select(selectStoresByIds(this.company.stores)),
      catchError(() => of([new StoreModel.Store()])));
  }

  private getAllStoresWithDispatch(): Observable<Array<StoreModel.Store>> {
    return this.store$.pipe(
      select(selectStoresByIds(this.company.stores)),
      catchError(() => {
        this.dispatched = true;
        this.store$.dispatch(new LoadStores(this.company.idCompany));
        return of([new StoreModel.Store()]);
      })
    );
  }

  public selectStore(store: StoreModel.Store) {
    this.storeSelected = store;
  }

}
