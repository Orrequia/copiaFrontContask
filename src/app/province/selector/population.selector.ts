import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PopulationState} from '../state/population.state';
import * as fromPopulation from '../state/population.state';

export const selectPopulationState = createFeatureSelector<PopulationState>('populations');

export const selectAllPopulations = createSelector(selectPopulationState, fromPopulation.selectAll);
export const selectPopulationById = (id: number) =>
  createSelector(selectPopulationState, (populations: PopulationState) => populations.entities[id]);

export const selectPopulationStateError = createSelector(selectPopulationState, populationState => populationState.error);
export const selectPopulationStateIsLoading = createSelector(selectPopulationState, populationState => populationState.isLoading);
export const selectPopulationStateAllLoaded = createSelector(selectPopulationState, populationState => populationState.allLoaded);

/*
export const selectPopulationById = (id: number) =>
  createSelector(selectPopulationState, (populations: PopulationState) => {
    console.log(populations.entities[id]);
    if (!populations.entities[id]) {
      new LoadPopulation(id);
    }
    return populations.entities[id];
  });
 */
