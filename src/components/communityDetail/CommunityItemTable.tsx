import { CommunityItem, UserData } from '../../type/types';
import CommunityItemBody from './CommunityItemBody';
import CommunityItemHeader from './CommunityItemHeader';

type CommunityItemTableProps = {
  UserInfo : UserData[]
  communityItem : CommunityItem[]
}

export default function CommunityItemTable({ UserInfo, communityItem }:CommunityItemTableProps) {
  return (
    <div>
      <CommunityItemHeader UserInfo={UserInfo} communityItem={communityItem} />
      <CommunityItemBody communityItem={communityItem} />
    </div>
  );
}
