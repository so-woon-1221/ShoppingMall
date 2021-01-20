import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as loginAPI from '../lib/api/login';
import { takeLatest } from 'redux-saga/effects';

const [CART_IN, CART_IN_SUCCESS, CART_IN_FAILURE] = createRequestActionTypes(
  'cart/CART_IN',
);
const [GET_CART, GET_CART_SUCCESS, GET_CART_FAILURE] = createRequestActionTypes(
  'cart/GET_CART',
);

export const cartIn = createAction(CART_IN, ({ itemId, user }) => ({
  itemId,
  user,
}));

export const getCart = createAction(GET_CART, (user) => user);

const cartInSaga = createRequestSaga(CART_IN, loginAPI.cartIn);
export function* inSaga() {
  yield takeLatest(CART_IN, cartInSaga);
}
const getCartSaga = createRequestSaga(GET_CART, loginAPI.getCart);
export function* getSaga() {
  yield takeLatest(GET_CART, getCartSaga);
}

const initialState = {
  cart: null,
  items: null,
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
    [GET_CART]: (state) => ({ ...state, items: null, error: null }),
    [GET_CART_SUCCESS]: (state, { payload: items }) => ({ ...state, items }),
    [GET_CART_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
  },
  initialState,
);

export default cart;
