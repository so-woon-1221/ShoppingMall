import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/item/TagBox';
import { changeField } from '../../modules/items';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.items.tags);

  const onChangeTags = (nextTags) => {
    dispatch(
      changeField({
        key: 'tags',
        value: nextTags,
      }),
    );
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxContainer;
