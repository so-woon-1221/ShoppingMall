import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as registerAPI from '../lib/api/login';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'register/INITIALIZE';
const CHANGE_FIELD = 'register/CHANGE_FIELD';
const [
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
] = createRequestActionTypes('register/REGISTER_USER');
const [
  REGISTER_CHECK,
  REGISTER_CHECK_SUCCESS,
  REGISTER_CHECK_FAILURE,
] = createRequestActionTypes('register/REGISTER_CHECK');

export const initialize = createAction(INITIALIZE);
export const registerUser = createAction(
  REGISTER_USER,
  ({ name, email, image, password }) => ({ name, email, image, password }),
);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const registerCheck = createAction(REGISTER_CHECK, ({ email }) => ({
  email,
}));

const registerUserSaga = createRequestSaga(
  REGISTER_USER,
  registerAPI.registerUser,
);
export function* registerSaga() {
  yield takeLatest(REGISTER_USER, registerUserSaga);
}
const registerCheckSaga = createRequestSaga(
  REGISTER_CHECK,
  registerAPI.registerCheck,
);
export function* checkSaga() {
  yield takeLatest(REGISTER_CHECK, registerCheckSaga);
}

const initialState = {
  name: '',
  email: '',
  image: '',
  password: '',
  check: false,
  user: '',
  userError: null,
};

const register = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [REGISTER_USER]: (state) => ({
      ...state,
      user: '',
    }),
    [REGISTER_USER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [REGISTER_USER_FAILURE]: (state, { payload: userError }) => ({
      ...state,
      userError,
    }),
    [REGISTER_CHECK]: (state) => ({ ...state, check: '' }),
    [REGISTER_CHECK_SUCCESS]: (state, { payload: check }) => ({
      ...state,
      check,
    }),
    [REGISTER_CHECK_FAILURE]: (state, { payload: check }) => ({
      ...state,
      check,
    }),
  },
  initialState,
);

export default register;
