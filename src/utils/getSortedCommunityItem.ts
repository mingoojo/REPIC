import { CommunityItem } from '../type/types';

type getSortedItemProps = {
  Search : string
  communityItems: CommunityItem[]
}

export default function getSortedCommunityItem({ Search, communityItems }:getSortedItemProps) {
  const sortedItems = communityItems.filter((communityItem) => (
    communityItem.title.includes(Search.trim())
      || communityItem.text.includes(Search.trim())
  ));

  return {
    sortedItems,
  };
}
