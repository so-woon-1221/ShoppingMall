import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components/';
import palette from '../../lib/styles/palette';
import Button, { ButtonStyle } from '../commons/Button';

const ImageInputBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 1rem;
  padding-bottom: 1rem;

  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const ImageBlock = styled.div`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
`;

const ImageInputForm = styled.input`
  ${ButtonStyle};
  width: 300px;
`;

const ImagePreview = styled.img`
  padding-top: 0.5rem;
  border: none;
  border-radius: 5px;
  width: 300px;
  height: 300px;
`;

const ImageInput = () => {
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState('');

  const onFileSelected = useCallback(
    (e) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        const temp = reader.result;
        if (temp) {
          setPreviewURL(temp.toString());
        }
      };
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        setImage(e.target.files[0]);
      }
    },
    [image],
  );

  useEffect(() => {
    console.log(previewURL);
  });

  return (
    <ImageInputBlock>
      <h4>대표 이미지 설정</h4>
      <ImageBlock>
        <ImageInputForm
          type={'file'}
          accept={'image/*'}
          onChange={onFileSelected}
        />
        {previewURL && <ImagePreview src={previewURL} />}
      </ImageBlock>
    </ImageInputBlock>
  );
};

export default ImageInput;
