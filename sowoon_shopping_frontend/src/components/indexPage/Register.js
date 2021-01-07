import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../commons/Button';
import palette from '../../lib/styles/palette';
import Responsive from '../commons/Responsive';
import ErrorModal from '../commons/ErrorModal';
import { withRouter } from 'react-router-dom';

const RegisterBlock = styled(Responsive)`
  margin-top: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  padding-left: 17%;

  h3 {
    font-size: 2rem;
    padding-bottom: 2rem;
  }

  h4 {
    font-size: 1.3rem;
    color: ${palette.gray[7]};
  }
`;

const StyledInput = styled.input`
  padding-left: 1rem;
  border-radius: 4px;
  border: 0.5px ${palette.gray[5]} solid;
  font-size: 1rem;
  height: 2.5rem;
  width: 50%;
  margin-bottom: 5px;
`;

const CheckButton = styled(Button)`
  margin-left: 0.5rem;
  font-size: 1rem;
`;

const RegisterButton = styled(Button)`
  margin-top: 2rem;
  font-size: 1.3rem;
  width: 50%;
  height: 4rem;
`;

const SubInfoBlock = styled.div`
  display: flex;
  align-items: center;
  p {
    color: ${palette.gray[5]};
  }
  a {
    padding-left: 1rem;
    color: black;
  }
`;

const Register = ({
  onChangeField,
  onCheck,
  onRegister,
  name,
  email,
  password,
  image,
  check,
  modal,
  onConfirm,
  text,
  register,
}) => {
  const onChangeName = (e) => {
    onChangeField({ key: 'name', value: e.target.value });
  };

  const onChangeMail = (e) => {
    onChangeField({ key: 'email', value: e.target.value });
  };

  const onChangePassword = (e) => {
    onChangeField({ key: 'password', value: e.target.value });
  };

  return (
    <>
      <RegisterBlock>
        <h3>회원 가입</h3>
        <h4>이메일 (로그인시 사용 됩니다.)</h4>
        <StyledInput
          placeholder={'이메일을 입력하세요'}
          onChange={onChangeMail}
          value={email}
        />
        <CheckButton onClick={onCheck}>중복확인</CheckButton>
        <ErrorModal
          visible={modal}
          onConfirm={onConfirm}
          title={'중복확인'}
          description={text}
        />
        <h4>아이디</h4>
        <StyledInput
          placeholder={'아이디를 입력하세요'}
          onChange={onChangeName}
          value={name}
        />
        <h4>비밀번호</h4>
        <StyledInput
          placeholder={'비밀번호를 입력하세요'}
          type={'password'}
          onChange={onChangePassword}
          value={password}
        />
        <div>
          <RegisterButton orange onClick={onRegister}>
            회원 가입
          </RegisterButton>
        </div>
        <SubInfoBlock>
          <p>이미 회원이신가요?</p>
          <a href={'/login'}>로그인하기</a>
        </SubInfoBlock>
        <ErrorModal
          visible={register}
          title={'회원가입 완료'}
          description={'로그인 화면으로 이동합니다.'}
          link={'/login'}
        />
      </RegisterBlock>
    </>
  );
};

export default withRouter(Register);
