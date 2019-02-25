import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProvinceState} from '../../province/state/province.state';
import * as fromProvince from '../../province/state/province.state';
import {selectPopulationState} from './population.selector';

export const selectProvinceState = createFeatureSelector<ProvinceState>('provinces');

export const selectAllProvinces = createSelector(selectProvinceState, fromProvince.selectAll);
export const selectProvinceById = (id: number) => createSelector(selectProvinceState, (provinces: ProvinceState) => provinces.entities[id]);

export const selectProvinceStateError = createSelector(selectProvinceState, provinceState => provinceState.error);
export const selectProvinceStateIsLoading = createSelector(selectProvinceState, provinceState => provinceState.isLoading);
export const selectProvinceStateAllLoaded = createSelector(selectProvinceState, provinceState => provinceState.allLoaded);
