import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import useCommunityFormStore from '../hooks/useCommunityFormStore';

const Container = styled.div`
margin-top: 3rem;
form{
  width: 100%
}
div{
  width: 100%;
  input{
    width: 100%;
    box-sizing: border-box;
    margin-block: 1rem;
    height: 4rem;
    padding: 1rem;
  }
  textarea{
    padding: 1rem;
    width: 100%;
    height: 720px;
    margin-block: 1rem;
  }
}
`;

export default function CommunityWritePage() {
  const navigate = useNavigate();
  const [{ title, text }, communityFormStore] = useCommunityFormStore();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    communityFormStore.addDocument().then(() => {
      navigate('/');
    });
  };

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>커뮤니티 작성</h1>
          <div>
            <input type="text" value={title} onChange={(e) => { communityFormStore.changeTitle(e.target.value); }} required placeholder="제목을 입력해주세요" />
          </div>
          <div>
            <textarea value={text} onChange={(e) => { communityFormStore.changeText(e.target.value); }} required placeholder="내용을 입력해주세요" />
          </div>
          <button type="submit">게시하기</button>
        </form>
      </div>
    </Container>
  );
}
