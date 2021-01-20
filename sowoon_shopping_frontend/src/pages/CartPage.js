import React from 'react';
import Header from '../components/commons/Header';
import ItemViewerContainer from '../container/view/ItemViewerContainer';
import Cart from '../components/cart/Cart';
import CartContainer from '../container/cart/CartContainer';

const CartPage = () => {
  return (
    <>
      <Header />
      <CartContainer />
    </>
  );
};

export default CartPage;
