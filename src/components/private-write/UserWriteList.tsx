import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { timeStamp } from '../../firebase/config';
import useFetchPrivateStore from '../../hooks/useFetchPrivateStore';
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
  const {
    title, setTitle, text, setText, fetchUpdatePrivateColumn,
  } = useFetchPrivateStore();

  function handelSubmit() {
    fetchUpdatePrivateColumn({ docId: myPrivateData[0].id });
    navigate(`/private/${myPrivateData[0].uid}`);
  }
  function handleClick() {
    navigate(`/private/${myPrivateData[0].uid}`);
  }

  return (
    <Container>
      <form onSubmit={handelSubmit}>
        <fieldset>
          <legend>글 작성</legend>
          <div>
            <input type="text" required value={title} onChange={(e) => { setTitle(e.target.value); }} placeholder="제목을 입력해주세요" />
          </div>
          <div>
            <textarea required value={text} onChange={(e) => { setText(e.target.value); }} placeholder="내용을 입력해주세요" />
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
