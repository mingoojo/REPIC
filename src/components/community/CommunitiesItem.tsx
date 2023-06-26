import { CommunityItem } from '../../type/types';
import getCreatedTime from '../../utils/getCreatedTime';

type CommunityItemProps = {
  communityItem : CommunityItem
}

export default function CommunitiesItem({ communityItem }:CommunityItemProps) {
  const { date, atTime } = getCreatedTime({ createdTime: communityItem.createdTime });
  console.log(date, atTime, communityItem.likes.length, communityItem.title);
  return (
    <div>
      {communityItem.title}
    </div>
  );
}
