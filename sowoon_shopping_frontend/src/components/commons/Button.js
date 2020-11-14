import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const ButtonStyle = css`
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[5]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.orange &&
    css`
      background: ${palette.orange[5]};
      &:hover {
        background: ${palette.orange[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

const StyledLink = styled(Link)`
  ${ButtonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} orange={props.orange ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
