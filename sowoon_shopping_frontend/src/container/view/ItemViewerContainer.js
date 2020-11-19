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
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, itemId]);

  return <ItemViewer item={item} error={error} loading={loading} />;
};

export default withRouter(ItemViewerContainer);
