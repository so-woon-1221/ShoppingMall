import React, { useEffect } from 'react';
import InputActionButtons from '../../components/item/InputActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { inputItem } from '../../modules/items';

const InputActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { name, content, price, tags, item, itemError } = useSelector(
    ({ items }) => ({
      name: items.name,
      content: items.content,
      price: items.price,
      tags: items.tags,
      item: items.item,
      itemError: items.itemError,
    }),
  );

  const onPublish = () => {
    dispatch(inputItem({ name, content, price, tags }));
  };

  const onCancel = () => {
    console.log('cancel');
    history.goBack();
  };

  useEffect(() => {
    if (item) {
      history.push(`/`);
      console.log(item);
    }
    if (itemError) {
      console.log(itemError);
    }
  }, [history, item, itemError]);

  return <InputActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(InputActionButtonsContainer);
