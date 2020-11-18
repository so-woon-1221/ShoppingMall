import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import items, { inputSaga } from './items';
import loading from './loading';

const rootReducer = combineReducers({
  loading,
  items,
});

export function* rootSaga() {
  yield all([inputSaga()]);
}

export default rootReducer;
