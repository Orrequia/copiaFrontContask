import {Action} from '@ngrx/store';
import {Population} from '../model/population.model';

export enum PopulationActionTypes {
  LOAD_POPULATIONS = '[Get many] Populations.',
  LOAD_POPULATIONS_SUCCESS = '[Get many] Populations. SUCCESS',
  LOAD_POPULATIONS_FAIL = '[Get many] Populations. FAIL',
  LOAD_POPULATION = '[Get] Population.',
  LOAD_POPULATION_SUCCESS = '[Get] Population. SUCCESS',
  LOAD_POPULATION_FAIL = '[Get] Population. FAIL',
  CREATE_POPULATION = '[Create] Population.',
  CREATE_POPULATION_SUCCESS = '[Create] Population. SUCCESS',
  CREATE_POPULATION_FAIL = '[Create] Population. FAIL',
  UPDATE_POPULATION = '[Update] Population.',
  UPDATE_POPULATION_SUCCESS = '[Update] Population. SUCCESS',
  UPDATE_POPULATION_FAIL = '[Update] Population. FAIL',
  DELETE_POPULATION = '[Delete] Population.',
  DELETE_POPULATION_SUCCESS = '[Delete] Population. SUCCESS',
  DELETE_POPULATION_FAIL = '[Delete] Population. FAIL',
}

export class LoadPopulations implements Action {
  readonly type = PopulationActionTypes.LOAD_POPULATIONS;

  constructor(public payload: number) {}
}

export class LoadPopulationsSuccess implements Action {
  readonly type = PopulationActionTypes.LOAD_POPULATIONS_SUCCESS;

  constructor(public payload: Array<Population>, public allLoaded?: boolean) {}
}

export class LoadPopulationsFail implements Action {
  readonly type = PopulationActionTypes.LOAD_POPULATIONS_FAIL;

  constructor(public payload: Error) {}
}

export class LoadPopulation implements Action {
  readonly type = PopulationActionTypes.LOAD_POPULATION;
  constructor(public payload: number) {}
}

export class LoadPopulationSuccess implements Action {
  readonly type = PopulationActionTypes.LOAD_POPULATION_SUCCESS;

  constructor(public payload: Population) {}
}

export class LoadPopulationFail implements Action {
  readonly type = PopulationActionTypes.LOAD_POPULATION_FAIL;

  constructor(public payload: Error) {}
}

export type PopulationActionsUnion =
  LoadPopulations | LoadPopulationsSuccess | LoadPopulationsFail |
  LoadPopulation | LoadPopulationSuccess | LoadPopulationFail;
