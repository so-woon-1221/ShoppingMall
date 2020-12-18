import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import Button from '../commons/Button';
import palette from '../../lib/styles/palette';
import client from '../../lib/api/client';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../modules/login';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  let { user, userError } = useSelector(({ login }) => ({
    user: login.user,
    userError: login.userError,
  }));

  const OnSuccess = (response) => {
    console.log(response);
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const image = response.profileObj.imageUrl;

    console.log(name);

    dispatch(loginUser({ name, email, image }));
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
    if (userError) {
      console.log(userError);
    }
  });
  return (
    <>
      <div>
        <GoogleLogin
          clientId="429509298852-vnmva42a5utbrgnrtpemplvs5uqt4pvd.apps.googleusercontent.com"
          onSuccess={OnSuccess}
          onFailure={(result) => console.log(result)}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </>
  );
};

export default withRouter(Login);
