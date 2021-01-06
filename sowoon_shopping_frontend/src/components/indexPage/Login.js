import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import Button from '../commons/Button';
import palette from '../../lib/styles/palette';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../modules/login';
import styled from 'styled-components';
import Responsive from '../commons/Responsive';

const LoginBlock = styled.div`
  margin-top: 1.5rem;
`;

const LoginWrapper = styled(Responsive)`
  align-items: center;
  justify-content: center;
  display: flex;
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
  };

  useEffect(() => {
    if (user) {
      history.push('/register');
    }
    if (userError) {
      history.push('/');
    }
  });

  return (
    <div>
      <LoginBlock>
        <LoginWrapper>
          <Button to={'/register'}>회원가입</Button>
          <GoogleLogin
            clientId="429509298852-vnmva42a5utbrgnrtpemplvs5uqt4pvd.apps.googleusercontent.com"
            onSuccess={OnSuccess}
            onFailure={(result) => console.log(result)}
            cookiePolicy={'single_host_origin'}
          />
        </LoginWrapper>
      </LoginBlock>
    </div>
  );
};

export default withRouter(Login);
