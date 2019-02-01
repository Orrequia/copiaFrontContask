import {Component, Input, OnChanges} from '@angular/core';

import * as StoreModel from '../../../model/store.model';
import {Population} from '../../../../province/model/population.model';
import {Province} from '../../../../province/model/province.model';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Employee} from '../../../model/employee.model';
import {Company} from '../../../model/company.model';
import {ContractService} from '../../../../service/contract/contract.service';
import {Contract} from '../../../../model/contract.model';
import {AppState} from '../../../../core/reducer/core.reducer';
import {ActionsSubject, Store} from '@ngrx/store';
import {selectPopulationById} from '../../../../province/selector/population.selector';
import {LoadPopulation, LoadPopulationSuccess, PopulationActionTypes} from '../../../../province/action/population.action';
import {Observable} from 'rxjs';
import {selectProvinceById, selectProvinceStateIsLoading} from '../../../../province/selector/province.selector';
import {LoadProvince} from '../../../../province/action/province.action';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
  styleUrls: ['./detail-store.component.css']
})
export class DetailStoreComponent implements OnChanges {

  @Input()
  private store: StoreModel.Store;
  @Input()
  private company: Company;

  private dispatchedPopulation = false;
  private dispatchedProvince = false;
  private population$: Observable<Population>;
  private loadingPopulation$: Observable<boolean>;
  private province$: Observable<Province>;
  private employees: Array<Employee>;
  private contracts: Array<Contract>;

  constructor(private employeeService: EmployeeService,
              private contractService: ContractService,
              private store$: Store<AppState>,
              private actionsSubject$: ActionsSubject) {
    this.employees = new Array<Employee>();
    this.contracts = new Array<Contract>();
  }

  ngOnChanges() {

    this.dispatchedPopulation = false;
    this.dispatchedProvince = false;

    this.getPopulation();
    this.population$ = this.store$.select(selectPopulationById(this.store.idPopulation));

    this.loadingPopulation$ = this.store$.select(selectProvinceStateIsLoading);

    this.actionsSubject$.pipe(
      filter((action) => action.type === PopulationActionTypes.LOAD_POPULATION_SUCCESS)
    ).subscribe((action: LoadPopulationSuccess) => {
      this.getProvince(action.payload.idProvince);
      this.province$ = this.store$.select(selectProvinceById(action.payload.idProvince));
    });
  }

  private getPopulation() {
    this.store$.select(selectPopulationById(this.store.idPopulation)).pipe(
    ).subscribe(population => {
      if (!population && !this.dispatchedPopulation) {
        this.dispatchedPopulation = true;
        this.store$.dispatch(new LoadPopulation(this.store.idPopulation));
      }
    });
  }

  private getProvince(idProvince: number) {
    this.store$.select(selectProvinceById(idProvince)).subscribe(provinceGot => {
      if (!provinceGot && !this.dispatchedProvince) {
        this.dispatchedProvince = true;
        this.store$.dispatch(new LoadProvince(idProvince));
      }
    });
  }
}
