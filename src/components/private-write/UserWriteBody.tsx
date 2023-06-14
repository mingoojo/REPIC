import { styled } from 'styled-components';
import { PrivateData } from '../../type/types';
import UserWriteCard from './UserWriteCard';
import UserWriteList from './UserWriteList';

const Container = styled.div`
width: 100%;
/* display: flex; */
/* justify-content: space-between; */
`;

type UserBodyProps = {
  myPrivateData : PrivateData[]
}

export default function UserWriteBody({ myPrivateData }:UserBodyProps) {
  return (
    <Container>
      <UserWriteCard myPrivateData={myPrivateData} />
      <UserWriteList myPrivateData={myPrivateData} />
    </Container>
  );
}
