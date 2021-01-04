import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import Button from '../commons/Button';
import palette from '../../lib/styles/palette';
import client from '../../lib/api/client';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../modules/login';
import styled from 'styled-components';

const LoginBlock = styled.div`
  margin-top: 1.5rem;
`;

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

    dispatch(loginUser({ name, email, image }));

    console.log(name);
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
    <div>
      <LoginBlock>
        <GoogleLogin
          clientId="429509298852-vnmva42a5utbrgnrtpemplvs5uqt4pvd.apps.googleusercontent.com"
          onSuccess={OnSuccess}
          onFailure={(result) => console.log(result)}
          cookiePolicy={'single_host_origin'}
        />
      </LoginBlock>
    </div>
  );
};

export default withRouter(Login);
