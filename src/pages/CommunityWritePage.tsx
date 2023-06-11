import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from '../components/default/Header';
import useFetchStore from '../hooks/useFetchStore';

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
    AddDocument, title, setTitle, text, setText,
  } = useFetchStore({ transaction: 'community' });

  function handleSubmit(e:React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    AddDocument();
    navigate('/communities');
  }

  return (
    <div>
      <Header />
      <Container>
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
      </Container>
    </div>
  );
}
