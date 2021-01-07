import React from 'react';
import Header from '../components/commons/Header';
import Login from '../components/indexPage/Login';
import { withRouter } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <Header />
      <Login />
    </>
  );
};

export default withRouter(LoginPage);
