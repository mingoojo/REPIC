import { styled } from 'styled-components';
import { useEffect, useRef } from 'react';
import { CommunityItem } from '../../type/types';
import DetailItemView from './DetailItemView';
import CommnetView from './CommnetView';
import useFetchCommunityStore from '../../hooks/useFetchCommunityStore';
import { timeStamp } from '../../firebase/config';

type CommnityDetailViewProps = {
  communityItem : CommunityItem
}

const Container = styled.div`
`;

export default function CommnityDetailView({ communityItem }:CommnityDetailViewProps) {
  const { fetchUpdateCommunityViews } = useFetchCommunityStore();
  const updateValue = useRef(Number(
    String(timeStamp.fromDate(new Date()).seconds)
     + String(timeStamp.fromDate(new Date()).seconds),
  ));
  useEffect(() => {
    fetchUpdateCommunityViews({
      tranaction: 'community', docId: communityItem.id, updateKey: 'view', updateValue: updateValue.current,
    });
  }, []);
  return (
    <Container>
      <DetailItemView communityItem={communityItem} />
      <CommnetView communityItem={communityItem} />
    </Container>
  );
}
