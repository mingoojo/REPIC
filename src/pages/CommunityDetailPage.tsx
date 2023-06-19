import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useCommunityStore from '../hooks/useCommunityStore';
import useFetchCommunityStore from '../hooks/useFetchCommunityStore';
import CommnityDetailView from '../components/community-detail/CommnityDetailView';
import useFetchPrivateStore from '../hooks/useFetchPrivateStore';

export default function CommunityDetailPage() {
  const params = useParams();

  const { fetchGetCommunity } = useFetchCommunityStore();
  const { fetchGetPrivate } = useFetchPrivateStore();

  useEffect(() => {
    fetchGetCommunity();
    fetchGetPrivate();
  }, []);

  const [{ communityItems }] = useCommunityStore();

  const [communityItem] = communityItems.filter((item) => (
    item.id === params.id
  ));

  if (!communityItem) {
    return (
      null
    );
  }

  return (
    <div>
      <CommnityDetailView communityItem={communityItem} />
    </div>
  );
}
