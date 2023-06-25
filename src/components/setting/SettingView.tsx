import { styled } from 'styled-components';
import { UserData } from '../../type/types';
import SettingCard from './SettingCard';
import UserCard from './UserCard';

type SettingViewProps = {
  userInfo: UserData
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function SettingView({ userInfo }:SettingViewProps) {
  return (
    <Container>
      <UserCard userInfo={userInfo} />
      <SettingCard userInfo={userInfo} />
    </Container>
  );
}
