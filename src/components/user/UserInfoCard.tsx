import { styled } from 'styled-components';
import { UserData } from '../../type/types';
import AuthorHeader from './AuthorHeader';
import AuthorBody from './AuthorBody';
import AuthorActivity from './AuthorActivity';

type UserInfoCardProps = {
  UserInfo : UserData
  userId : string
}

const Container = styled.div`
border: 1px solid ${(props) => props.theme.colors.textSecond};
border-radius: 1rem;
margin-bottom: 1rem;
`;

export default function UserInfoCard({ UserInfo, userId }:UserInfoCardProps) {
  return (
    <Container>
      <AuthorHeader UserInfo={UserInfo} />
      <AuthorBody UserInfo={UserInfo} />
      <AuthorActivity userId={userId} />
    </Container>
  );
}
