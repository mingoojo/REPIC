import { useEffect } from 'react';
import useCommunityStore from '../hooks/useCommunityStore';
import { CommunityItem } from '../type/types';

type getCommunityItemProps = {
  DocId : string
}

export default function getCommunityItem({ DocId }:getCommunityItemProps) {
  const [{ communityItems }, communityStore] = useCommunityStore();

  useEffect(() => {
    communityStore.readCommnuityItemsInfo();
  }, []);

  const communityItem:CommunityItem[] = communityItems.filter((item) => (
    item.id === DocId
  ));

  return {
    communityItem,
  };
}
