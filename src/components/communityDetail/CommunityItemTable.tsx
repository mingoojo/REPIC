import { useEffect } from 'react';
import { styled } from 'styled-components';
import useUserInfoStore from '../../hooks/useUserInfoStore';
import { CommunityItem } from '../../type/types';
import CommunityItemBody from './CommunityItemBody';
import CommunityItemHeader from './CommunityItemHeader';

type CommunityItemTableProps = {
  communityItem : CommunityItem[]
}

const Container = styled.div``;

export default function CommunityItemTable({ communityItem }:CommunityItemTableProps) {
  const [{ UserInfo }, userInfoStore] = useUserInfoStore();

  useEffect(() => {
    userInfoStore.readUserInfo({ uid: communityItem[0].uid });
  }, []);

  if (!UserInfo.length) {
    return null;
  }

  return (
    <Container>
      <CommunityItemHeader UserInfo={UserInfo} communityItem={communityItem} />
      <CommunityItemBody communityItem={communityItem} />
    </Container>
  );
}
