import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges} from '@angular/core';

import {Population} from '../../../../province/model/population.model';
import {Company} from '../../../model/company.model';
import {Observable} from 'rxjs';
import {StoreDataSource} from '../../../datasource/store.data-source';
import {PopulationDataSource} from '../../../../province/datasource/population.data-source';
import {Store} from '../../../model/store.model';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
  styleUrls: ['./detail-store.component.css']
})
export class DetailStoreComponent implements OnChanges {

  @Input() private store: Store;
  @Input() private company: Company;

  private population$: Observable<Population>;

  constructor(private storeDataSource: StoreDataSource,
              private populationDataSource: PopulationDataSource) {}

  ngOnChanges() {
    this.storeDataSource.getContractInfoByDongle(this.company.idCompany, this.store);
    this.population$ = this.populationDataSource.getPopulation(this.store.idPopulation);
    // this.cd.reattach();
    // this.cd.markForCheck();
    // this.cd.detectChanges();
  }
}
