import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Population} from '../model/population.model';

export const populationAdapter: EntityAdapter<Population> = createEntityAdapter<Population>({
  selectId: model => model.idPopulation,
  sortComparer: (a: Population, b: Population): number =>
    b.name.toString().localeCompare(a.name.toString())
});

export interface PopulationState extends EntityState<Population> {
  isLoading?: boolean;
  error?: any;
  allLoaded?: boolean;
}

export const initialPopulationState: PopulationState = populationAdapter.getInitialState(
  {
    isLoading: false,
    error: null,
    allLoaded: false
  }
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = populationAdapter.getSelectors();
