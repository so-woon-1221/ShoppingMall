import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../commons/Responsive';
import Button from '../commons/Button';

// const ItemViewBlock = styled.div`
//   display: block;
// `;

const ItemHeaderBlock = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  background: white;
  //position: fixed;
`;

const ItemHeaderWrapper = styled(Responsive)`
  display: flex;
  justify-content: flex-start;
  .item {
    display: flex;
  }
`;

const ItemImage = styled.img`
  max-width: 50%;
  height: auto;
`;

const Blank = styled.div`
  width: 100px;
`;

const ItemHeader = styled.div`
  //position: fixed;
  top: 5.5rem;
  left: 55%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background: white;
  h1 {
    font-size: 2rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[6]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.orange[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.orange[5]};
    }
  }
`;

const ItemContent = styled(Responsive)`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
  //width: 100%;
  //padding-left: 5rem;
`;

const ItemViewer = ({ item, error, loading }) => {
  if (error) {
    console.log(error);
    if (error.response && error.response.status === 404) {
      return <ItemHeaderBlock>존재하지 않는 아이템입니다.</ItemHeaderBlock>;
    }
    return <ItemHeaderBlock>오류</ItemHeaderBlock>;
  }

  if (loading || !item) {
    return null;
  }

  console.log(item);

  let { id, name, content, price, tags, thumbnail } = item;

  return (
    <div>
      <ItemHeaderBlock>
        <ItemHeaderWrapper>
          <ItemImage src={thumbnail} />
          <Blank />
          <ItemHeader>
            <h1>{name}</h1>
            <SubInfo>
              <span>
                <b>{price}</b>
              </span>
            </SubInfo>
            <Tags>
              {tags.map((tag) => (
                <div className={'tag'}>#{tag}</div>
              ))}
            </Tags>
            <Button>구매</Button>
            <Button orange>장바구니</Button>
          </ItemHeader>
        </ItemHeaderWrapper>
      </ItemHeaderBlock>
      {/*<Spacer2 />*/}
      <ItemContent dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ItemViewer;
