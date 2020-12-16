import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../commons/Responsive';
import NumberFormat from 'react-number-format';

const EditorBlock = styled(Responsive)`
  padding-top: 4rem;
  padding-bottom: 3rem;
`;

const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray[4]};
  width: 100%;
`;

const PriceInput = styled(NumberFormat)`
  font-size: 1rem;
  outline: none;
  padding-top: 0.5rem;
  border: none;
  width: 100%;
  text-align: right;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 400px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ name, content, price, onChangeField }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ align: [] }],

    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],

    ['link', 'image'],
    // ['clean'], // remove formatting button
  ];

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '상품 설명을 작성하세요',
      modules: {
        toolbar: toolbarOptions,
      },
    });

    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'content', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeName = (e) => {
    onChangeField({ key: 'name', value: e.target.value });
  };

  const onChangePrice = (e) => {
    onChangeField({ key: 'price', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder={'상품명을 입력하세요'}
        onChange={onChangeName}
        value={name}
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
      {/*<PriceInput*/}
      {/*  placeholder={'가격을 입력하세요'}*/}
      {/*  onChange={onChangePrice}*/}
      {/*  value={price}*/}
      {/*/>*/}
      <PriceInput
        thousandSeparator={true}
        suffix={'원'}
        value={price}
        placeholder={'가격을 입력하세요'}
        onChange={onChangePrice}
      />
    </EditorBlock>
  );
};

export default Editor;
