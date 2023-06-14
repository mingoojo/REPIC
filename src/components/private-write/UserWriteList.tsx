import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { PrivateData } from '../../type/types';

type UserWriteListProps = {
  myPrivateData : PrivateData[]
}

const Container = styled.div`
width: 62%;
float: right;
/* margin-top: 3rem; */
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
    height: 200px;
    margin-block: 1rem;
  }
}
`;

export default function UserWriteList({ myPrivateData }:UserWriteListProps) {
  const navigate = useNavigate();
  function handleSubmit() {
    //
  }
  function handleClick() {
    navigate(`/private/${myPrivateData[0].uid}`);
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>글 작성</legend>
          <div>
            <textarea required placeholder="내용을 입력해주세요" />
          </div>
          <div>
            <button type="submit">게시하기</button>
            <button type="button" onClick={handleClick}>뒤로가기</button>
          </div>
        </fieldset>
      </form>
    </Container>
  );
}
