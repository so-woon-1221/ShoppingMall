import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readItem, unloadPost } from '../../modules/item';
import ItemViewer from '../../components/viewer/ItemViewer';

const ItemViewerContainer = ({ match }) => {
  const { itemId } = match.params;
  console.log(itemId);
  const dispatch = useDispatch();
  const { item, error, loading } = useSelector(({ item, loading }) => ({
    item: item.item,
    error: item.error,
    loading: loading['item/READ_ITEM'],
  }));

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
      <ItemViewer item={item} error={error} loading={loading} />;
    </>
  );
};

export default withRouter(ItemViewerContainer);
