import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize, loginUser } from '../../modules/login';
import { withRouter } from 'react-router-dom';
import Login from '../../components/indexPage/Login';

const LoginContainer = ({ history }) => {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();

  const { email, password, user, userError } = useSelector(({ login }) => ({
    email: login.email,
    password: login.password,
    user: login.user,
    userError: login.userError,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  const onRegister = () => {
    dispatch(loginUser({ email, password }));
  };

  const onConfirm = () => {
    setLogin(false);
  };

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        sessionStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    } else if (user === 'No') {
      setLogin(true);
    }
  }, [history, user]);

  return (
    <>
      <Login
        onChangeField={onChangeField}
        email={email}
        password={password}
        onRegister={onRegister}
        login={login}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default withRouter(LoginContainer);
