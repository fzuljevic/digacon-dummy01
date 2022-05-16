import { Reducer } from 'redux';
import { initialState } from './actions';
import { ActionTypes, ProductState } from './types';

export const rootReducer: Reducer<ProductState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS: {
      return { ...state, products: action.data };
    }
    case ActionTypes.FETCH_ERROR: {
      return { ...state, error: action.error };
    }
    default: {
      return state;
    }
  }
};
