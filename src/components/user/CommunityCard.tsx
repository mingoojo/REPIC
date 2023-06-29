import styled from 'styled-components';
import { UserData } from '../../type/types';
import getAuthorCommunity from '../../utils/getAuthorCommunity';
import CommnuityList from './CommnuityList';

type CommunityCardProps = {
  UserInfo : UserData
}

const Container = styled.div`
`;

export default function CommunityCard({ UserInfo }:CommunityCardProps) {
  const { AuthorCommunity } = getAuthorCommunity({ uid: UserInfo.uid });
  if (!AuthorCommunity.length) {
    return null;
  }
  return (
    <Container>
      <CommnuityList CommunityItems={AuthorCommunity} />
    </Container>
  );
}
