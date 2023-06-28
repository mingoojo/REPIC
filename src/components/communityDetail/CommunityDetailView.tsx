import { useEffect } from 'react';
import { styled } from 'styled-components';
import { timeStamp } from '../../firebase/config';
import useCommunityStore from '../../hooks/useCommunityStore';
import useUserInfoStore from '../../hooks/useUserInfoStore';
import { CommunityItem } from '../../type/types';
import CommentsTable from './CommentsTable';
import CommunityItemTable from './CommunityItemTable';

type CommunityDetailViewProps = {
  communityItem : CommunityItem[]
}

const Container = styled.div`
  
`;

export default function CommunityDetailView({ communityItem }:CommunityDetailViewProps) {
  const [, communityStore] = useCommunityStore();

  // 조회수 증가
  useEffect(() => {
    const CreatedTime = String(timeStamp.fromDate(new Date()).seconds)
    + String(timeStamp.fromDate(new Date()).nanoseconds);
    communityStore.updateItemView({ docId: communityItem[0].id, updateValue: CreatedTime });
  }, []);

  return (
    <Container>
      <CommunityItemTable communityItem={communityItem} />
      <CommentsTable communityItem={communityItem} />
    </Container>
  );
}
