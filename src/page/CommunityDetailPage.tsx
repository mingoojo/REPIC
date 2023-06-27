import { useParams } from 'react-router-dom';
import CommunityDetailView from '../components/communityDetail/CommunityDetailView';
import getCommunityItem from '../utils/getCommunityItem';

export default function CommunityDetailPage() {
  const params = useParams();
  const { communityItem } = getCommunityItem({ DocId: String(params.id) });

  if (!communityItem.length) {
    return null;
  }

  return (
    <CommunityDetailView communityItem={communityItem} />
  );
}
