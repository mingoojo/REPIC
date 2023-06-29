import { styled } from 'styled-components';
import { UserData } from '../../type/types';

type AuthorBodyProps = {
  UserInfo : UserData
}

const Container = styled.div`
padding: 0rem 1rem 0rem 1rem;
margin-top: 2rem;
  .userText{
    margin-top: 2rem;
    h1{
      padding-bottom: 1rem;
    }
    p{
      font-size: 1.4rem;
      margin-top: 1rem;
    }
  }
`;

export default function AuthorBody({ UserInfo }:AuthorBodyProps) {
  return (
    <Container>
      <div className="userText">
        <h1>
          자기 소개
        </h1>
        {
          UserInfo.introduce ? (
            <p>{UserInfo.introduce}</p>
          ) : (
            <p> 자기 소개가 없습니다.</p>
          )
        }
      </div>
    </Container>
  );
}
