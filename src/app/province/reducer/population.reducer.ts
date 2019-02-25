import {initialPopulationState, populationAdapter, PopulationState} from '../state/population.state';
import {PopulationActionsUnion, PopulationActionTypes} from '../action/population.action';

export function populationReducer(state = initialPopulationState, action: PopulationActionsUnion): PopulationState {
  switch (action.type) {
    case PopulationActionTypes.LOAD_POPULATIONS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PopulationActionTypes.LOAD_POPULATIONS_SUCCESS:
      return populationAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null,
        allLoaded: action.allLoaded
      });
    case PopulationActionTypes.LOAD_POPULATIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case PopulationActionTypes.LOAD_POPULATION:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case PopulationActionTypes.LOAD_POPULATION_SUCCESS:
      return populationAdapter.addMany([action.payload], {
        ...state,
        isLoading: false,
        error: null
      });
    case PopulationActionTypes.LOAD_POPULATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default: return state;
  }
}
