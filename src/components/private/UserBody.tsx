import { styled } from 'styled-components';
import { PrivateData } from '../../type/types';
import UserCard from './UserCard';
import UserIntroduce from './UserIntroduce';

const Container = styled.div`
width: 100%;
`;

type UserBodyProps = {
  myPrivateData : PrivateData[]
}

export default function UserBody({ myPrivateData }:UserBodyProps) {
  return (
    <Container>
      <UserCard myPrivateData={myPrivateData} />
      <UserIntroduce myPrivateData={myPrivateData} />
    </Container>
  );
}
