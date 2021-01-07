import React from 'react';
import Header from '../components/commons/Header';
import RegisterContainer from '../container/User/RegisterContainer';
import { withRouter } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
      <Header />
      <RegisterContainer />
    </>
  );
};

export default withRouter(RegisterPage);
