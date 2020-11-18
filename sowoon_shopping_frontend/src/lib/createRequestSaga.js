import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); //로딩 시작
    try {
      yield put({
        type: SUCCESS,
        payload: action.payload.name,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e.toString(),
        error: true,
      });
    }
    yield put(finishLoading(type)); //로딩 끝
  };
}

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};
