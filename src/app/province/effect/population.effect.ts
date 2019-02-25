import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PopulationService} from '../service/population/population.service';
import {
  LoadPopulation,
  LoadPopulationFail,
  LoadPopulations,
  LoadPopulationsFail,
  LoadPopulationsSuccess,
  LoadPopulationSuccess,
  PopulationActionTypes
} from '../action/population.action';
import {Population} from '../model/population.model';
import {UriParameters} from '../../core/model/uri-parameters.model';
import {AppComponent} from '../../app.component';

@Injectable()
export class PopulationEffect {

  constructor(private actions$: Actions,
              private populationService: PopulationService) {}

  @Effect()
  loadPopulations$: Observable<Action> = this.actions$.pipe(
    ofType(PopulationActionTypes.LOAD_POPULATIONS),
    map((action: LoadPopulations) => ({page: action.payload})),
    switchMap((params: {}) => this.populationService.get(new UriParameters(undefined, undefined, params)).pipe(
      map(items => items as unknown as Array<Population>),
      map(items => new LoadPopulationsSuccess(items, items.length < AppComponent.sizeRequests)),
      catchError(err => of(new LoadPopulationsFail(err)))))
  );

  @Effect()
  loadPopulation$: Observable<Action> = this.actions$.pipe(
    ofType(PopulationActionTypes.LOAD_POPULATION),
    map((action: LoadPopulation) => action.payload),
    switchMap(idPopulation => this.populationService.get(new UriParameters(idPopulation)).pipe(
      map(item => new LoadPopulationSuccess(item as unknown as Population)),
      catchError(err => of(new LoadPopulationFail(err))))),
  );
}
