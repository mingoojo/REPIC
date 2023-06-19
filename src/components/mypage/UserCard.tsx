import useCommunityStore from '../../hooks/useCommunityStore';
import useFetchThumbStorage from '../../hooks/useFetchThumbStorage';
import usePrivateStore from '../../hooks/usePrivateStore';
import CardHeader from './CardHeader';

type UserCardProps = {
  params : string
}

export default function UserCard({ params }:UserCardProps) {
  const [{ privateItem }] = usePrivateStore();
  const [{ communityItems }] = useCommunityStore();
  const { ThumbsDownload } = useFetchThumbStorage();

  const PrivateItem = privateItem.filter((item) => (
    item.uid === params
  ));
  const CommunityItems = communityItems.filter((item) => (
    item.uid === params
  ));

  if (CommunityItems.length === 0 || PrivateItem.length === 0) {
    return null;
  }

  console.log(CommunityItems);
  console.log(PrivateItem);

  return (
    <div>
      <CardHeader params={params} PrivateItem={PrivateItem} />
    </div>
  );
}
