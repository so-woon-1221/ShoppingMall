import React from 'react';
import styled from 'styled-components';
import Button from '../commons/Button';
import palette from '../../lib/styles/palette';
import Responsive from '../commons/Responsive';
import { Link } from 'react-router-dom';

const ItemListViewBlock = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

const ItemListViewWrapper = styled(Responsive)`
  display: grid;
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ItemListView = styled.div`
  display: grid;
`;

const Item = styled(Link)`
  padding-bottom: 3rem;
  display: inline-flex;
`;

const ItemImage = styled.img`
  max-width: 60%;
  height: auto;
`;

const ItemInfo = styled.div`
  padding-left: 1rem;
  h1 {
    font-size: 1rem;
  }
  h2 {
    color: ${palette.gray[5]};
    font-size: 0.8rem;
  }
  p {
    margin-top: 0.5rem;
  }
`;

const ListItem = ({ item }) => {
  const { thumbnail, name, price, id, tags } = item;
  return (
    <Item to={`/item/${id}`}>
      <ItemImage src={thumbnail} />
      <ItemInfo>
        <h1>{name}</h1>
        <p>{price}</p>
        {tags.map((tag) => (
          <h2>#{tag}</h2>
        ))}
      </ItemInfo>
    </Item>
  );
};

const ItemSearchListViewer = ({ loading, error, items }) => {
  if (error) {
    return <ItemListViewBlock>에러가 발생했습니다.</ItemListViewBlock>;
  }

  if (items == '') {
    return (
      <ItemListViewBlock>
        <ItemListViewWrapper>검색결과 없음</ItemListViewWrapper>
      </ItemListViewBlock>
    );
  }

  if (!items && !loading) {
    return (
      <ItemListViewBlock>
        <ItemListViewWrapper>loading...</ItemListViewWrapper>
      </ItemListViewBlock>
    );
  }

  return (
    <>
      <ItemListViewBlock>
        <ItemListViewWrapper>
          <ItemListView className={'container'}>
            {!loading && items && (
              <>
                {items.map((item) => (
                  <ListItem item={item} key={item.id.counter} />
                ))}
              </>
            )}
          </ItemListView>
        </ItemListViewWrapper>
      </ItemListViewBlock>
    </>
  );
};

export default ItemSearchListViewer;
