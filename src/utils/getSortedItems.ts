import { CommunityItem } from '../type/types';

type getSortedItemsProps = {
  communityItems : CommunityItem[]
}

export default function getSortedItems({ communityItems }:getSortedItemsProps) {
  const RecentItems = communityItems.sort((a, b) => (
    b.createdTime.seconds - a.createdTime.seconds
  ));
  const ViewItems = communityItems.sort((a, b) => (
    b.view.length - a.view.length
  ));
  const LikeItems = communityItems.sort((a, b) => (
    b.likes.length - a.likes.length
  ));
  return {
    RecentItems, ViewItems, LikeItems,
  };
}
