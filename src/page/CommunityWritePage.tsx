import React from 'react';
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
    margin-block: 1rem;
    padding: 1rem;
    height: 4rem;
    background-color: ${(props) => props.theme.colors.backgroundMain};
    border: 1px solid ${(props) => props.theme.colors.textSecond};
    color: ${(props) => props.theme.colors.textMain};
  }
  textarea{
    padding: 1rem;
    width: 100%;
    margin-block: 1rem;
    height: 720px;
    background-color: ${(props) => props.theme.colors.backgroundMain};
    color: ${(props) => props.theme.colors.textMain};
  }
}
`;

export default function CommunityWritePage() {
  const navigate = useNavigate();
  const [{ title, text }, communityFormStore] = useCommunityFormStore();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    communityFormStore.addDocument().then(() => {
      navigate('/communities?page=1&sort=Recent');
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
