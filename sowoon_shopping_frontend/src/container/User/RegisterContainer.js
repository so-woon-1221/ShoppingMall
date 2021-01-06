import React, { useCallback, useEffect, useState } from 'react';
import Register from '../../components/indexPage/Register';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeField,
  initialize,
  registerUser,
  registerCheck,
} from '../../modules/register';
import { withRouter } from 'react-router-dom';
import ErrorModal from '../../components/commons/ErrorModal';

const RegisterContainer = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const {
    name,
    email,
    image,
    password,
    check,
    user,
    userError,
    history,
  } = useSelector(({ register }) => ({
    name: register.name,
    email: register.email,
    image: register.image,
    password: register.password,
    check: register.check,
    user: register.user,
    userError: register.userError,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  const onCheck = () => {
    dispatch(registerCheck({ email }));
    setModal(true);
  };

  const onRegister = () => {
    dispatch(registerUser({ name, email, password, image }));
  };

  const onConfirm = () => {
    setModal(false);
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <>
      <Register
        onChangeField={onChangeField}
        name={name}
        email={email}
        password={password}
        image={image}
        check={check}
        onRegister={onRegister}
        onCheck={onCheck}
        modal={modal}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default withRouter(RegisterContainer);
