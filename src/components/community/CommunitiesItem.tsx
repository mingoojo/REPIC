import { useEffect } from 'react';
import { styled } from 'styled-components';
import useUserInfoStore from '../../hooks/useUserInfoStore';
import { CommunityItem } from '../../type/types';
import ItemInfo from './ItemInfo';
import ItemTitle from './ItemTitle';
import ItemRow from './ItemRow';

type CommunityItemProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.textMain};
  color: ${(props) => props.theme.colors.textMain};;
  padding: 1rem 0.5rem 1rem 0.5rem;
  &:hover{
    background-color: ${(props) => props.theme.colors.buttonMain};
    h1{
      color: ${(props) => props.theme.colors.primary}
    }
  }

`;

export default function CommunitiesItem({ communityItem }:CommunityItemProps) {
  const [{ UserInfo }, userInfoStore] = useUserInfoStore();

  useEffect(() => {
    userInfoStore.readUserInfo({ uid: communityItem.uid });
  }, []);

  if (!UserInfo.length) {
    return null;
  }

  return (
    <Container>
      <ItemInfo communityItem={communityItem} UserInfo={UserInfo} />
      <ItemTitle communityItem={communityItem} />
      <ItemRow communityItem={communityItem} />
    </Container>
  );
}
