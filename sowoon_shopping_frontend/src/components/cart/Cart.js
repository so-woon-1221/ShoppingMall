import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../commons/Responsive';
import { Link } from 'react-router-dom';

const CartBlock = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

const CartWrapper = styled(Responsive)`
  h3 {
    font-size: 2rem;
    color: ${palette.gray[8]};
    padding-bottom: 1rem;
    border-bottom: ${palette.gray[4]} 1px solid;
  }
`;

const ItemWrapper = styled(Link)`
  height: 20%;
  padding-bottom: 1rem;
  display: flex;
`;

const ItemImage = styled.img`
  max-width: 20%;
  height: auto;
`;

const Blank = styled.div`
  width: 50px;
`;

const ItemInfo = styled.div`
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1rem;
    color: ${palette.gray[7]};
  }
`;

const CartItem = ({ item }) => {
  const { thumbnail, name, price, id } = item;
  return (
    <ItemWrapper to={`/item/${id}`}>
      <ItemImage src={thumbnail} />
      <Blank />
      <ItemInfo>
        <h4>{name}</h4>
        <h5>{price}</h5>
        <h5>수량</h5>
      </ItemInfo>
    </ItemWrapper>
  );
};

const Cart = ({ items }) => {
  return (
    <>
      <CartBlock>
        <CartWrapper>
          <h3>장바구니</h3>
          <>
            {items.map((item) => (
              <div>${item}</div>
            ))}
            {/*<div>${items}</div>*/}
          </>
        </CartWrapper>
      </CartBlock>
    </>
  );
};

export default Cart;
