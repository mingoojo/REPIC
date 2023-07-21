import { styled } from 'styled-components';
import { UserData } from '../../type/types';
import CommunityCard from './CommunityCard';
import ProjectCard from './ProjectCard';
import UserInfoCard from './UserInfoCard';

type UserViewProps = {
  UserInfo : UserData
  userId : string
  Sort : string
}

const Container = styled.div`
  min-height: 80vh;
`;

export default function UserView({ UserInfo, userId, Sort }:UserViewProps) {
  return (
    <Container>
      <UserInfoCard UserInfo={UserInfo} userId={userId} />
      {Sort === 'WriteCommunity' && <CommunityCard UserInfo={UserInfo} />}
      {Sort === 'WriteProject' && <ProjectCard UserInfo={UserInfo} />}
    </Container>
  );
}
