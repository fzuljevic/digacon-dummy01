import { ProductState } from './types';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

// export const fetchProducts: ActionCreator<
// ThunkAction<Promise<Action>, any , void>
// > = () => {
//   return (dispatch: any) => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((products) => dispatch({ type: FETCH_SUCCESS, data: products }))
//       .catch((error) =>
//         dispatch({
//           type: FETCH_ERROR,
//           error: error.toString(),
//         })
//       );
//   };
// };

export type ReduxThunkType<T> = ThunkAction<T, any, null, Action<any>>;
export const fetchProducts = (): ReduxThunkType<void> => async (dispatch) => {
  try {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((products) => dispatch({ type: FETCH_SUCCESS, data: products }))
      .catch((error) =>
        dispatch({
          type: FETCH_ERROR,
          error: error.toString(),
        })
      );
  } catch (error) {
    // empty
  }
};
