import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as loginAPI from '../lib/api/login';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'login/INITIALIZE';
const [
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
] = createRequestActionTypes('login/LOGIN_USER');

export const initialize = createAction(INITIALIZE);
export const loginUser = createAction(LOGIN_USER, ({ name, email, image }) => ({
  name,
  email,
  image,
}));

const loginUserSaga = createRequestSaga(LOGIN_USER, loginAPI.loginUser);
export function* loginSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
}

const initialState = {
  name: '',
  email: '',
  image: '',
  user: '',
  userError: null,
};

const login = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
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
  },
  initialState,
);

export default login;
