import { useEffect } from 'react';
import useCommunityStore from '../hooks/useCommunityStore';
import { CommunityItem } from '../type/types';

type getCommunityItemProps = {
  uid : string
}

export default function getAuthorCommunity({ uid }:getCommunityItemProps) {
  const [{ communityItems }, communityStore] = useCommunityStore();

  useEffect(() => {
    communityStore.readCommnuityItemsInfo();
  }, []);

  const AuthorCommunity:CommunityItem[] = communityItems.filter((item) => (
    item.uid === uid
  ));

  return {
    AuthorCommunity,
  };
}
