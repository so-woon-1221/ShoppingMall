import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../commons/Responsive';

const ItemViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const ItemHeader = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
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

const ItemContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const ItemViewer = ({ item, error, loading }) => {
  if (error) {
    console.log(error);
    if (error.response && error.response.status === 404) {
      return <ItemViewerBlock>존재하지 않는 아이템입니다.</ItemViewerBlock>;
    }
    return <ItemViewerBlock>오류</ItemViewerBlock>;
  }

  if (loading || !item) {
    return null;
  }

  console.log(item);

  const { id, name, content, price, tags } = item;

  return (
    <ItemViewerBlock>
      <ItemHeader>
        <h1>{name}</h1>
        <SubInfo>
          <span>
            <b>{price}</b>
          </span>
          {/*<span>{new Date(id.date).toLocaleDateString()}</span>*/}
        </SubInfo>
        <Tags>
          {/*{tags.map((tag) => (*/}
          {/*  <div className={'tag'}>#{tag}</div>*/}
          {/*))}*/}
          <div className={'tag'}>#{tags}</div>
        </Tags>
      </ItemHeader>
      <ItemContent dangerouslySetInnerHTML={{ __html: content }} />
    </ItemViewerBlock>
  );
};

export default ItemViewer;
