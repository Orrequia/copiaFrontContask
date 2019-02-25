import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {AppComponent} from '../../app.component';
import {AppState} from '../../core/reducer/core.reducer';
import {selectAllPopulations, selectPopulationById, selectPopulationState} from '../selector/population.selector';
import {PopulationState} from '../state/population.state';
import {LoadPopulation, LoadPopulations} from '../action/population.action';
import {Population} from '../model/population.model';


@Injectable()
export class PopulationDataSource {

  private page = 0;
  private size = AppComponent.sizeRequests;

  constructor(private store: Store<AppState>) {}

  public getPopulations(): Observable<Array<Population>> {

    this.store.pipe(
      take(1),
      select(selectPopulationState),
      filter((populationState: PopulationState) => !populationState.ids ||
        (!populationState.allLoaded && populationState.ids.length < this.size)),
      tap( () => {
        this.store.dispatch(new LoadPopulations(this.page));
        this.page = this.page + 1;
      })
    ).subscribe();
    return this.store.pipe(select(selectAllPopulations));
  }

  public getPopulation(idPopulation: number): Observable<Population> {

    this.store.pipe(
      take(1),
      select(selectPopulationById(idPopulation)),
      filter(population => !population),
      tap( () => {this.store.dispatch(new LoadPopulation(idPopulation)); })
    ).subscribe();
    return this.store.pipe(select(selectPopulationById(idPopulation)));
  }
}
