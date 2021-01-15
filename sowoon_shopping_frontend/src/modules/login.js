import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as loginAPI from '../lib/api/login';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'login/INITIALIZE';
const CHANGE_FIELD = 'login/CHANGE_FIELD';
const [
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
] = createRequestActionTypes('login/LOGIN_USER');
const TEMP_SET_USER = 'login/TEMP_SET_USER';

export const initialize = createAction(INITIALIZE);
export const loginUser = createAction(LOGIN_USER, ({ email, password }) => ({
  email,
  password,
}));
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);

const loginUserSaga = createRequestSaga(LOGIN_USER, loginAPI.loginUser);
export function* loginSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
}

const initialState = {
  email: '',
  password: '',
  user: '',
  userError: null,
};

const login = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [LOGIN_USER]: (state) => ({
      ...state,
      user: '',
    }),
    [LOGIN_USER_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [LOGIN_USER_FAILURE]: (state, { payload: userError }) => ({
      ...state,
      userError,
    }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({ ...state, user }),
  },
  initialState,
);

export default login;
