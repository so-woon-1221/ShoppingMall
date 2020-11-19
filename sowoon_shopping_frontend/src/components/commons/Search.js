import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from './Button';

const SearchWrapper = styled.form`
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
  const [searchText, setSearchText] = useState('');

  const onChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  return (
    <>
      <SearchWrapper>
        <SearchInput type={'text'} value={searchText} onChange={onChange} />
        <Button
          orange={'orange'}
          type={'submit'}
          to={`/api/search/${searchText}`}
        >
          검색
        </Button>
        <Blank />
      </SearchWrapper>
    </>
  );
};

export default Search;
