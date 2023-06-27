import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { CommunityItem, UserData } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';
import AuthorInfo from './AuthorInfo';
import ItemInfo from './ItemInfo';

type CommunityItemHeaderProps = {
  UserInfo : UserData[]
  communityItem : CommunityItem[]
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem 1rem 2rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};

@media (max-width: 720px){
  flex-direction: column;
  align-items: flex-start;
}
`;

export default function CommunityItemHeader({ UserInfo, communityItem }:CommunityItemHeaderProps) {
  return (
    <Container>
      <AuthorInfo UserInfo={UserInfo} communityItem={communityItem} />
      <ItemInfo communityItem={communityItem} />
    </Container>
  );
}
