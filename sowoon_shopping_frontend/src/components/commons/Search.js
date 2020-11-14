import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from './Button';

const SearchWrapper = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: space-between;
`;
const SearchInput = styled.input`
  font-size: 1.125rem;
  border-radius: 4px;
  width: 400px;
  margin-right: 5px;
`;
const Blank = styled.div`
  width: 80px;
`;

const Search = ({ props }) => {
  return (
    <>
      <SearchWrapper>
        <SearchInput type={'text'} />
        <Button orange={'orange'}>검색</Button>
        <Blank />
      </SearchWrapper>
    </>
  );
};

export default Search;
