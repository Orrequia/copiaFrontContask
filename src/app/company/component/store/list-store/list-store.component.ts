import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../../../model/company.model';
import {StoreDataSource} from '../../../datasource/store.data-source';
import {Store} from '../../../model/store.model';
import {LogoutAuth} from '../../../../auth/action/auth.action';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListStoreComponent implements OnChanges {

  @Input()
  private company: Company;

  private stores$: Observable<Array<Store>>;
  private isLoading: Observable<boolean>;
  storeSelected: Store;
  private lastEvent: MouseEvent;

  private initCreateStore = false;

  constructor(private storeDataSource: StoreDataSource, private cd: ChangeDetectorRef) {
    this.isLoading = storeDataSource.getIsLoading();
  }

  ngOnChanges() {
    this.lastEvent = undefined;
    this.storeSelected = undefined;
    this.initCreateStore = false;
    this.stores$ = this.storeDataSource.getStores(this.company);
  }

  public selectStore(event: MouseEvent, store: Store) {
    this.storeSelected = store;
    this.lastEvent = event;
    this.cd.detectChanges();
  }

  public checkActive(store: Store, tagA: Element, i: number) {
    let cad = '';
    if (this.lastEvent) {
      if (tagA.innerHTML === this.lastEvent.srcElement.innerHTML) {
        cad = 'active';
      }
    } else if (i === 0) {
      if (!this.storeSelected) {
        this.storeSelected = store;
        this.cd.detectChanges();
      }
      cad = 'active';
    }
    return cad;
  }

  public activeCreateStore() {
    this.initCreateStore = true;
  }
}
