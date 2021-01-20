import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cart from '../../components/cart/Cart';
import { getCart } from '../../modules/cart';

const CartContainer = ({ match }) => {
  const { user } = match.params;
  const dispatch = useDispatch();
  const { items, error, loading } = useSelector(({ cart, loading }) => ({
    items: cart.items,
    error: cart.error,
    loading: loading['cart/GET_CART'],
  }));

  useEffect(() => {
    dispatch(getCart(user));
  }, [dispatch, user]);

  const findItems = () => {};

  return (
    <>
      <Cart items={items} />
    </>
  );
};

export default withRouter(CartContainer);
