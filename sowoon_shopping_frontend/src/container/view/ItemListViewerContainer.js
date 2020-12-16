import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ItemListViewer from '../../components/viewer/ItemListViewer';
import { listItems, unloadItems } from '../../modules/list';

const ItemListViewerContainer = () => {
  const dispatch = useDispatch();
  const { items, error, loading } = useSelector(({ list, loading }) => ({
    items: list.items,
    error: list.error,
    loading: loading['list/LIST_ITEMS'],
  }));

  useEffect(() => {
    dispatch(listItems());
    return () => {
      dispatch(unloadItems());
    };
  }, [dispatch]);

  return <ItemListViewer loading={loading} items={items} error={error} />;
};

export default withRouter(ItemListViewerContainer);
