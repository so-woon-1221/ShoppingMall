import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import items, { inputSaga } from './items';
import loading from './loading';
import item, { readSaga } from './item';
import list, { listSaga } from './list';

const rootReducer = combineReducers({
  loading,
  items,
  item,
  list,
});

export function* rootSaga() {
  yield all([inputSaga(), readSaga(), listSaga()]);
}

export default rootReducer;
