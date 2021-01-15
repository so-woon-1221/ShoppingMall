import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import Button from '../commons/Button';
import palette from '../../lib/styles/palette';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../commons/Responsive';
import KakaoLogin from 'react-kakao-login';
import NaverLogin from '@dohyeon/react-naver-login';
import ErrorModal from '../commons/ErrorModal';

const LoginBlock = styled(Responsive)`
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

const LoginButton = styled(Button)`
  margin-top: 2rem;
  font-size: 1.3rem;
  width: 50%;
  height: 4rem;
`;

const SocialBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Google = styled(GoogleLogin)`
  width: 50%;
  font-size: 1.3rem;
  height: 4rem;
`;

const Kakao = styled(KakaoLogin)`
  padding: 0;
  width: 50%;
  font-size: 1.3rem;
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

const Login = ({
  email,
  onChangeField,
  onRegister,
  password,
  login,
  onConfirm,
}) => {
  const OnSuccess = (response) => {
    console.log(response);
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const image = response.profileObj.imageUrl;
  };

  const onChangeMail = (e) => {
    onChangeField({ key: 'email', value: e.target.value });
  };

  const onChangePassword = (e) => {
    onChangeField({ key: 'password', value: e.target.value });
  };

  return (
    <>
      <LoginBlock>
        <h3>로그인</h3>
        <h4>이메일</h4>
        <StyledInput
          placeholder={'이메일을 입력하세요'}
          onChange={onChangeMail}
          value={email}
        />
        <h4>비밀번호</h4>
        <StyledInput
          placeholder={'비밀번호를 입력하세요'}
          onChange={onChangePassword}
          value={password}
          type={'password'}
        />
        <div>
          <LoginButton orange onClick={onRegister}>
            로그인
          </LoginButton>
        </div>
        <SocialBlock>
          <Google
            clientId="429509298852-vnmva42a5utbrgnrtpemplvs5uqt4pvd.apps.googleusercontent.com"
            onSuccess={OnSuccess}
            onFailure={(result) => console.log(result)}
            cookiePolicy={'single_host_origin'}
          />
        </SocialBlock>
        <SocialBlock>
          <Kakao
            token={'32f3e618bfa002f63712e732c5d4516b'}
            onSuccess={(profile) => console.log(profile)}
            onFail={(result) => console.log(result)}
          />
        </SocialBlock>
        <SocialBlock>
          <NaverLogin
            clientId={'Z51gVoCjqxMpYa2_8bsz'}
            callbackUrl={'http://localhost:3000/login'}
            isPopup={true}
          />
        </SocialBlock>
        <SubInfoBlock>
          <p>회원이 아니신가요?</p>
          <a href={'/register'}>회원가입</a>
        </SubInfoBlock>
        <ErrorModal
          visible={login}
          title={'로그인'}
          description={'이메일이나 비밀번호를 확인하세요'}
          onConfirm={onConfirm}
        />
      </LoginBlock>
    </>
  );
};

export default withRouter(Login);
