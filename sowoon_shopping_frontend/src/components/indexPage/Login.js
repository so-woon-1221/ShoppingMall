import React from 'react';
import Button from '../commons/Button';
import palette from '../../lib/styles/palette';
import client from '../../lib/api/client';

const Login = () => {
  return (
    <>
      <Button to={'localhost:8080/oauth2/authorization/google'}>
        구글로 로그인
      </Button>
    </>
  );
};

export default Login;
