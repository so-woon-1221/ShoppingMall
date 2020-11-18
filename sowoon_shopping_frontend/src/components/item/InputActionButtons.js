import React from 'react';
import styled from 'styled-components';
import Button from '../commons/Button';

const InputActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const InputActionButtons = ({ onCancel, onPublish }) => {
  return (
    <InputActionButtonsBlock>
      <StyledButton orange onClick={onPublish}>
        상품 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </InputActionButtonsBlock>
  );
};

export default InputActionButtons;
