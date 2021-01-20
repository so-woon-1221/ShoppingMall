import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import items, { inputSaga } from './items';
import loading from './loading';
import item, { readSaga } from './item';
import list, { listSaga, searchSaga } from './list';
import login, { loginSaga } from './login';
import register, { registerSaga, checkSaga } from './register';
import cart, { getSaga, inSaga } from './cart';

const rootReducer = combineReducers({
  loading,
  items,
  item,
  list,
  login,
  cart,
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
    inSaga(),
    getSaga(),
  ]);
}

export default rootReducer;
