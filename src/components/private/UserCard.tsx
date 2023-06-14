import { styled } from 'styled-components';
import { appAuth } from '../../firebase/config';
import { PrivateData } from '../../type/types';

const Container = styled.div`
display: inline-block;
width: 35%;
aside{
  display: inline-block;
  width: 100%;
  border: 1px solid #222;
  border-radius: 2rem;
  height: 400px;
  text-align: center;
  padding: 1rem;
}
h1{
  font-size: 3rem;
  text-decoration-line: underline;
}
.Thumbnail{
  display: inline-block;
  width: 100px;
  margin-block: 2rem;
  height: 100px;
  /* border: 2px solid #222; */
  border-radius: 5rem;
  background-color: beige;
}
button{
  margin-block: 1rem;
  width: 100%;
  height: 50px;
  border-radius: 2rem;
}
`;

type UserCardProps = {
  myPrivateData : PrivateData[]
}

export default function UserCard({ myPrivateData }:UserCardProps) {
  const { currentUser } = appAuth;

  if (currentUser === null) {
    return (
      null
    );
  }

  return (
    <Container>
      <aside>
        <h1>
          {myPrivateData[0].nickName}
        </h1>
        <div className="Thumbnail">
          <img src="" alt="" />
        </div>
        <div>
          {myPrivateData[0].email}
        </div>
      </aside>
      {
        currentUser.uid === myPrivateData[0].uid ? (
          <div>
            <button type="button">정보수정하기</button>
          </div>
        ) : (
          null
        )
      }

    </Container>
  );
}
