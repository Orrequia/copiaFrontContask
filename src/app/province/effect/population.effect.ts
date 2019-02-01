import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, concatMapTo, map, switchMap} from 'rxjs/operators';
import {PopulationService} from '../service/population/population.service';
import {
  LoadPopulation, LoadPopulationFail,
  LoadPopulationsFail,
  LoadPopulationsSuccess,
  LoadPopulationSuccess,
  PopulationActionTypes
} from '../action/population.action';
import {Population} from '../model/population.model';

@Injectable()
export class PopulationEffect {

  constructor(private actions$: Actions,
              private populationService: PopulationService) {}

  @Effect()
  loadPopulations$: Observable<Action> = this.actions$.pipe(
    ofType(PopulationActionTypes.LOAD_POPULATIONS),
    switchMap(action => this.populationService.get().pipe(
      map(items => new LoadPopulationsSuccess(items as unknown as Array<Population>)),
      catchError(err => of(new LoadPopulationsFail(err)))))
  );

  @Effect()
  loadPopulation$: Observable<Action> = this.actions$.pipe(
    ofType(PopulationActionTypes.LOAD_POPULATION),
    map((action: LoadPopulation) => action.payload),
    switchMap(payload => this.populationService.get(payload).pipe(
      map(item => new LoadPopulationSuccess(item as unknown as Population)),
      catchError(err => of(new LoadPopulationFail(err))))),
  );
}
