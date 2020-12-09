import React from 'react';
import styled from 'styled-components';
import Button from '../commons/Button';
import palette from '../../lib/styles/palette';
import Responsive from '../commons/Responsive';

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

const Item = styled.div`
  padding-bottom: 3rem;
  display: inline-flex;
`;

const ItemImage = styled.img`
  max-width: 50%;
  height: auto;
`;

const ItemInfo = styled.div`
  padding-left: 1rem;
  &:hover {
    color: ${palette.gray[6]};
  }
  h1 {
    font-size: 1rem;
  }
  h2 {
    font-size: 0.8rem;
  }
  p {
    margin-top: 0.5rem;
  }
`;

const listItem = ({ item }) => {
  const { thumbnail, name, price, id } = item;
  return (
    <Item>
      {/*<ItemImage src={thumbnail} />*/}
      <ItemInfo>
        <h2>GOODDA</h2>
        <h1>{name}</h1>
        <p>{price}</p>
        <Button>확인</Button>
      </ItemInfo>
    </Item>
  );
};

const ItemListViewer = ({ loading, error, items }) => {
  if (error) {
    return <ItemListViewBlock>에러가 발생했습니다.</ItemListViewBlock>;
  }
  return (
    <>
      <ItemListViewBlock>
        <ItemListViewWrapper>
          <ItemListView className={'container'}></ItemListView>
          {!loading && items && (
            <div>
              {items.map((item) => (
                <listItem item={item} key={item.thumbnail} />
              ))}
            </div>
          )}
        </ItemListViewWrapper>
      </ItemListViewBlock>
    </>
  );
};

export default ItemListViewer;
