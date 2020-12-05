import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as itemsAPI from '../lib/api/items';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'items/INITIALIZE';
const CHANGE_FIELD = 'items/CHANGE_FIELD';
const [
  INPUT_ITEMS,
  INPUT_ITEMS_SUCCESS,
  INPUT_ITEMS_FAILURE,
] = createRequestActionTypes('items/INPUT_ITEMS');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const inputItem = createAction(
  INPUT_ITEMS,
  ({ name, content, price, thumbnail, tags }) => ({
    name,
    content,
    price,
    thumbnail,
    tags,
  }),
);

const inputItemsSaga = createRequestSaga(INPUT_ITEMS, itemsAPI.inputItems);
export function* inputSaga() {
  yield takeLatest(INPUT_ITEMS, inputItemsSaga);
}

const initialState = {
  name: '',
  content: '',
  price: '',
  thumbnail: '',
  tags: [],
  item: '',
  itemError: null,
};

const items = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INPUT_ITEMS]: (state) => ({
      ...state,
      item: '',
      itemError: null,
    }),
    [INPUT_ITEMS_SUCCESS]: (state, { payload: item }) => ({
      ...state,
      item,
    }),
    [INPUT_ITEMS_FAILURE]: (state, { payload: itemError }) => ({
      ...state,
      itemError,
    }),
  },
  initialState,
);

export default items;
