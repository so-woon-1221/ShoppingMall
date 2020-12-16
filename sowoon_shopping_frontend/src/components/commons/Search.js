import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { withRouter } from 'react-router-dom';

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

const Search = ({ history }) => {
  const [searchText, setSearchText] = useState('');

  const onChange = useCallback(
    (e) => {
      setSearchText(e.target.value);
    },
    [searchText],
  );

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    history.push(`/search/${searchText}`);
  });

  return (
    <>
      <SearchWrapper onSubmit={onSubmit}>
        <SearchInput
          type={'text'}
          name={'searchText'}
          value={searchText}
          onChange={onChange}
        />
        <Button orange={'orange'} type={'submit'} to={`/search/${searchText}`}>
          검색
        </Button>
        <Blank />
      </SearchWrapper>
    </>
  );
};

export default withRouter(Search);
