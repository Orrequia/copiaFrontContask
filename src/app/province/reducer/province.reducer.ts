import {initialProvinceState, provinceAdapter, ProvinceState} from '../state/province.state';
import {ProvinceActionsUnion, ProvinceActionTypes} from '../action/province.action';

export function provinceReducer(state = initialProvinceState, action: ProvinceActionsUnion): ProvinceState {
  switch (action.type) {
    case ProvinceActionTypes.LOAD_PROVINCES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ProvinceActionTypes.LOAD_PROVINCES_SUCCESS:
      return provinceAdapter.addMany(action.payload, {
        ...state,
        isLoading: false,
        error: null,
        allLoaded: action.allLoaded
      });
    case ProvinceActionTypes.LOAD_PROVINCES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case ProvinceActionTypes.LOAD_PROVINCE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ProvinceActionTypes.LOAD_PROVINCE_SUCCESS:
      return provinceAdapter.addMany([action.payload], {
        ...state,
        isLoading: false,
        error: null
      });
    case ProvinceActionTypes.LOAD_PROVINCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default: return state;
  }
}
