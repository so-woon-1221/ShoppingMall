import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readItem, unloadPost } from '../../modules/item';
import { cartIn } from '../../modules/cart';
import ItemViewer from '../../components/viewer/ItemViewer';

const ItemViewerContainer = ({ match }) => {
  const { itemId } = match.params;
  const dispatch = useDispatch();
  const { item, error, loading, user } = useSelector(
    ({ item, loading, login }) => ({
      item: item.item,
      error: item.error,
      loading: loading['item/READ_ITEM'],
      user: login.user,
    }),
  );

  const onCart = () => {
    console.log(user);
    dispatch(cartIn({ itemId, user }));
  };

  useEffect(() => {
    dispatch(readItem(itemId));
    console.log(item);
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, itemId]);

  if (item === '') {
    return <div>오류</div>;
  }
  return (
    <>
      <ItemViewer item={item} error={error} loading={loading} onCart={onCart} />
    </>
  );
};

export default withRouter(ItemViewerContainer);
