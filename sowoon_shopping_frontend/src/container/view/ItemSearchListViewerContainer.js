import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ItemSearchListViewer from '../../components/viewer/ItemSearchListViewer';
import { searchItem, unloadItems } from '../../modules/list';

const ItemSearchListViewerContainer = ({ match }) => {
  const { keyword } = match.params;
  const dispatch = useDispatch();
  const { items, error, loading } = useSelector(({ list, loading }) => ({
    items: list.items,
    error: list.error,
    loading: loading['list/SEARCH_ITEMS'],
  }));

  useEffect(() => {
    dispatch(searchItem(keyword));
    return () => {
      dispatch(unloadItems());
    };
  }, [dispatch, keyword]);

  return (
    <>
      <ItemSearchListViewer loading={loading} items={items} error={error} />
    </>
  );
};

export default withRouter(ItemSearchListViewerContainer);
