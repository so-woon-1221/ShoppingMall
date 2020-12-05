import React from 'react';
import Responsive from '../components/commons/Responsive';
import InputItemContainer from '../container/item/InputItemContainer';
import TagBoxContainer from '../container/item/TagBoxContainer';
import InputActionButtonsContainer from '../container/item/InputActionButtonsContainer';
import ImageInputContainer from '../container/item/ImageInputContainer';

const ItemInputPage = () => {
  return (
    <Responsive>
      <InputItemContainer />
      <ImageInputContainer />
      <TagBoxContainer />
      <InputActionButtonsContainer />
    </Responsive>
  );
};

export default ItemInputPage;
