import React, { useCallback, useEffect } from 'react';
import Editor from '../../components/item/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/items';

const InputItemContainer = () => {
  const dispatch = useDispatch();
  const { name, content, price } = useSelector(({ items }) => ({
    name: items.name,
    content: items.content,
    price: items.price,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <Editor
      onChangeField={onChangeField}
      name={name}
      content={content}
      price={price}
    />
  );
};

export default InputItemContainer;
