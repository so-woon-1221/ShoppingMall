import React from 'react';
import Responsive from '../components/commons/Responsive';
import InputItemContainer from '../container/item/InputItemContainer';
import TagBoxContainer from '../container/item/TagBoxContainer';
import InputActionButtonsContainer from '../container/item/InputActionButtonsContainer';
import ImageInput from '../components/item/ImageInput';

const ItemInputPage = () => {
  return (
    <Responsive>
      <InputItemContainer />
      <ImageInput />
      <TagBoxContainer />
      <InputActionButtonsContainer />
    </Responsive>
  );
};

export default ItemInputPage;
