import React from 'react';
import styled from 'styled-components/';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  //box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 2.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .search {
    margin: 0 1px;
  }
  .right {
    display: flex;
    align-items: center;
    //margin-right: ;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
  const { user } = useSelector(({ login }) => ({
    user: login.user,
  }));
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link className={'logo'} to={'/'}>
            GOODDA
          </Link>
          <div>
            <Link to={'/item'}>작품</Link>
          </div>
          <div>
            <Link to={'/item'}>빈칸</Link>
          </div>
          <div>
            <Search className={'search'} />
          </div>
          <div className={'right'}>
            {user === '' ? (
              <Button to={'/login'}>로그인</Button>
            ) : (
              <Button to={'/input'}>{user} 장바구니</Button>
            )}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
