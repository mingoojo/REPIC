import { useState } from 'react';
import styled from 'styled-components';
import useUserInfoUpdateStore from '../../hooks/useUserInfoUpdateStore';

type UpdateImgProps = {
  setFile: (file:File) => void
}

const Container = styled.div`
  h1{
    font-size: 1.5rem;
    font-weight: normal;
    margin-block: 2rem;
  }
  input{
  background-color: rgba( 255, 255, 255, 0 );
  color: ${(props) => props.theme.colors.textMain};
  border: 1px solid ${(props) => props.theme.colors.textSecond};
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 1.7rem .7rem 1.7rem .7rem;
  margin-block: 1rem;
  }
`;

export default function UpdateImg({ setFile }:UpdateImgProps) {
  const handleFile = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <Container>
      <h1>
        사진변경
      </h1>
      <input type="file" onChange={handleFile} id="photo" />
    </Container>
  );
}
