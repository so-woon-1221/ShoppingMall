import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import items, { inputSaga } from './items';
import loading from './loading';
import item, { readSaga } from './item';
import list, { listSaga, searchSaga } from './list';
import login, { loginSaga } from './login';
import register, { registerSaga, checkSaga } from './register';

const rootReducer = combineReducers({
  loading,
  items,
  item,
  list,
  login,
  register,
});

export function* rootSaga() {
  yield all([
    inputSaga(),
    readSaga(),
    listSaga(),
    searchSaga(),
    loginSaga(),
    registerSaga(),
    checkSaga(),
  ]);
}

export default rootReducer;
