import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as loginAPI from '../lib/api/login';
import { takeLatest } from 'redux-saga/effects';

const [CART_IN, CART_IN_SUCCESS, CART_IN_FAILURE] = createRequestActionTypes(
  'cart/CART_IN',
);

export const cartIn = createAction(CART_IN, ({ itemId, user }) => ({
  itemId,
  user,
}));

const cartInSaga = createRequestSaga(CART_IN, loginAPI.cartIn);
export function* inSaga() {
  yield takeLatest(CART_IN, cartInSaga);
}

const initialState = {
  cart: null,
  error: null,
};

const cart = handleActions(
  {
    [CART_IN]: (state) => ({
      ...state,
      cart: null,
      error: null,
    }),
    [CART_IN_SUCCESS]: (state, { payload: cart }) => ({ ...state, cart }),
    [CART_IN_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
  },
  initialState,
);

export default cart;
