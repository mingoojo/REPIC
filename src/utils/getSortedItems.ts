import { CommunityItem } from '../type/types';

type getSortedItemsProps = {
  communityItems : CommunityItem[]
}

export default function getSortedItems({ communityItems }:getSortedItemsProps) {
  const items = [1, 10, 7, 8, 9];
  const sortedItem = items.sort((a, b) => (b - a));
  console.log(sortedItem);
  const RecentItems = communityItems.sort((a, b) => (
    b.createdTime.seconds - a.createdTime.seconds
  ));
  console.log(RecentItems);
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
