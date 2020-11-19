import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import items, { inputSaga } from './items';
import loading from './loading';
import item, { readSaga } from './item';

const rootReducer = combineReducers({
  loading,
  items,
  item,
});

export function* rootSaga() {
  yield all([inputSaga(), readSaga()]);
}

export default rootReducer;
