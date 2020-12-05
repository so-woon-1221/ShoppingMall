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
  border: 1px black;
`;

const ItemImage = styled.img`
  max-width: 50%;
  height: auto;
`;

const ItemListViewer = () => {
  return (
    <>
      <ItemListViewBlock>
        <ItemListViewWrapper>
          <ItemListView className={'container'}>
            <Item>
              <ItemImage
                src={
                  'https://image.msscdn.net/images/goods_img/20200805/1537781/1537781_1_500.jpg'
                }
              />
              <Button>gg3</Button>
            </Item>
            <Item>
              <ItemImage
                src={
                  'https://image.msscdn.net/images/goods_img/20200805/1537781/1537781_1_500.jpg'
                }
              />
              <Button>gg3</Button>
            </Item>
            <Item>
              <ItemImage
                src={
                  'https://image.msscdn.net/images/goods_img/20200805/1537781/1537781_1_500.jpg'
                }
              />
              <Button>gg3</Button>
            </Item>
            <Item>
              <ItemImage
                src={
                  'https://image.msscdn.net/images/goods_img/20200805/1537781/1537781_1_500.jpg'
                }
              />
              <Button>gg3</Button>
            </Item>
          </ItemListView>
        </ItemListViewWrapper>
      </ItemListViewBlock>
    </>
  );
};

export default ItemListViewer;
