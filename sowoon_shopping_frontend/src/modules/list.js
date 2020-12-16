import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as itemAPI from '../lib/api/items';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_ITEMS,
  LIST_ITEMS_SUCCESS,
  LIST_ITEMS_FAILURE,
] = createRequestActionTypes('list/LIST_ITEMS');
const [
  SEARCH_ITEM,
  SEARCH_ITEM_SUCCESS,
  SEARCH_ITEM_FAILURE,
] = createRequestActionTypes('item/SEARCH_ITEM');
const UNLOAD_LIST = 'list/UNLOAD_LIST';

export const listItems = createAction(LIST_ITEMS);
export const searchItem = createAction(SEARCH_ITEM);
export const unloadItems = createAction(UNLOAD_LIST);

const listItemsSaga = createRequestSaga(LIST_ITEMS, itemAPI.listItem);
export function* listSaga() {
  yield takeLatest(LIST_ITEMS, listItemsSaga);
}

const searchItemSaga = createRequestSaga(SEARCH_ITEM, itemAPI.searchItem);
export function* searchSaga() {
  yield takeLatest(SEARCH_ITEM, searchItemSaga);
}

const initialState = {
  items: null,
  error: null,
};

const list = handleActions(
  {
    [LIST_ITEMS_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      items,
    }),
    [LIST_ITEMS_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
    [SEARCH_ITEM_SUCCESS]: (state, { payload: items }) => ({
      ...state,
      items,
    }),
    [SEARCH_ITEM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_LIST]: () => initialState,
  },
  initialState,
);

export default list;
