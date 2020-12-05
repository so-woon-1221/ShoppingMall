import React, { useCallback, useEffect } from 'react';
import ImageInput from '../../components/item/ImageInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../../modules/items';

const ImageInputContainer = () => {
  const dispatch = useDispatch();
  const { thumbnail } = useSelector(({ items }) => ({
    thumbnail: items.thumbnail,
  }));

  // const onChangeField = (image) => {
  //   dispatch(
  //     changeField({
  //       key: 'thumbnail',
  //       value: image,
  //     }),
  //   );
  // };

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <ImageInput onChangeField={onChangeField} thumbnail={thumbnail} />;
};

export default ImageInputContainer;
