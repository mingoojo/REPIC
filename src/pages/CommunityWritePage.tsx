import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from '../components/default/Header';
import useCommunityStore from '../hooks/useCommunityStore';
import useFetchCommunityStore from '../hooks/useFetchCommunityStore';

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
  const {
    title, text, setTitle, setText, fetchAddDoc,
  } = useFetchCommunityStore();
  const [{ success }] = useCommunityStore();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchAddDoc();
  };
  useEffect(() => {
    if (success) {
      navigate('/communities');
    }
  }, [success]);
  return (
    <Container>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>커뮤니티 작성</legend>
            <div>
              <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); }} required placeholder="제목을 입력해주세요" />
            </div>
            <div>
              <textarea value={text} onChange={(e) => { setText(e.target.value); }} required placeholder="내용을 입력해주세요" />
            </div>
            <button type="submit">게시하기</button>
          </fieldset>
        </form>
      </div>
    </Container>
  );
}
